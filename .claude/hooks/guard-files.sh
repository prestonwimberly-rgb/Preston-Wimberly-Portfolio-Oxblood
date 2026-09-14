#!/bin/bash
f=$(jq -r '.tool_input.file_path // empty')
[ -z "$f" ] && exit 0
rel=${f#"$CLAUDE_PROJECT_DIR"/}
case "$rel" in
  .env.example) exit 0 ;;
  package-lock.json|.env|.env.*|dist/*|netlify-dist/*|.next/*|build/*|output/*)
    echo "Blocked: $rel is generated or secret. Edit the source instead." >&2; exit 2 ;;
esac
exit 0
