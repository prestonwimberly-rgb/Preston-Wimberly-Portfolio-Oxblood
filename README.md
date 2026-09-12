# Preston Wimberly portfolio

The working portfolio for Preston Wimberly, Creative Director. The site uses
evidence-led work across aviation, product, music history, and independent
practice to show one consistent method: find what is already true, decide what
matters, and give the whole thing a clear form.

The configured canonical production origin is
[`work.prestonwimberly.com`](https://work.prestonwimberly.com/).
The separate session-musician site remains at
[`prestonwimberly.com`](https://prestonwimberly.com/).

## Shared agent workflow

Codex and Claude Code use [AGENTS.md](AGENTS.md) as the shared project instructions.
[CLAUDE.md](CLAUDE.md) imports that file; keep project rules there instead of
duplicating them in assistant-specific notes. Read this README for commands and
check the current source/configuration before relying on deployment descriptions.
Preserve existing changes. Commit, push, merge, and deploy only when explicitly
authorized for the requested action.

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
production dependencies.

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

On this Mac, Codex actions are defined in the ignored local file
`.codex/environments/environment.toml`. That file is not carried into a fresh
clone by Git. Claude Code and terminal sessions can use the shell commands in
this README; the Codex action buttons are optional conveniences:

- **Preview** builds the static Netlify export and serves `netlify-dist/` at
  `http://127.0.0.1:4172/`.
- **Build** runs `npm run build:netlify`.
- **Check** runs `npm run quality` and checks the Git diff for whitespace errors.

Worktree setup installs the locked dependencies with `npm ci --engine-strict --no-fund`.
Preview rebuilds on launch; for live development, use the existing `npm run dev`
workflow. Set `PORT` in the preview launch environment to override its port. Stop a
preview with Ctrl+C before starting it again. Local preview does not reproduce Netlify
headers, redirects, or form delivery.
