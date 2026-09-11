# Portfolio evidence and navigation refinement — September 11, 2026

## Design scope

- Classification: **REFINE**. Reorder existing work and reuse existing controls,
  artifacts, photography, and typography.
- Homepage: TAP, Wimberly Custom Guitars, The Wild Feathers, SANDPAPER.
  Chapter numbers and next-case navigation follow the revised project order.
- TAP: show the earlier/live homepage comparison directly below the brief,
  followed by ownership, collaboration, and the documentary field photographs.
- Wimberly: move the existing print, social, and email campaign before the
  website walkthrough and process explanation. Keep its speculative status.
- Shared navigation: add a plain desktop resume link. It is hidden at 760px
  and below; the existing homepage About-section resume link remains available.
- Add early live-site links to TAP and Wimberly, preserving their closing links.
- Wild Feathers: retain public-review status and consolidate the separate-domain
  release explanation into one access note. Internal release restrictions remain.

## Evidence and permission sources

Preston requested these refinements and supplied the TAP collaboration example:
leadership wanted more of Jim Wimberly's Southwest Airlines experience in the
1980s and 1990s and knowledge of a successful aviation culture. The published
Jim Wimberly profile was inspected directly; it connects the airport and airline
career with TAP's approach to people, service, accountability, and operations.
The case study links that finished profile to the leadership request. No business
metric, testimonial, additional leadership authority, or sales result was added.
The specific content clearance is recorded in `docs/launch-checklist.md`.

## North Star review

- [x] The work and its attribution are more specific.
- [x] Launched client work leads; artifact and navigation hierarchy is clearer.
- [x] Documentary photography and adjacent captions/credits remain intact.
- [x] Mobile comparison images stack in reading order without clipped content.
- [x] Existing Prairie Airframe fonts, palette, geometry, and spacing remain.
- [x] No decorative effects, copied brand assets, or additional motion were added.

## Portfolio and implementation QA

- [x] Fonts, semantic tokens, responsive image generation, and static export preserved.
- [x] Ownership, collaboration, dates, project status, and outcomes stay within the record.
- [x] Six public routes checked at 1440px, 390px, and 320px: no horizontal overflow,
  no overflowing headings/captions/links, one H1 per page, and useful image alt text.
- [x] Desktop TAP comparison, collaboration, homepage first project, and earlier
  Wimberly campaign reviewed visually; phone selected work, stacked comparison,
  case opening, and narrow campaign reviewed visually.
- [x] Header controls remain at least 44px high and wide. Keyboard focus follows
  skip link, wordmark, Work, About, Resume; each has a visible 3px outline.
- [x] Skip-link anchor works. Reduced-motion mode computes automatic scrolling.
- [x] `npm run quality`: lint, complete build/export, all 19 tests, and zero
  production dependency vulnerabilities. `npx tsc --noEmit` also passes.
- [x] Seven exported HTML files, including the branded 404, checked against
  294 local links/assets/fragment targets: no missing references.
- [x] Export tests cover route canonicals, social assets, robots, sitemap, preview
  indexing protection, and absence of application scripts/module preloads.
- [x] TAP homepage, Jim's profile, and Wimberly homepage return HTTP 200.
- [x] Both legacy redirects and security/cache headers remain unchanged in
  `netlify.toml`. The local static server does not emulate Netlify redirects.

At 1440px, the TAP comparison section begins about 660px from the page top.
The Wimberly campaign begins about 1,683px down, previously about 3,256px.
The new top live-site link accounts for approximately 60px of added page height.

Review scores (1–5): authenticity 5, hierarchy 5, material character 4,
evidence 4, restraint 5, usability 5, performance 4, accessibility 4.
Evidence was the weakest category; the confirmed leadership request and linked
profile improve it. Measured client outcomes remain unverified and excluded.

Detailed local evidence is in ignored `outputs/evidence-hierarchy/`. The existing
untracked `.codex/` directory and resume-builder script are preserved.
