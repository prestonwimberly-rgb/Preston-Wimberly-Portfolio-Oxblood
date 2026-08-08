# Repository instructions

## 1. Repository identity and scope

- This repository is `prestonwimberly-rgb/Preston-Wimberly-Portfolio-Oxblood`.
  No other portfolio repository is in scope.
- This is Preston Wimberly's professional portfolio for brand strategy,
  communications, editorial work, aviation, product, music history, and
  independent practice.
- The portfolio must help hiring leaders and collaborators understand what
  Preston owned, what he made, and what changed, then start a conversation.
- Keep this portfolio distinct from the session-musician site at
  `prestonwimberly.com`, even when that work appears as a case study.

## 2. Required context

Before changing design, content, or implementation:

1. Read the installed shared skill at
   `/Users/margiewimberly/.codex/skills/rrl-web-design/SKILL.md` completely.
2. Read `README.md`, `docs/design-direction.md`, and
   `docs/launch-checklist.md`.
3. Inspect `data/projects.ts` for project content and verification notes.
4. Inspect `package.json`, `netlify.toml`, `config/site.json`,
   `config/deployment.json`, relevant image/social-card configuration, and the
   build and export scripts before changing technical behavior.
5. Start with the real audience, content, evidence, available assets, and
   conversion goal. Preserve distinctive existing work and state any necessary
   assumption.

The shared skill is the canonical authority for design philosophy and review.
The repository documents refine that standard for this portfolio and must not
be bypassed. The current code, configuration, and package scripts are the source
of truth for implementation details.

## 3. Shared design standard

- Governing formula: **RRL atmosphere + Texas Monthly hierarchy + Apple-level
  usability.**
- Treat heritage as a design philosophy, never a costume.
- Start with real audience, content, evidence, assets, and conversion goal
  before changing code.
- Let photography, typography, proportion, captions, and spacing carry the
  identity.
- Preserve fast, legible, responsive, accessible, obvious navigation.
- Reject costume heritage, fake age, luxury cosplay, creative-agency
  theatrics, mood without evidence, and direct imitation of RRL proprietary
  work.
- Use one dominant visual idea per page and remove unsupported decoration.
- Review desktop and mobile and fix the weakest of authenticity, hierarchy,
  material character, evidence, restraint, usability, performance, and
  accessibility first.

Translate principles; never copy an RRL or Texas Monthly font, mark, image,
copy, proprietary asset, campaign, page, or composition. When uncertain, remove
one visual device and strengthen the photograph, headline, caption, or spacing.

## 4. Project-specific direction

Use this page direction:

> A modern editorial portfolio for hiring leaders and collaborators that feels
> field-tested, tactile, and exacting and helps visitors see what Preston owned,
> what he made, and what changed.

- Preserve the restrained oxblood-and-paper editorial character, documentary
  photography, generous negative space, strong margins, fine rules, deliberate
  asymmetry, square geometry, and restrained motion.
- Keep Bodoni Moda for display type, Source Serif 4 for reading, and Source Sans
  3 for interface language unless a documented project need justifies change.
- Keep oxblood selective. Use paper on oxblood or black surfaces; never use
  black text on oxblood. Use muted grey only where contrast and importance allow.
- Build hierarchy with scale, whitespace, placement, captions, and an editorial
  grid before adding decoration. Do not add rounded cards, soft shadows,
  generic agency components, or atmospheric effects unsupported by the work.
- Preserve large display typography where it acts as composition, while keeping
  body text, controls, focus states, and navigation plainly readable.
- Lead the homepage with selected work. Each case study should make the problem,
  Preston's ownership, collaboration, central decision, finished work, and an
  observable change easy to scan.
- Treat photography as evidence. Preserve useful alt text, responsive crops,
  dimensions, captions, credits, dates, locations, permissions, and natural
  documentary character.
- Keep calls to action concise, visible, and practical. Motion may clarify
  hierarchy or feedback but must remain short and respect reduced motion.

## 5. Technical workflow

