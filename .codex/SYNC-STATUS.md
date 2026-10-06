# Shared Codex and Claude handoff

Verified September 15, 2026. Read [README.md](../README.md), [AGENTS.md](../AGENTS.md),
and applicable local instructions. [CLAUDE.md](../CLAUDE.md) imports the shared rules.

## October 5, 2026 release preparation

- Preston explicitly requested "push and merge to main" for the career/client
  refinement below. GitHub CLI is authenticated as `prestonwimberly-rgb` with
  ADMIN permission on the exact origin. Fetched `origin/main` and Netlify's
  published production commit both remain `b36558423b1fc52d6517fcf445901588fd6c9460`.
  Only this canonical worktree is active; the configured origin and optional
  SITE_URL default are present. No hosting settings or environment values changed.
- Updated development tooling to `@cloudflare/vite-plugin` 1.62.5 and Wrangler
  4.147.0, plus compatible transitive security fixes in the lockfile. Locked
  `npm ci --engine-strict --no-fund` passed. The supported Node minimum remains
  compatible with the tracked Netlify Node 22.13 setting.
- Fresh `npm run quality`: lint, build/export, and all 19 tests passed; the
  all-dependency audit still fails with seven high findings tracing to one
  unpatched `braces` advisory (GHSA-vfj7-8cjw-p6xm). Production-only audit has
  zero vulnerabilities. The upstream advisory lists no patched release;
  npm's forced fix would downgrade the framework/lint tooling, so it was not run.
- Preston explicitly approved releasing with the documented `braces` audit
  exception after reviewing the remaining findings and passing functional and
  production-only checks. Commit/push/merge and production verification follow
  this preparation record; the release PR records their final status. No audit
  configuration or threshold was weakened. Pre-existing README and September 17
  handoff edits remain unrelated and must stay uncommitted.
- Additional intended files: `package.json` and `package-lock.json`. Evidence:
  ignored `outputs/career-client-review/release-*.log` and audit JSON files.
  The local preview was restarted from the freshly rebuilt `netlify-dist/` at
  `http://127.0.0.1:4172/`. This is a local preparation record, not a release.

## October 5, 2026 career and independent-client refinement

- Repository/site: `prestonwimberly-rgb/Preston-Wimberly-Portfolio-Oxblood`,
  `https://work.prestonwimberly.com`. Canonical Mac root confirmed from Git.
  Started on `main` at `b36558423b1fc52d6517fcf445901588fd6c9460`; local work
  is on `codex/portfolio-career-client-refinement` at that same commit.
  Nothing was staged, committed, pushed, merged, or deployed. Existing README
  and September 17 handoff edits were preserved. No overrides were found.
- Keep/change judgment: keep the visual direction, typography, photography,
  project structure, voice, and ownership record; reconcile résumé facts and
  make the TAP result and independent-project invitation more specific.
- Changed files in this task: `app/page.tsx`, `data/projects.ts`,
  `scripts/prepare-portfolio-pdfs.py`, `public/downloads/preston-wimberly-resume.pdf`,
  `docs/launch-checklist.md`, `docs/portfolio-agency-review.md`, and this handoff.
  The README diff was already present and was not edited in this task.
- Résumé: regenerated from the existing ReportLab builder, preserving its
  one-page letter layout. TAP reads as launched, with independent execution
  and company leadership review/approval. The authoritative archive's
  `content/concerts.json`, `content/photos.json`, and `content/sources.json`
  contain 410, 209, and 125 records, matching its public shows, archive, and
  sources ledgers. Counts are dated October 5, 2026 in both résumé and case.
  No archive files or historical résumé variants were edited.
- TAP: clarified the delivered path from capabilities to airport experience
  and contact, plus leadership profiles, Field Notes, and field photography.
  The business problem, decision, before/after captures, responsibilities,
  and documented leadership request/response are preserved. The company's
  airport operating figures are not attributed to the redesign.
- Contact: names brand positioning, website launch/refresh, photography, and
  sales materials. Agency/in-house roles and the existing session-musician
  link remain. No prices, availability promise, form, or services page added.
  No people-management, hiring, or budget authority inferred; the guitar
  campaign remains explicitly speculative and unlaunched.
- Validation: final `npm run quality` passed lint, image/social generation,
  build/static export, and all 19 tests, then failed `npm audit` with 14
  vulnerabilities (10 high, 4 moderate) in development/build dependencies.
  Separate `npm audit --omit=dev` passed with zero vulnerabilities. Package
  manifests and lockfile are unchanged; the full quality gate is not green.
- Browser: reviewed all six public routes and branded 404 at 1440px, 390px,
  and 320px. No overflow, missing alt attributes, duplicate IDs, runtime
  scripts, or sub-44px visible controls found. All 34 local link/fragment
  checks passed. A transient preview socket error affected one TAP image at
  390px; a targeted retry loaded all six images with no browser errors and
  returned HTTP 200 for that exact AVIF. Visually reviewed contact, TAP
  outcomes/comparison, archive counts, and the rendered one-page résumé.
- Keyboard skip link/focus and reduced motion passed at all three widths.
  Crawl files, canonical metadata, original asset paths, and both legacy
  redirect targets were checked. Eleven relevant external URLs returned 200.
  The source, exported, and preview-served résumé PDFs are byte-identical.
  `git diff --check` passed. The Python preview does not emulate Netlify
  redirects/security headers; no deployment or form submission was tested.
- Editorial scores (1–5): authenticity 5, hierarchy 4, material character 4,
  evidence 3, restraint 5, usability 4, performance 4, accessibility 4.
  Evidence remains weakest: consistency and delivered capabilities were
  improved, but no redesign-specific traffic, inquiries, revenue, savings,
  testimonial, or performance result is documented. The earlier 40% traffic
  claim remains unresolved and excluded. No new Lighthouse or formal
  assistive-technology audit is claimed.
- Local preview: `http://127.0.0.1:4172/`, serving the synchronized local
  `netlify-dist/` via the documented `.codex/preview.py` command with PORT 4172.
  Logs, screenshots, PDF render, browser/link results, image retry, and audits
  are in ignored `outputs/career-client-review/`.
- Next concrete action: review the local copy and résumé. Resolve dependency
  maintenance before treating the full gate as passing, and collect dated TAP
  result evidence before adding business metrics. Any release needs separate
  authorization; the historical authorizations below do not cover this work.

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
