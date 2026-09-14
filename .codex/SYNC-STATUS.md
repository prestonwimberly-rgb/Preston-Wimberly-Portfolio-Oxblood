# Shared synchronization handoff

Verified 2026-09-14 by Codex. Read README.md and AGENTS.md first; CLAUDE.md imports the same rules. This is dated evidence, not a guarantee about later changes.

- Canonical Windows checkout: `C:\Users\pwimb\Documents\GitHub\Preston-Wimberly-Portfolio-Oxblood`.
- Local HEAD and fetched origin/main: `68a202da65b3a64b6558f4ecaecaf9530b29bc8d`.
- Ready production deploy: `6aa775d522ac98000847108e` on `preston-wimberly-portfolio`; branch `main`; matching commit verified through Netlify.
- Live site: https://work.prestonwimberly.com.
- Local preview: http://127.0.0.1:4172/, verified HTTP 200. Preview is a local process and must be restarted after reboot.
- Local runtime: Node 24.19.0, npm 12.0.2, Python 3.14.6. Locked dependencies refreshed where applicable.
- Netlify local state points to production site `40544a2e-0307-455e-a5d9-4c7732f8b90d`. This is a local association only; hosted settings, domains, and deployments were not changed.

## Verification

Full npm run quality passed: lint, build/export, 19 tests, and production dependency audit (0 vulnerabilities). Lint rerun after environment changes passed.

Live and local homepage, representative routes, robots.txt, and sitemap.xml returned HTTP 200. These were HTTP/content checks, not a complete new visual audit. No production forms were submitted. Windows portable preview actions were run successfully; macOS/Linux execution was not tested here.

## Preserved work and environment differences

Production SITE_URL is https://work.prestonwimberly.com. The untracked scripts/build-creative-director-resume.py is preserved. Its underline token appears to add one unused Tailwind utility to local CSS, changing the generated filename; the remaining CSS matches production. The dependency install reported 14 development-tool vulnerabilities; the required production audit reports zero. No forced dependency upgrades were applied.

The September 11 setup worktree is historical and contains one unique unmerged setup commit. It was inspected and preserved, not rebased or reset. Use the canonical checkout above for current site work.

## Pending handoff

The shared README/AGENTS/CLAUDE guidance from GitHub is synchronized. This pass additionally repaired portable Windows commands and recorded this handoff. Those new workflow/documentation changes remain local and uncommitted; they have not been pushed or deployed. Preserve the existing unrelated files when staging a future authorized release.

At the next handoff, record the branch/commit, exact changed files, checks and failures, local preview, production deploy commit, and remaining work here. Never copy credentials or production secrets into this file. Both assistants should update this same record rather than maintain conflicting private notes.

Backups and detailed evidence: `C:/Users/pwimb/Documents/Codex/repo-sync-2026-09-14/`.

## Claude review — 2026-09-14

Reviewed by Claude Code after re-fetching origin. Local HEAD still equals origin/main; the portable runner (workflow.mjs, preview.py) is byte-identical across all five repositories, and CLAUDE.md still imports AGENTS.md. Nothing was committed, pushed, merged, or deployed.
- Changed: nothing beyond this handoff note. `scripts/build-creative-director-resume.py` left untracked and untouched.
- Checks run: `node .codex/workflow.mjs check` passed (`npm run quality`: lint, build, 19 tests, production audit 0 vulnerabilities; git diff --check).
- Unresolved: repo Claude hooks (`eslint-fix.sh`, `guard-files.sh`) are still shell scripts; they run under Git Bash but were not ported like TAP/guitars. Environment name changed to "Portfolio" (cosmetic). 14 dev-tool npm advisories remain.
- Next action: commit the sync tooling when authorized; decide whether the résumé generator belongs in the repo.
- Previews on 4171–4175 all returned HTTP 200 at the end of this review.