- Use Node.js 22.13 or later and install locked dependencies with `npm ci`.
- Use `npm run dev` for local development. Check `package.json` before using or
  documenting any other command.
- Run the complete repository quality gate with `npm run quality`. It lints,
  builds, generates responsive assets and social cards, exports the Netlify
  site, runs tests, and audits production dependencies.
- Netlify runs `npm run build:netlify` and publishes `netlify-dist/`. Review that
  output after relevant changes: five public routes, the branded `404.html`,
  `robots.txt`, `sitemap.xml`, canonical metadata, social cards, responsive
  AVIF/WebP assets, redirects, and security/cache headers.
- Preserve the no-application-JavaScript static export. Exported pages must not
  contain runtime scripts, module preloads, or runtime image URLs.
- Preserve preview and branch-deploy `noindex, nofollow` metadata and the
  fully-disallowing `robots.txt` behavior.
- `public/optimized/` and `public/social/` are generated from repository config.
  Do not hand-edit or commit generated outputs unless the repository policy is
  intentionally changed with approval.
- Reuse the existing responsive image pipeline and semantic design tokens.
  Preserve contrast-safe combinations, keyboard behavior, reduced motion, and
  the static export architecture.

## 6. Content and evidence rules

- Evidence outranks atmosphere. Support claims with real work, people, places,
  dates, process, specifications, sources, or observable results.
- Keep role, ownership, collaborators, client attribution, dates, outcomes,
  metrics, leadership scope, rights, and permissions accurate and specific.
  Never imply authority or impact beyond the record.
- Treat every `verificationNotes` entry in `data/projects.ts` and every open item
  in `docs/launch-checklist.md` as unresolved until Preston confirms it. Narrow
  or remove an unverifiable claim instead of inventing a replacement.
- Keep The Wild Feathers archive private and its public link absent until image
  rights and fact-checking are resolved. Preserve provenance and uncertainty.
- Do not change the Wimberly Guitars co-founder/offer language, Texas Aviation
  Partners authority/collaboration claims, or the session-musician duration and
  service claims without evidence and approval.
- Use captions to add names, place, date, process, credit, or consequence. Do not
  use imagery as generic lifestyle decoration.
- Preserve factual verification notes and content guardrails even when they are
  not public-facing. Do not turn internal uncertainty into polished public copy.

## 7. Verification

- Run `npm run quality` after implementation changes and require the GitHub
  Actions Quality job to pass before treating work as ready.
- Review the generated `netlify-dist/` output and test `/`, all four `/work/.../`
  routes, both legacy redirects, the branded 404, crawl files, metadata, links,
  images, and the absence of unexpected runtime scripts.
- Review at 1440px desktop, 390px mobile, and the 320px narrow-phone edge case.
  Check intentional crops, hierarchy, reading order, overflow, and touch targets.
- Check keyboard focus order, visible focus, skip links, semantics, labels, alt
  text, contrast, reduced motion, and 44px touch targets.
- Score authenticity, editorial hierarchy, material character, evidence,
  restraint, usability, performance, and accessibility from 1 to 5. Fix the
  weakest category first; strong atmosphere does not excuse a weakness elsewhere.
- For design pull requests, complete the evidence and desktop/mobile review in
  `.github/PULL_REQUEST_TEMPLATE/design-qa.md`.

## 8. Git and deployment safety

- Confirm the exact `origin` repository and inspect `git status` before editing.
  Preserve user work, use a focused branch, stage only intended files, and keep
  commits narrowly scoped.
- Do not merge, publish, promote a deploy, alter Netlify or Sites settings,
  change domains or DNS, archive repositories, or submit a sitemap without
  Preston's explicit approval.
- Do not choose between Netlify and the existing Sites binding without Preston's
  explicit approval. Repository work does not authorize changing either service.
- Keep the default canonical origin at
  `https://preston-wimberly-portfolio.netlify.app` until an approved custom
  domain resolves reliably and the release checklist is complete.
- Preview and branch deploys are review artifacts, not production approval.
  Never treat a passing build or draft pull request as authorization to launch.
