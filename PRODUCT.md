# Product

<!-- impeccable:product-schema 1 -->

Product record for Preston Wimberly's professional portfolio. Standing rules live
in [AGENTS.md](AGENTS.md); visual direction lives in
[docs/design-direction.md](docs/design-direction.md); claim clearance lives in
[docs/launch-checklist.md](docs/launch-checklist.md). This file does not override
them. Confirmed with Preston on November 23, 2026.

## Platform

web

## Users

Two audiences carry equal weight. When their needs conflict, neither outranks
the other; find a solution that serves both.

- **Hiring leaders** evaluating Preston for Creative Director or brand
  leadership roles. They scan for scope, ownership, and results, then take the
  résumé into a hiring process.
- **Client collaborators** considering Preston for independent creative
  direction, brand strategy, and editorial engagements. They look for evidence
  that he can carry work from interviews and strategy through writing,
  photography, design, and launch.

Both arrive needing to see what Preston owned, what he made, and what changed,
quickly enough to decide whether to start a conversation.

## Product Purpose

A working portfolio for Preston Wimberly, Creative Director. It uses
evidence-led work across aviation, product, music history, and independent
practice to show one method: find what is already true, decide what matters,
and give the whole thing a clear form.

A visit succeeds when the visitor does at least one of these:

- starts an email conversation;
- downloads the résumé PDF;
- opens and reads a case study.

## Positioning

Preston's range is hands-on: he directs the work and also writes, photographs,
designs, and ships it. Each case study is real, attributable work with dated
evidence (a launched client website cited by its city, a public band archive
with counted records, a founded guitar workshop, a finished memoir manuscript).
Writing, photography, design, and digital production are proof of the
direction, not competing job titles.

## Operating Context

- Live at `https://work.prestonwimberly.com` (canonical origin in
  `config/site.json`). Kept separate from the session-musician site at
  `prestonwimberly.com`, even where that practice appears here as a case study.
- Routes: homepage, four case studies under `/work/[slug]/`, `/sandpaper`, and a
  branded 404. Two legacy paths redirect.
- Primary path: scan the selected work, open the most relevant case study, then
  email or download the résumé.
- Case studies, in homepage order: Texas Aviation Partners (The Airfield),
  Wimberly Guitars (The Object), The Wild Feathers archive (The Road), and
  Sandpaper (The Manuscript). The session-musician practice stays available as
  compact independent practice.
- The Sandpaper page is portfolio evidence of writing and book-design range for
  the same two audiences. It is not a pitch to publishers or a reader-facing
  book page.

## Capabilities and Constraints

- Next.js/vinext React source exported as a static site with no application
  JavaScript, published from `netlify-dist/` by Netlify. Preserve that
  architecture.
- Responsive AVIF/WebP images and social cards are generated from `config/`;
  generated outputs are not hand-edited or committed.
- Preview and branch deploys emit `noindex, nofollow` and a disallowing
  `robots.txt`.
- Content lives in `data/projects.ts`, including internal `verificationNotes`
  that stay unresolved until Preston confirms them.
- Downloads: `public/downloads/preston-wimberly-resume.pdf` and
  `public/downloads/sandpaper-four-hundred.pdf`.
- Releases, domains, DNS, hosting settings, and the choice between Netlify and
  the Sites binding require Preston's explicit approval (see AGENTS.md).

## Brand Commitments

- Name and title: Preston Wimberly, Creative Director.
- Voice: direct, practical, plainspoken, concise. Preserve approved wording and
  deliberate voice. No em dashes, stock transitions, forced contrasts, or
  unsupported claims. AGENTS.md lists the dated prohibited terms.
- Prairie Airframe is the current approved visual direction, recorded in
  `docs/design-direction.md`. `DESIGN-SYSTEM.md` (Oxblood) is superseded and
  kept as history.

## Evidence on Hand

- Texas Aviation Partners: live site captures (August and September 2026),
  original photography, the City of San Marcos City Manager's Weekly Report of
  October 2, 2026, a Texas Capital airshow print ad, and the Jim Wimberly
  profile. The earlier 40% traffic claim is unverified and must not appear.
- The Wild Feathers: archive counts verified October 5, 2026 (410 performance
  records, 209 archive records, 125 source records, seven flagship stories, one
  supporting road record, six chapters). The archive is a separate release
  scope; do not extend coverage without Preston's confirmation.
- Wimberly Guitars: Preston is the founder; The Jack has a build waitlist and
  The Heirloom is in development (checked November 10, 2026). Cleared images
  are listed in the launch checklist. Co-founder and offer language does not
  change without evidence and approval.
- Sandpaper: complete memoir manuscript, three parts, 38 chapters, typeset in
  EB Garamond at 6 × 9 inches, with an excerpt PDF.
- Session musician: two decades across guitar, pedal steel, bass, studio,
  television, and touring are confirmed. No booking or inquiry evidence exists;
  do not invent it.
- No testimonials, client quotes, or measured business results are on file.
  Do not fabricate them.

## Product Principles

1. Evidence outranks atmosphere. Every claim points to real work, people,
   places, dates, or observable results; narrow an unverifiable claim rather
   than replace it.
2. Ownership is legible. A visitor can tell what Preston owned, who he worked
   with, and what changed without reading every paragraph.
3. Serve both audiences on the same path. Hiring leaders and client
   collaborators reach the work, the résumé, and the email through one
   structure, not separate tracks.
4. The work leads. Selected work comes before method, and the strongest
   artifact comes before dense detail.
5. Separate scopes stay separate. The musician site, the band archive, and the
   guitar workshop each keep their own release and claim boundaries.

## Accessibility & Inclusion

Review at 1440px, 390px, and 320px. Keep keyboard focus order, visible focus,
skip links, labeled controls, alt text, contrast-safe color pairings, reduced
motion, and 44px touch targets, as listed in AGENTS.md section 7.
