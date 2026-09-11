# TAP launch-status update

## Scope and evidence

REFINE the TAP record on the homepage and case study to reflect the launched
website. Keep the established layout, fonts, palette, field photographs,
ownership, collaboration, and static export. Documentary airport work remains
the warm subject inside the portfolio's precise editorial frame.

Preston confirmed on September 11, 2026 that TAP is live and requested this
update. Direct HTTP and browser checks verified the new homepage at
https://texasaviationpartners.com/ and the Jim Wimberly profile at
https://texasaviationpartners.com/about/jim-wimberly/; both returned HTTP 200
at those exact URLs.

- Replace proposal/review-build status, descriptions, captions, and outcome copy
  with the observed live-site status. The existing structured-data logic now
  identifies TAP's domain as an example of the work.
- Replace the review screenshot with a September 11 live-domain capture:
  `public/images/tap-site-live-2026-09.jpg`, 1425 by 891 pixels, 162,369 bytes.
  The browser viewport was 1440 by 900; the screenshot tool returned those
  encoded dimensions. No fabricated imagery or visual treatment was added.
- Keep the August 2026 homepage capture explicitly labeled as the earlier site.
  Existing original field photography and its credits remain intact.
- Replace the retired airport-expansion writing sample with the live Jim
  Wimberly profile. The old URL redirects to the Field Notes index, which now
  attributes the expansion report to KXAN. Linking to that external report as
  Preston's writing would misstate authorship.
- Keep the previous 40% traffic claim in internal verification notes only.
  Launch confirmation establishes no traffic or business-performance result.

## Validation

- `npm ci` completed with the lockfile unchanged. Its full dependency audit
  reported 23 development-inclusive advisories; no dependency changes were made.
- `npm run quality` passed: lint, build, static export, all 19 tests, and zero
  production dependency vulnerabilities. The build generated 174 responsive
  image files and six social cards. Log: `outputs/tap-live-review/quality.log`.
- All six exported routes and the branded 404 were checked in the browser at
  1440, 390, and 320 pixels: one H1 each, no horizontal overflow, no missing alt
  attributes, no failed loaded images, and no application scripts. Results:
  `outputs/tap-live-review/browser-checks.json`.
- Visual review covered the desktop before-and-after sequence, the TAP homepage
  entry and case-study images at 390 pixels, and the TAP opening and replacement
  writing sample at 320 pixels. Captions and reading order remain legible;
  screenshots stay fully visible inside the existing image frames.
- The skip link receives first keyboard focus and has a visible 3px outline.
  Visible navigation targets meet the existing 44px minimum in all three widths.
  Reduced-motion emulation selected `scroll-behavior: auto`; existing contrast
  and design-token checks passed. No console warnings or errors were captured.
- Export tests verified canonical and social metadata, responsive formats, crawl
  files, structured data, the branded non-indexable 404, and script-free HTML.
  Both unchanged legacy redirects were checked on production and reached the
  correct current case-study URLs with HTTP 200.
- The local Python server previews static files; it does not emulate Netlify
  security headers or redirect rules. Those repository declarations are
  unchanged. Hosted release checks remain separate from this local review.

## Editorial review (1–5)

Authenticity 4; hierarchy 4; material character 4; evidence 4; restraint 5;
usability 4; performance 4; accessibility 4. These are editorial judgments,
not formal accessibility certification or Lighthouse scores. Evidence was the
weakest category addressed: the public launch status and source links now match
the observable work. No new visual device or CSS was needed.

## Release status

Prepared on `codex/tap-live-portfolio` from `90b2142`, matching fetched
`origin/main`. Preston approved publishing, pushing, and merging to main on
September 11, 2026 after reviewing the completed local update. This document
records the pre-release checks; production verification follows the merge.
The unrelated `.codex/` directory and resume-building script were preserved.
