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

1. Read `README.md`, `docs/design-direction.md`, and
   `docs/launch-checklist.md`.
2. Inspect `data/projects.ts` for project content and verification notes.
3. Inspect `package.json`, `netlify.toml`, `config/site.json`,
   `config/deployment.json`, relevant image/social-card configuration, and the
   build and export scripts before changing technical behavior.
4. Start with the real audience, content, evidence, available assets, and
   conversion goal. Preserve distinctive existing work and state any necessary
   assumption.

`docs/design-direction.md` records the current design direction; update it when
Preston changes the brief. The current code, configuration, and package scripts
are the source of truth for implementation details.

## 3. Design direction

- Follow Preston's current creative direction. Existing styles, palettes,
  typography, layouts, and aesthetic guidance here or in supporting documents
  are editable defaults; change them when requested.
- No shared design skill is required or canonical. Use aesthetic skills only
  when Preston explicitly requests them.

The following describes the current Prairie Airframe direction:

- Governing tension: **warmth without sentimentality; precision without
  sterility; history without nostalgia; modernism without coldness.**
- Build with structure before decoration, horizontal gravity, honest materials,
  a warm object inside a cool frame, and utility that creates beauty.
- Start with real audience, content, evidence, assets, and conversion goal
  before changing code.
- Let photography, typography, proportion, captions, and spacing carry the
  identity.
- Preserve fast, legible, responsive, accessible, obvious navigation.
- Reject fake age, decorative aviation motifs, generic agency theatrics, stock
  atmosphere, bubbly UI, and mood without evidence.
- Use one dominant visual idea per page and remove unsupported decoration.
- Review desktop and mobile and fix the weakest of authenticity, hierarchy,
  material character, evidence, restraint, usability, performance, and
  accessibility first.

Use the named Prairie Airframe palette, type roles, contrast pairings, 8px spacing
system, and square construction rules documented in `docs/design-direction.md`.
When uncertain, remove one visual device and strengthen the photograph,
headline, caption, or spacing.

## 4. Project-specific direction

Use this page direction:

> A modern editorial portfolio for hiring leaders and collaborators that feels
> field-tested, tactile, and exacting and helps visitors see what Preston owned,
> what he made, and what changed.

- Preserve documentary photography, generous negative space, strong margins,
  fine rules, deliberate asymmetry, square geometry, and restrained motion.
- Use Archivo for orientation and structure, Newsreader for narrative and human
  consequence, and IBM Plex Mono only for true dates and identifiers.
- Prairie Bone and Instrument Black carry the system. Aviation Blue carries
  authority. Wright Brick is a measured signal, never a field color or small
  text on Instrument Black. Airframe Aluminum is a structural fill or rule,
  never text on Prairie Bone.
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
  site, runs tests, and audits all dependencies, including build tooling.
- Netlify runs `npm run build:netlify` and publishes `netlify-dist/`. Review that
  output after relevant changes: six public routes, the branded `404.html`,
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
- The Wild Feathers archive's current working record (410 performance records,
  209 archive records, seven flagship stories and one supporting road record,
  six chronological chapters, and 125 source records) is cleared for portfolio
  use, including the homepage's live link to the archive, per
  `docs/launch-checklist.md`. The archive's own domain
  (`thewildfeathersband.com`) is live and publicly indexable as of
  September 12, 2026, recorded in that checklist. It remains a separate
  release scope: portfolio work does not authorize an archive release, and
  existing publication is not permission to publish new or uncleared
  material. Preserve provenance and uncertainty; re-confirm with Preston
  before extending coverage beyond the cleared record above.
- Do not change the Wimberly Guitars co-founder/offer language, Texas Aviation
  Partners authority/collaboration claims, or the session-musician duration and
  service claims without evidence and approval.
- Use captions to add names, place, date, process, credit, or consequence. Do not
  use imagery as generic lifestyle decoration.
- Preserve factual verification notes and content guardrails even when they are
  not public-facing. Do not turn internal uncertainty into polished public copy.

## 7. Verification

- Run `npm run quality` after implementation changes before treating work as
  ready.
- Review the generated `netlify-dist/` output and test `/`, `/sandpaper`, all four `/work/.../`
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
- Preserve the approved canonical origin `https://work.prestonwimberly.com`
  recorded in `config/site.json` and `docs/launch-checklist.md`. Configuration
  does not prove live DNS, TLS, or deployment state; verify those during
  authorized release work.
- Preview and branch deploys are review artifacts, not production approval.
  Never treat a passing build or draft pull request as authorization to launch.

## 9. Release completion

- When I say “push and merge to main,” complete the release: run the required
  checks, commit and push the intended changes, merge into GitHub main,
  synchronize the canonical local checkout, rebuild and restart the relevant
  preview, and verify the matching production deployment on the public domain.
  Preserve unfinished work. Check for stale active worktrees and missing
  environment configuration. Finish by reporting the merged commit, local sync
  status, preview URL, live URL, and anything still out of date. Preserve
  historical archives.
- This request supplies the explicit authorization required above for the
  scoped commit, push, pull request, merge, and routine production release through
  the existing approved hosting configuration. Continue those steps without
  asking for the same approval again. Follow any narrower scope Preston states;
  retain existing content-clearance rules and separate authorization for changes
  to hosting settings, domains, DNS, or access controls.
- Use this README's documented checks and preview commands. Refresh locked
  dependencies when needed and rebuild only where the project has a build step.
  Verify the preview serves the synchronized checkout and uses the tracked
  environment definition. Machine-specific files remain local.
