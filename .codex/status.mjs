import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { get } from 'node:http';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const config = JSON.parse(readFileSync(new URL('./workflow.json', import.meta.url), 'utf8'));

function git(...args) {
  return execFileSync('git', ['--no-optional-locks', '-c', 'core.fsmonitor=false', ...args], {
    cwd: root,
    encoding: 'utf8',
    windowsHide: true,
  }).trimEnd();
}

function previewPort(value) {
  const port = Number(value);
  if (!/^\d+$/.test(String(value)) || port < 1 || port > 65535) {
    throw new Error('Invalid preview port: ' + value);
  }
  return port;
}

async function previewStatus(url, index, indexPath) {
  const signal = AbortSignal.timeout(1500);
  try {
    const response = await new Promise((resolve, reject) => {
      get(url, { agent: false, signal }, resolve).on('error', reject);
    });

    if (response.statusCode !== 200 || !index) {
      response.destroy();
      if (response.statusCode !== 200) return 'HTTP ' + response.statusCode + ' (unverified)';
      return 'HTTP 200 (no local ' + indexPath + ' to compare)';
    }

    let offset = 0;
    for await (const chunk of response) {
      const end = offset + chunk.length;
      if (!index.subarray(offset, end).equals(chunk)) {
        return 'home page differs from local ' + indexPath;
      }
      offset = end;
    }
    return offset === index.length
      ? 'home page matches local ' + indexPath
      : 'home page differs from local ' + indexPath;
  } catch (error) {
    if (error.code === 'ECONNREFUSED') return 'no listener responded';
    if (signal.aborted) return 'timed out (unverified)';
    return 'request failed (unverified)';
  }
}

const preview = config.actions.preview.find(([tool, script]) => tool === 'python' && script === '.codex/preview.py');
if (!preview?.[2]) throw new Error('No preview directory is defined in workflow.json.');

const ports = [...new Set(
  [process.env.PORT || config.port, config.port, ...(config.previewStatusPorts ?? [])].map(previewPort)
)];
const indexPath = preview[2] + '/index.html';
let index;
try {
  index = readFileSync(join(root, indexPath));
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}

const checkout = git('rev-parse', '--show-toplevel');
const head = git('rev-parse', '--short', 'HEAD');
const [branch, ...changes] = git('status', '--porcelain=v1', '--branch', '--untracked-files=normal').split(/\r?\n/);

console.log('Checkout: ' + checkout);
console.log('Git: ' + branch.slice(3) + ' (' + head + ')');
if (changes.length) {
  console.log('Local changes:');
  for (const change of changes) console.log('  ' + change);
} else {
  console.log('Local changes: clean');
}

console.log('Default preview port: ' + config.port);
if (!index) console.log('Local build: ' + indexPath + ' is missing');
const previews = await Promise.all(ports.map(async port => {
  const url = 'http://127.0.0.1:' + port + '/';
  return url + '  ' + await previewStatus(url, index, indexPath);
}));
for (const result of previews) console.log('Preview: ' + result);
