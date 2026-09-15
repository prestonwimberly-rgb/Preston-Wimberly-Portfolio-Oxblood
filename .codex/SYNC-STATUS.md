# Shared Codex and Claude handoff

Verified September 15, 2026. Read [README.md](../README.md), [AGENTS.md](../AGENTS.md),
and applicable local instructions. [CLAUDE.md](../CLAUDE.md) imports the shared rules.

## Verified release baseline

- Repository: [prestonwimberly-rgb/Preston-Wimberly-Portfolio-Oxblood](https://github.com/prestonwimberly-rgb/Preston-Wimberly-Portfolio-Oxblood).
- Canonical checkout: `C:\Users\pwimb\Documents\GitHub\Preston-Wimberly-Portfolio-Oxblood`.
- Live site: [https://work.prestonwimberly.com](https://work.prestonwimberly.com). Netlify project: `preston-wimberly-portfolio`.
- PR [#40](https://github.com/prestonwimberly-rgb/Preston-Wimberly-Portfolio-Oxblood/pull/40) is merged. Local `main`, freshly fetched `origin/main`, and Netlify's published production commit matched `1b5715f5b90dd674f6ee0c7ed75d40ed4f2de477` at this audit's start.
- Production deployment `6aa962f5a18e500008341ed6` is ready and published at `2026-09-15T15:29:04.239Z` on branch `main`.
- Homepage, robots.txt, sitemap.xml, and selected inner routes returned HTTP 200. This verifies availability, not every interactive behavior or form delivery.

## Current audit work

- Branch: `codex/repository-docs-audit-2026-09-15`, based on the verified release commit above.
- Release authorization: Preston explicitly requested "push and merge all of this to main" on September 15, 2026 for all five active sites, including `thewildfeathersband.com`. This covers the scoped audit corrections and the existing release workflow. Use the pull request for this task branch and its release record to resolve delivery state; the baseline above predates this audit.
- Corrected stale pre-release handoffs and made `.codex/README.md` eligible for version control in `.gitignore`; those local pointers had been ignored and absent from GitHub. Updated README with the shared pointer and post-release recording rule. Replaced the two configured Bash/jq hooks with Node equivalents after reproducing the missing-jq failure.
- Shared rules remain in AGENTS, Claude imports them, and this is the single current-state handoff. Shared files do not synchronize private conversations or independently prove Claude loaded them.

## Files in this audit

- `README.md`
- `.gitignore`
- `.codex/README.md`
- `.codex/SYNC-STATUS.md`
- `.claude/settings.json`
- `.claude/hooks/guard-files.mjs`
- `.claude/hooks/eslint-fix.mjs`

## Verification

Release checks were rerun after Preston's September 15 authorization. The
independent pre-merge review found no release-blocking defects.

- `node .codex/workflow.mjs check`: The quality gate passed lint, build/static export, 19 tests, and npm audit with zero vulnerabilities. The Claude hook migration passed 39 protected/allowed path and lint-hook cases; lint passed again after editing the hooks.
- Passed after the audit edits: local README links/anchors, active `@AGENTS.md` imports, workflow actions, and Git diff whitespace. All configured Claude hooks passed syntax and harmless-event checks. These checks do not verify a running Claude session. The `.codex/README.md` pointer is included with its `.gitignore` exception so fresh checkouts receive it.
- No full factual review of website claims, hosted environment-variable review, or production form test was performed. The README environment map retains its explicitly dated September 14 baseline.

## Preserved work and remaining issues

Preserve the pre-existing untracked `.agents/skills/` additions and `scripts/build-creative-director-resume.py`; they are unrelated work and must not be included in this audit commit. Preserve the September 11 worktree and Prairie Airframe direction. The old shell hook files remain for history; settings now call the Node hooks.

## Historical evidence

Earlier site and content-clearance evidence remains in Git history and docs/launch-checklist.md. No new content or rights approval was obtained. Earlier handoff versions remain in Git history; do not treat their pre-release next actions as outstanding after the verified merge above.

## Continuing after this release

Fetch `origin/main`, inspect the actual checkout and uncommitted work, and read
these shared files before starting a new task. The audit pull request is identified
by head branch `codex/repository-docs-audit-2026-09-15`; its merged state and release
record supply the delivery evidence for this revision. Do not repeat the earlier
release in the baseline above or infer pending work from an older handoff.
Compare GitHub main and Netlify's published production commit when current deployment
state matters. Preserve the named drafts and historical worktrees. Restart existing
Claude Code sessions to load the current project instructions and hook settings.
