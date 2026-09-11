import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = fileURLToPath(new URL('../', import.meta.url));
const config = JSON.parse(fs.readFileSync(new URL('./workflow.json', import.meta.url), 'utf8'));
const action = process.argv[2];
if (!Object.hasOwn(config.actions, action)) {
  console.error('Use setup, preview, build, or check.');
  process.exit(2);
}
const current = process.versions.node.split('.').map(Number);
const minimum = config.minimumNode.split('.').map(Number);
if (current[0] < minimum[0] || (current[0] === minimum[0] && current[1] < minimum[1])) {
  console.error('Node.js ' + config.minimumNode + ' or later is required.');
  process.exit(1);
}
if (action === 'preview') console.log('Preview: http://127.0.0.1:' + config.port + '/ (Ctrl+C to stop)');
for (const [tool, ...args] of config.actions[action]) {
  console.log('> ' + [tool, ...args].join(' '));
  const npmOnWindows = tool === 'npm' && process.platform === 'win32';
  if (npmOnWindows && args.some(arg => !/^[a-zA-Z0-9_.:@/-]+$/.test(arg))) {
    throw new Error('Unsupported npm argument in workflow configuration.');
  }
  const executable = tool === 'node' ? process.execPath : npmOnWindows ? process.env.ComSpec || 'cmd.exe' : tool;
  const commandArgs = npmOnWindows ? ['/d', '/s', '/c', ['npm', ...args].join(' ')] : args;
  const result = spawnSync(executable, commandArgs, {
    cwd: root, stdio: 'inherit', windowsHide: true,
  });
  if (result.error) console.error(result.error.message);
  if (result.error || result.status !== 0) process.exit(result.status || 1);
}
console.log(config.name + ': ' + action + ' completed.');
