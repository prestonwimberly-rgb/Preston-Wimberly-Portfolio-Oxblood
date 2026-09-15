import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const input = JSON.parse(fs.readFileSync(0, 'utf8'));
const file = input.tool_input?.file_path;
if (!file || !/\.(?:ts|tsx|mjs|js|jsx)$/.test(file)) process.exit(0);
const root = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const target = path.resolve(root, file);
if (!fs.existsSync(target)) process.exit(0);
const result = spawnSync(process.execPath, [
  path.join(root, 'node_modules/eslint/bin/eslint.js'), '--fix', target,
], { cwd: root, encoding: 'utf8', windowsHide: true });
if (result.error || result.status !== 0) {
  console.error(result.error?.message || result.stdout + result.stderr);
  process.exit(2);
}
