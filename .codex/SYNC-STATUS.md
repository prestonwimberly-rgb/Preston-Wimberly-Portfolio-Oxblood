# Shared Codex and Claude handoff

Verified September 15, 2026. Read [README.md](../README.md), [AGENTS.md](../AGENTS.md),
and applicable local instructions. [CLAUDE.md](../CLAUDE.md) imports the shared rules.

## Verified release baseline

- Repository: [prestonwimberly-rgb/Preston-Wimberly-Portfolio-Oxblood](https://github.com/prestonwimberly-rgb/Preston-Wimberly-Portfolio-Oxblood).
- Canonical checkout: `C:\Users\pwimb\Documents\GitHub\Preston-Wimberly-Portfolio-Oxblood`.
- Live site: [https://work.prestonwimberly.com](https://work.prestonwimberly.com). Netlify project: `preston-wimberly-portfolio`.
- PR [#41](https://github.com/prestonwimberly-rgb/Preston-Wimberly-Portfolio-Oxblood/pull/41) is merged. At the start of this review, local `main`, freshly fetched `origin/main`, and Netlify's published production commit matched `b610aa11911a486c7d069e18174ede87e9669ec1`.
- Production deployment `6aa992e2a68bf80008a4ca9f` is ready and published at `2026-09-15T18:56:10.755Z` on branch `main`.
- This snapshot was checked on September 15. Earlier public-route checks remain dated evidence. No production form submission or manual browser review was performed for these documentation edits; fresh automated release checks are listed below.

## Completed preceding audit

- Branch `codex/repository-docs-audit-2026-09-15` started from `1b5715f` and was released through PR #41. That completed release is the baseline above.
- Corrected stale pre-release handoffs and made `.codex/README.md` eligible for version control in `.gitignore`; those local pointers had been ignored and absent from GitHub. Updated README with the shared pointer and post-release recording rule. Replaced the two configured Bash/jq hooks with Node equivalents after reproducing the missing-jq failure.
- Shared rules remain in AGENTS, Claude imports them, and this is the single current-state handoff. Shared files do not synchronize private conversations or independently prove Claude loaded them.

## Files in the preceding audit

- `README.md`
- `.gitignore`
- `.codex/README.md`
- `.codex/SYNC-STATUS.md`
- `.claude/settings.json`
- `.claude/hooks/guard-files.mjs`
- `.claude/hooks/eslint-fix.mjs`

## Earlier implementation verification

Release checks were rerun after Preston's September 15 authorization. The
independent pre-merge review found no release-blocking defects.

- `node .codex/workflow.mjs check`: The quality gate passed lint, build/static export, 19 tests, and npm audit with zero vulnerabilities. The Claude hook migration passed 39 protected/allowed path and lint-hook cases; lint passed again after editing the hooks.
- Passed after the audit edits: local README links/anchors, active `@AGENTS.md` imports, workflow actions, and Git diff whitespace. All configured Claude hooks passed syntax and harmless-event checks. These checks do not verify a running Claude session. The `.codex/README.md` pointer is included with its `.gitignore` exception so fresh checkouts receive it.
- No full factual review of website claims, hosted environment-variable review, or production form test was performed. The README now separates the September 15 repository/deploy check from the September 14 hosted-setting evidence.

## Preserved work and remaining issues

Preserve the pre-existing untracked `.agents/skills/` additions and `scripts/build-creative-director-resume.py`; they are unrelated work and must not be included in this audit commit. Preserve the September 11 worktree and Prairie Airframe direction. The old shell hook files remain for history; settings now call the Node hooks.

## Historical evidence

Earlier site and content-clearance evidence remains in Git history and docs/launch-checklist.md. No new content or rights approval was obtained. Earlier handoff versions remain in Git history; do not treat their pre-release next actions as outstanding after the verified merge above.

## Continuing after this release

Fetch `origin/main`, inspect the checkout and uncommitted work, and read these
shared files before continuing. Preserve the named drafts and historical worktrees.
The release PR records its final merge and deployment; do not create a separate
documentation release just to embed its own merge commit here. Recheck deployment
state when needed. Existing Claude Code sessions need to reload changed instructions.

## Current documentation review

- Date: September 15, 2026. Branch: `codex/readme-verification-2026-09-15`,
  based on the verified release baseline above.
- Clarified the date of hosted SITE_URL evidence and the release bookkeeping rule. Kept the verified build, export, Node version, and quality commands.
- Changed files: `README.md` and `.codex/SYNC-STATUS.md`.
- Release authorization: Preston requested "push and merge to main" after this
  four-repository documentation review. This covers its scoped commit, push,
  PR, merge, local synchronization, preview refresh, and routine production release.
  The release PR for this branch records the final merge and deploy evidence.
- Validation passed: Markdown structure and line endings, local links and heading
  anchors, active Claude import, tracked shared files, workflow/action targets,
  README Node/port values, and `git diff --check`.
- Authorized release check: `node .codex/workflow.mjs check` passed.
  Lint, the static build/export, all 19 tests, and npm audit passed with zero vulnerabilities. The existing Vite native-loader compatibility warnings remain non-blocking; no dependency or configuration change was made.
- Next action: complete the authorized release and record final verification in
  its PR. On a later task, inspect Git and Netlify before treating this snapshot
  as current; do not repeat a release already completed in that record.
