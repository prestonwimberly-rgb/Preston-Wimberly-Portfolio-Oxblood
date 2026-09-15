# Shared synchronization handoff

Last updated: September 15, 2026. Read [README](../README.md) and
[shared instructions](../AGENTS.md); [CLAUDE.md](../CLAUDE.md) imports those rules.

## Current task and checkout

- Repository: `prestonwimberly-rgb/Preston-Wimberly-Portfolio-Oxblood`.
- Website: [work.prestonwimberly.com](https://work.prestonwimberly.com/), confirmed
  by `config/site.json` and the matching Netlify project. This is separate from
  the session-musician site.
- Checkout: `C:\Users\pwimb\Documents\GitHub\Preston-Wimberly-Portfolio-Oxblood`.
- Starting branch: `main`; inspected starting commit:
  `fc543aa979f8ccd38bc5f8f2a822e4a800d3d92c` (merge of PR #39).
- Task branch: `codex/shared-agent-handoff`, created from that local commit.
- Task: complete the existing shared documentation and handoff system.
  Documentation edits were committed as `a1a7199`. Preston then explicitly
  requested “push and merge to main” on September 15, authorizing the scoped
  release through existing hosting. At this record, release validation passed;
  push, merge, local sync, preview refresh, and production verification follow.
  Resolve their outcome from GitHub/Netlify before claiming completion.
- Files changed: `README.md`, `AGENTS.md`, `CLAUDE.md`, `.codex/SYNC-STATUS.md`.
  No competing handoff file was created.

## Changes and decisions to preserve

- README's “Working with Codex and Claude” section links the shared rules,
  handoff, design authority, release checklist, setup, and architecture.
- AGENTS adds checkout verification, preservation of other contributors' work,
  reconciliation of stale handoffs, accurate validation reporting, and finishing
  requirements. Release authorization explicitly depends on an actual request
  to “push and merge to main”; this task does not authorize release.
- CLAUDE retains its active `@AGENTS.md` import and points to this handoff.
  Shared decisions belong in tracked files, not separate private chat histories.
- Preserve Prairie Airframe, static export without application JavaScript,
  approved canonical origin, and content/rights guardrails in the existing docs.
  No website implementation, content, assets, dependencies, environment files,
  or deployment configuration changed.
- Preserve the pre-existing untracked `.agents/skills/` additions and
  `scripts/build-creative-director-resume.py`; they are outside this task and
  must not enter its commit. Tracked files were clean at the starting point.

## Validation and publication boundary

- Inspected repository remote, branch, HEAD, status, recent history, root agent
  files, README, design direction, launch checklist, project content structure,
  package scripts, Netlify/site configuration, and portable workflow runner.
- No ancestor instruction files or repository `AGENTS.override.md` files were
  found in the checked ancestor chain and repository inventory. No nested agent
  instructions apply to these four files; no override conflict was found.
- No configured `core.hooksPath`, active default Git hooks, or GitHub Actions
  workflows were found. The repository has no dedicated documentation check;
  `.codex/workflow.mjs check` runs the full site quality gate.
- Documentation validation: local Markdown links and anchors, active import,
  preserved existing guidance, four-file diff scope, and whitespace checked.
  Initial documentation work did not run a site audit. After release approval,
  `npm run quality` passed lint, build/export, all 19 tests, and npm audit with
  zero vulnerabilities. The existing Vite future-loader warning is nonblocking.
  No dependency installation was needed. Browser verification follows release.
- Netlify's read-only connector confirmed project `preston-wimberly-portfolio`
  and the configured public URL. Its response does not expose branch/PR build
  triggers. Preston subsequently authorized the routine release; this resolves
  the original publication blocker. No hosting settings or permissions changed.
- Current remote-main synchronization and public production behavior were not
  verified at the initial documentation pass. The release preflight fetched
  origin/main and confirmed it still matched the starting commit; GitHub CLI
  uses prestonwimberly-rgb with ADMIN permission on this exact repository.
  Claude loading these instructions was not verified.

## Dated baseline retained from the preceding handoff

The September 14 record reports local main, fetched origin/main, and published
Netlify matching `5895ff3482ff80089911acb9883ee23b19cfc645` before a maintenance
release, with deployment `6aa82f6f405ad80007b8611e` published at
2026-09-14T17:39:48.310Z. This predates the inspected starting commit above and
is historical evidence, not current synchronization status. Its evidence folder
is `C:/Users/pwimb/Documents/Codex/repo-sync-2026-09-14/`; it was not inspected
in this task.

That record reports a clean `npm ci`, passing `npm run quality`, 19 tests, zero
audit vulnerabilities including development dependencies, and a nonblocking
Vite configuration-loader warning. Those checks were not rerun here. The stored
form test marker is `PW-DELIVERY-20260914-A`; storage and email delivery are
separate checks, and tests must not be repeated automatically. Historical
September 11 worktrees remain preserved; they were not inspected in this task.

## Next concrete action

Push this documentation branch, open “Set up shared Codex and Claude handoff”
against main, wait for required checks, and merge under Preston's September 15
approval. Then fast-forward the canonical checkout, rebuild/start the tracked
preview on port 4172, and verify the matching production commit and public site.
Report the merged SHA, PR, local sync, preview, and deployment evidence. Preserve
the separate historical worktree at commit `cd27d6a` and all untracked work.
Another local agent can read this branch now; other checkouts need its exact
file versions. Shared files do not automatically synchronize private chats.
