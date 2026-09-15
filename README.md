# Preston Wimberly portfolio

The working portfolio for Preston Wimberly, Creative Director. The site uses
evidence-led work across aviation, product, music history, and independent
practice to show one consistent method: find what is already true, decide what
matters, and give the whole thing a clear form.

The configured canonical production origin is
[`work.prestonwimberly.com`](https://work.prestonwimberly.com/).
The separate session-musician site remains at
[`prestonwimberly.com`](https://prestonwimberly.com/).

## Repository, production, and environment map

Verified against the repository configuration and Netlify on September 14, 2026.

| Target | Location |
| --- | --- |
| GitHub source | [prestonwimberly-rgb/Preston-Wimberly-Portfolio-Oxblood](https://github.com/prestonwimberly-rgb/Preston-Wimberly-Portfolio-Oxblood) |
| Production branch | `main` |
| Live site | [work.prestonwimberly.com](https://work.prestonwimberly.com/) |
| Netlify project | [preston-wimberly-portfolio](https://app.netlify.com/projects/preston-wimberly-portfolio) |
| Canonical Windows checkout | `C:\Users\pwimb\Documents\GitHub\Preston-Wimberly-Portfolio-Oxblood` |
| Publish directory | `netlify-dist/` |
| Local preview | [127.0.0.1:4172](http://127.0.0.1:4172/) |

Netlify sets `SITE_URL` to the canonical production origin. The source default and `.env.example` use the same origin; a local `.env` file is optional. Netlify pins Node.js 22.13.0; local actions accept Node.js 22.13 or later and require Python 3 and locked npm dependencies. Preview deployments intentionally emit noindex metadata.

Use `node .codex/workflow.mjs setup`, `node .codex/workflow.mjs check`, and
`node .codex/workflow.mjs preview` from the canonical checkout. The tracked
`.codex/environments/environment.toml` delegates to `.codex/workflow.json` through
that runner. `.netlify/state.json` is an ignored local association with the project
above; it is not the source of hosted settings. Preview processes stop at reboot.

The September 11 setup worktrees are historical snapshots with separate commits;
they are preserved, not current production checkouts. Use the canonical folder
above for ongoing work. Dated handoff notes describe the commit they checked;
compare local `HEAD`, freshly fetched `origin/main`, and Netlify's published
production `commit_ref` before asserting synchronization after another release.

## Working with Codex and Claude

Codex and Claude Code use [AGENTS.md](AGENTS.md) as the shared project instructions.
[CLAUDE.md](CLAUDE.md) imports that file; keep project rules there instead of
duplicating them in assistant-specific notes. Read this README for commands and
check the current source/configuration before relying on deployment descriptions.
Preserve existing changes. Commit, push, merge, and deploy only when explicitly
authorized for the requested action.

Start with these version-controlled records:

- [AGENTS.md](AGENTS.md): shared working rules for both agents.
- [CLAUDE.md](CLAUDE.md): Claude Code's entry point, importing those rules.
- [.codex/SYNC-STATUS.md](.codex/SYNC-STATUS.md): current task, branch, inspected
  commit, changes, validation, blockers, and next action.
- [Design direction](docs/design-direction.md): the portfolio's Prairie Airframe
  identity and documented decisions.
- [Launch checklist](docs/launch-checklist.md): content clearance and release gates.
- [Local development](#local-development), [build and deployment](#build-and-deployment),
  and [project structure](#project-structure): setup, validation, and architecture.
- [Workflow configuration](.codex/workflow.json): the commands used by the
  [portable runner](.codex/workflow.mjs).

Shared context lives in these files, not solely in private chats. The next agent
needs the correct repository, branch, and file versions; the tools do not
automatically synchronize their conversations or checkouts. Compare the handoff
with the actual working tree before continuing. Update it with meaningful work,
and keep lasting decisions in the relevant linked document.

“Push and merge to main” authorizes the complete
[release completion workflow](AGENTS.md#9-release-completion), including local
synchronization, preview refresh, and production verification.

## Local development

Use Node.js 22.13 or later.

```bash
npm ci
npm run dev
```

The complete local quality gate is:

```bash
npm run quality
```

This lints the source, generates responsive images and social cards, builds and
exports the static site, runs the rendering and asset tests, and audits
all dependencies, including build tooling.

## Build and deployment

Netlify runs `npm run build:netlify` and publishes `netlify-dist/`, as declared
in `netlify.toml`. The export contains six public routes, a branded `404.html`,
`robots.txt`, `sitemap.xml`, generated social cards, and responsive AVIF/WebP
assets. No application JavaScript is required in the exported pages.

`SITE_URL` controls the canonical origin. Copy `.env.example` for local testing;
its default is the portfolio production origin at `work.prestonwimberly.com`.
Netlify preview and branch-deploy contexts automatically emit noindex metadata
and a fully disallowing robots file.

Generated assets live in `public/optimized/` and `public/social/`. They are not
committed; `npm run build` recreates them from `config/images.json` and
`config/social-cards.json`.

## Project structure

- `app/` — homepage, memoir, case-study routes, metadata, 404, and global styles
- `components/` — responsive image markup
- `config/` — site, deployment, image, and social-card configuration
- `data/projects.ts` — the four case-study records and internal verification notes
- `docs/design-direction.md` — visual-system rationale and guardrails
- `docs/launch-checklist.md` — domain, content-verification, QA, and release checklist
- `scripts/` — image generation and static Netlify export
- `tests/` — build, HTML, accessibility-token, asset, and deployment checks

## Publishing guardrails

Do not publish, change domains or DNS, archive a repository, or promote a deploy
without Preston’s explicit approval. Resolve the fact and rights checks listed in
`docs/launch-checklist.md` before treating the revised portfolio as launch-ready.

## Codex local environment

Codex actions and worktree setup are versioned in
`.codex/environments/environment.toml`, so fresh clones and worktrees receive the
same commands. Other machine-specific Codex files remain ignored. Claude Code
and terminal sessions can use the commands in this README; the Codex action
buttons are optional conveniences:

- **Preview** builds the static Netlify export and serves `netlify-dist/` at
  `http://127.0.0.1:4172/`.
- **Build** runs `npm run build:netlify`.
- **Check** runs `npm run quality` and checks the Git diff for whitespace errors.

Worktree setup installs the locked dependencies with `npm ci --engine-strict --no-fund`.
Preview rebuilds on launch; for live development, use the existing `npm run dev`
workflow. Set `PORT` in the preview launch environment to override its port. Stop a
preview with Ctrl+C before starting it again. Local preview does not reproduce Netlify
headers, redirects, or form delivery.

## Windows and shared handoff

The Codex actions use the portable `node .codex/workflow.mjs` runner on Windows, macOS, and Linux. Both assistants can use `setup`, `preview`, and `check` from the repository root. Commands, minimum Node version, and the default preview port live in `.codex/workflow.json`; keep them aligned with the checks above. Python 3 must be available as `python` on Windows or `python3` elsewhere. Preview rebuilds the public output and serves it on localhost with caching disabled.

Read [.codex/SYNC-STATUS.md](.codex/SYNC-STATUS.md) for the dated checkout, deployment, and unfinished-work handoff. Update that record after verification; do not treat an old status as current evidence. Keep standing project rules in `AGENTS.md`, imported by `CLAUDE.md`.
