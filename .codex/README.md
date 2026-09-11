# Codex project commands

Open this repository root as the Codex project. Select Portfolio in Local environments when starting a worktree.

- Setup: checks Node.js and installs locked dependencies with `npm ci`.
- Preview: http://127.0.0.1:3000/; stop with Ctrl+C.
- Build: runs the existing repository build.
- Check: runs the existing repository verification commands and stops on failure.

The same actions run in a terminal with `node .codex/workflow.mjs setup`, `preview`, `build`, or `check`.

These commands do not deploy, push, or change production settings. Keep this folder in Git when you intentionally commit the setup so future clean worktrees receive it.
