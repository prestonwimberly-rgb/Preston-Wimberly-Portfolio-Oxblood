# Portfolio revision — September 10, 2026

## Scope and intent

REFINE the established portfolio; REMOVE repetitive case-study scaffolding.
The accepted review called for a faster path from the business problem to the
work, clearer attribution and project status, stronger writing samples, a
résumé, and a clearly labeled campaign concept. The existing routes, fonts,
photography, palette, and static export remain in place.

- Homepage order: Wimberly Guitars, Texas Aviation Partners, The Wild Feathers,
  SANDPAPER. The session-musician case remains supporting independent work.
- Cases now move through a brief, hero artifact, ownership/collaboration,
  selected artifacts, the central decision, and the observable result.
- Repeated direction records, evidence panels, deliverables lists, oversized
  secondary statements, duplicate images, and the standalone rifle reference
  were removed from the public presentation. Existing factual verification
  notes remain in `data/projects.ts`.
- TAP's proposed redesign is labeled as a review build. Its current public
  website is a reference link, not a structured-data example of the redesign.
- The Wild Feathers is labeled as a publicly accessible Netlify review archive;
  release to its owned domain remains a separate task.
- “Willie in Las Vegas” has a direct homepage link and an attributed first-person
  quotation in its case study.
- Contact language welcomes agency and in-house roles as well as independent
  projects. The linked résumé contains supported experience, without the
  unverified traffic, budget, team-size, or sales claims in an older draft.
- Guitar campaign extension: “The next chapter is yours,” expressed as a print
  advertisement, three-frame social sequence, and launch email. All are
  speculative portfolio executions, not launched client work or measured results.
- Higgsfield remains an optional, keyboard-accessible native video with explicit
  AI disclosure, no autoplay, and no application JavaScript.

## Manuscript and résumé sources

The source is Preston's existing `SANDPAPER_best .pdf`, verified as 141 pages,
432 × 648 points per page. The original is unchanged and is not copied into
the public directory.

- The HTML excerpt is a continuous selection from “Four Hundred,” printed pages
  115–116, ending before the paragraph beginning “I learned…”. Only extraction
  artifacts such as line-end hyphenation and lost spaces/apostrophes were repaired.
- Interior previews reproduce actual facing pages 114–115 and 116–117. Individual
  pages open at full size. They are rendered pages, not generated book mockups.
- The downloadable PDF contains the complete “Four Hundred” chapter, printed
  pages 115–116 only. The rest of the manuscript stays outside the site.
- `scripts/prepare-portfolio-pdfs.py pages <original-pdf-path>` uses PyMuPDF to
  render the source pages and extract the chapter. `resume` uses ReportLab to
  create the one-page résumé. These are optional preparation commands, not
  deployment dependencies. The resulting source assets are committed with the
  project; responsive AVIF/WebP files remain generated and ignored.
- Resume evidence is the confirmed biography, project ownership and collaboration
  in `data/projects.ts`, and content clearances in `docs/launch-checklist.md`.
  No employment dates were inferred from project dates.

## Design QA

- Reviewed the six public routes at 1440px desktop, 390px mobile, and 320px narrow
  phone. No horizontal overflow or headings/links/captions outside the viewport.
- Reviewed the guitar campaign, manuscript reading view, interior pages, résumé,
  case-study openings, and mobile work selection visually.
- SANDPAPER stays on one line. The archive headline and next-project names wrap
  between words. Hero captions sit below the image at every width.
- Native motion disclosure opens with Enter and its video starts with keyboard
  controls. Navigation, labels, focus styles, semantic headings, responsive image
  dimensions, and reduced-motion styles are retained.
- Approximate desktop page heights: homepage 7,067px; guitars 6,632px; TAP 4,585px;
  archive 4,331px; session case 4,049px. The previous case heights were approximately
  10,096px, 9,812px, 11,050px, and 8,366px respectively. The book page gains actual
  reading material and page proofs rather than being shortened artificially.

Review scores, 1–5: authenticity 5; hierarchy 4; material character 4; evidence 3;
restraint 4; usability 4; performance 4; accessibility 4. Evidence is the remaining
weakness: verified client outcomes, quotations, and concrete team-leadership
examples would strengthen the portfolio. None were invented to fill that gap.

## Validation and release boundary

- `npm run quality`: lint, build/export, 19 tests, production dependency audit.
- Separate TypeScript check: `tsc --noEmit`. An existing unresolved ambient
  `Fetcher` type in the worker entry was replaced with an explicit standard
  fetch interface; runtime behavior is unchanged.
- All seven exported HTML files, including the branded 404, checked for internal
  links, fragment targets, local image files, and useful alt text.
- Six route exports retain canonical metadata, social cards, structured data,
  crawl files, and no application scripts. Netlify redirects/security headers
  remain configured in `netlify.toml`; the Python preview does not emulate them.
- Preview/branch indexing protections remain covered by the deployment tests.
  Social-card copy now follows the revised headings and uses paper on ink.

This is a local revision on `codex/portfolio-agency-review`. No production deploy,
domain change, push, or merge is part of this revision. Real instrument-performance
footage and verified client results still require source material. The existing
untracked `scripts/build-creative-director-resume.py` was left untouched.
