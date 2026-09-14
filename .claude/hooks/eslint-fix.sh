#!/bin/bash
f=$(jq -r '.tool_input.file_path // empty')
case "$f" in
  *.ts|*.tsx|*.mjs|*.js|*.jsx) ;;
  *) exit 0 ;;
esac
[ -f "$f" ] || exit 0
cd "$CLAUDE_PROJECT_DIR" || exit 0
out=$(npx --no-install eslint --fix "$f" 2>&1) || { echo "$out" >&2; exit 2; }
exit 0
