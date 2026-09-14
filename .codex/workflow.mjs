import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = fileURLToPath(new URL('../', import.meta.url));
const config = JSON.parse(fs.readFileSync(new URL('./workflow.json', import.meta.url), 'utf8'));
const action = process.argv[2];
if (!Object.hasOwn(config.actions, action)) {
  console.error('Available actions: ' + Object.keys(config.actions).join(', '));
  process.exit(2);
}
const current = process.versions.node.split('.').map(Number);
const minimum = config.minimumNode.split('.').map(Number);
if (current[0] < minimum[0] || (current[0] === minimum[0] && current[1] < minimum[1])) {
  throw new Error('Node.js ' + config.minimumNode + ' or later is required.');
}
const env = { ...process.env, PORT: process.env.PORT || String(config.port) };
for (const [tool, ...args] of config.actions[action]) {
  console.log('> ' + [tool, ...args].join(' '));
  const batch = ['npm', 'npx'].includes(tool) && process.platform === 'win32';
  if (batch && args.some(arg => !/^[a-zA-Z0-9_.:@/=-]+$/.test(arg))) {
    throw new Error('Unsupported argument in workflow configuration.');
  }
  const executable = tool === 'node' ? process.execPath : tool === 'python' ? (process.platform === 'win32' ? 'python' : 'python3') : batch ? process.env.ComSpec || 'cmd.exe' : tool;
  const commandArgs = batch ? ['/d', '/s', '/c', [tool, ...args].join(' ')] : args;
  const result = spawnSync(executable, commandArgs, { cwd: root, stdio: 'inherit', windowsHide: true, env });
  if (result.error) console.error(result.error.message);
  if (result.error || result.status !== 0) process.exit(result.status || 1);
}
console.log(config.name + ': ' + action + ' completed.');
