import fs from 'node:fs';
import path from 'node:path';

let input;
try {
  input = JSON.parse(fs.readFileSync(0, 'utf8'));
} catch {
  console.error('Cannot validate file protection: invalid hook input.');
  process.exit(2);
}
const file = input.tool_input?.file_path;
if (!file) process.exit(0);
const root = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const relative = path.relative(root, path.resolve(root, file)).replaceAll('\\', '/');
const name = process.platform === 'win32' ? relative.toLowerCase() : relative;
if (name === '.env.example') process.exit(0);
if (/^(?:package-lock\.json|\.env(?:\..*)?)$/.test(name)
    || /^(?:dist|netlify-dist|\.next|build|output)\//.test(name)) {
  console.error(`Blocked: ${relative} is generated or secret. Edit the source instead.`);
  process.exit(2);
}
