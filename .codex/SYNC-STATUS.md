# Shared synchronization handoff

Updated September 14, 2026. Read README.md and AGENTS.md first; CLAUDE.md imports the same rules. This record replaces the contradictory earlier handoffs, preserved in the external evidence folder.

## Canonical environment

- Checkout: `C:\Users\pwimb\Documents\GitHub\Preston-Wimberly-Portfolio-Oxblood`.
- GitHub: https://github.com/prestonwimberly-rgb/Preston-Wimberly-Portfolio-Oxblood; production branch: `main`.
- Live site: https://work.prestonwimberly.com; Netlify project: `preston-wimberly-portfolio`.
- Local preview: http://127.0.0.1:4172/; publish directory: `netlify-dist/`. Restart the preview after reboot or a build change.
- Netlify sets `SITE_URL` to the canonical production origin. The source default and `.env.example` use the same origin; a local `.env` file is optional. Netlify pins Node.js 22.13.0; local actions accept Node.js 22.13 or later and require Python 3 and locked npm dependencies. Preview deployments intentionally emit noindex metadata.

## Last verified synchronization baseline

Before this maintenance release, local main, fetched origin/main, and the published Netlify deployment matched commit `5895ff3482ff80089911acb9883ee23b19cfc645`. Deployment `6aa82f6f405ad80007b8611e` was ready and published at 2026-09-14T17:39:48.310Z. These are dated baseline identifiers, not the commit containing this document. Resolve the current release through GitHub and Netlify before the next change.

All five repositories passed their portable setup/check actions. The combined verification passed 74 live/local HTTP and content checks and desktop/mobile browser review. Workflow tooling and README updates are merged; the old claim that they remain uncommitted is obsolete. The baseline evidence is in `C:/Users/pwimb/Documents/Codex/repo-sync-2026-09-14/`.

## Maintenance and form verification

The September 14 dependency maintenance update passes a clean npm ci and npm run quality: lint, static build/export, all 19 tests, and a full npm audit with zero vulnerabilities. The quality gate now includes development dependencies. Preserve the untracked scripts/build-creative-director-resume.py. Vite reports a nonblocking warning about a future native configuration loader; the current build passes.

The test marker is `PW-DELIVERY-20260914-A`. Form storage and email delivery are separate checks; a success page alone does not confirm either. Do not repeat tests automatically.

## Handoff discipline

The September 11 setup worktree contains historical work and remains preserved. Use the canonical checkout for current development. Keep unrelated drafts out of commits. Never copy credentials or hosted secret values here. Local preview and production contexts intentionally differ where README documents analytics or indexing behavior.

For the next handoff, replace this record with a dated account of changed files, actual checks, current release evidence, and remaining work. Do not append a competing status or claim deployment before verifying the published commit and public routes.
