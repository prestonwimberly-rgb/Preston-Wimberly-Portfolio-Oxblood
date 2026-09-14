---
name: release
description: Ship the portfolio — run checks, commit, push, merge to GitHub main, sync the local checkout, refresh the preview, and verify production at work.prestonwimberly.com.
disable-model-invocation: true
argument-hint: "[scope or commit summary]"
---

# Release

Running `/release` is the same authorization as "push and merge to main" in
`AGENTS.md` §9: scoped commit, push, pull request, merge, and routine production
release through the existing Netlify configuration. It does not authorize
changes to hosting settings, domains, DNS, access controls, or The Wild Feathers
archive. Follow any narrower scope given in `$ARGUMENTS`.

## 1. Orient

- Confirm the Git root is `Preston-Wimberly-Portfolio-Oxblood` and the remote is
  `prestonwimberly-rgb/Preston-Wimberly-Portfolio-Oxblood`. Confirm `gh auth status`
  uses that account.
- Re-read `AGENTS.md`, `README.md`, and `docs/launch-checklist.md`.
- `git status`, `git fetch origin`, `git worktree list`. Report stale worktrees;
  do not remove them.
- Identify the intended changes. Leave unrelated or unfinished work unstaged and
  say so. If the intended scope is unclear, ask before continuing.
- Check `.env.example` against required environment configuration and report gaps.

## 2. Check

```bash
npm ci --engine-strict --no-fund   # only if package-lock.json changed or node_modules is stale
npm run quality
git diff --check
```

Stop and report on any failure. Do not bypass checks.

## 3. Commit and merge

- If on `main`, create a focused branch first.
- Stage only intended files by path. Commit with a clear message ending in the
  session's attribution line.
- Push, open a PR against `main`, wait for required checks, then merge with
  `gh pr merge --merge` (or the repo's existing convention). Never force-push.

## 4. Synchronize locally

```bash
git switch main
git pull --ff-only origin main
```

Confirm `HEAD` matches `origin/main` and record the merged commit SHA. Restore
any preserved unfinished work.

## 5. Refresh preview

Stop any running preview, then rebuild and serve the synchronized checkout
using the tracked Preview action in `.codex/environments/environment.toml`
(`npm run build:netlify`, served from `netlify-dist/` at
`http://127.0.0.1:4172/`). Inspect key pages in the browser for broken images
and layout issues.

## 6. Verify production

- Confirm the Netlify production deploy for the merged commit finished
  (Netlify tools or `npx netlify-cli api listSiteDeploys` if available).
- Load `https://work.prestonwimberly.com` and the pages touched by this release.
  Confirm the changes are present, images load, and production is indexable
  (no preview `noindex`).
- Distinguish local validation from verified live state. If the deploy is not
  verifiable, say so plainly.

## 7. Report

- Merged commit SHA and PR link
- Local sync status
- Preview URL
- Live URL and verification result
- Anything still out of date, skipped, or blocked

Update the affected README with the verified result if the release changes
documented state.
