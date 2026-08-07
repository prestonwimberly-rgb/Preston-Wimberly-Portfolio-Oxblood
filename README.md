# Preston Wimberly portfolio

The working portfolio for Preston Wimberly: brand strategist, communications
lead, editor, and website maker. The site presents evidence-led work across
aviation, product, music history, and independent practice without losing its
restrained editorial character.

Production currently lives at
[`preston-wimberly-portfolio.netlify.app`](https://preston-wimberly-portfolio.netlify.app/).
The separate session-musician site remains at
[`prestonwimberly.com`](https://prestonwimberly.com/).

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
in `netlify.toml`. The export contains five public routes, a branded `404.html`,
`robots.txt`, `sitemap.xml`, generated social cards, and responsive AVIF/WebP
assets. No application JavaScript is required in the exported pages.

`SITE_URL` controls the canonical origin. Copy `.env.example` for local testing;
keep its default Netlify origin until a custom portfolio subdomain is approved
and connected. Netlify preview and branch-deploy contexts automatically emit
`noindex` metadata and a fully disallowing robots file.

Generated assets live in `public/optimized/` and `public/social/`. They are not
committed; `npm run build` recreates them from `config/images.json` and
`config/social-cards.json`.

## Project structure

- `app/` — homepage, case-study route, metadata, 404, and global styles
- `components/` — responsive image markup
- `config/` — site, deployment, image, and social-card configuration
- `data/projects.ts` — the four case-study records and internal verification notes
- `docs/design-direction.md` — visual-system rationale and guardrails
- `docs/launch-checklist.md` — domain, content-verification, QA, and release checklist
- `scripts/` — image generation and static Netlify export
- `tests/` — build, HTML, accessibility-token, asset, and deployment checks
- `.github/workflows/quality.yml` — pull-request and main-branch quality workflow

## Publishing guardrails

Do not publish, change domains or DNS, archive a repository, or promote a deploy
without Preston’s explicit approval. Resolve the fact and rights checks listed in
`docs/launch-checklist.md` before treating the revised portfolio as launch-ready.
