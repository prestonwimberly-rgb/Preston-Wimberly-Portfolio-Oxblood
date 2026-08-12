# Portfolio launch checklist

This document separates what is technically ready from decisions and claims that
still need Preston’s approval. It is a release checklist, not authorization to
deploy or change external services.

## Recommended domain strategy

Keep `prestonwimberly.com` as the session-musician website. Give the professional
portfolio a dedicated subdomain: **`work.prestonwimberly.com`**.

This makes the relationship clear without forcing two different audiences into
one homepage. The word “work” is direct, memorable, and broad enough to hold
writing, brand, editorial, communications, and web engagements.

The approved canonical production origin is
`https://work.prestonwimberly.com`. Keep the root musician site and its `www`
hostname unchanged.

Custom-domain release sequence:

1. Add `work.prestonwimberly.com` to the existing Netlify site and configure the
   DNS record without changing the apex musician site.
2. Wait for DNS and TLS to resolve, then verify all five routes on the custom
   hostname.
3. Set the Netlify production environment variable `SITE_URL` to
   `https://work.prestonwimberly.com` and rebuild production.
4. Confirm canonical tags, Open Graph URLs, sitemap entries, and `robots.txt`
   use the custom origin.
5. Make the custom hostname the primary site domain and confirm the Netlify
   hostname redirects to it once the custom release is healthy.
6. Re-run the route, header, social-preview, and performance checks below.

## Content and rights verification

These statements must be confirmed by Preston before launch. If a statement
cannot be verified, narrow or remove it rather than substituting a new claim.

### The Wild Feathers

- Rights, fact-checking, and the counts for 384 performances, 200 canonical
  photographs, six story chapters, and eleven archive collections are confirmed.
- Deploy the completed archive to `thewildfeathersband.com` before restoring its
  public link. Domain ownership is confirmed; deployment is not.

### Wimberly Guitars

- Preston is the founder. The current public offer is a waitlist.
- Confirm the provenance and intended use of `wimberly-reference.avif` and
  `wimberly-workshop-hero.avif`; keep both assets out of the public case study
  until that review is complete.

### Session-musician website

- Two decades across guitar, pedal steel, bass, studio recording, television,
  and touring are confirmed.
- Add inquiry or booking evidence only if verified evidence becomes available.

## Deploy-preview acceptance

- Confirm preview and branch deploys return `Disallow: /` in `robots.txt` and
  emit `noindex, nofollow` metadata.
- Test `/`, every `/work/.../` route, both legacy redirects, and an unknown URL.
- Check 1440px desktop, 390px mobile, and the 320px narrow-phone edge case.
- Confirm keyboard focus order, visible focus styles, skip links, image alt text,
  and reduced-motion behavior.
- Confirm no horizontal overflow, missing images, browser console errors, or
  unexpected runtime scripts.
- Check the homepage and all four case-study social cards at 1200×630.
- Confirm email, internal, and approved external links.
- Inspect response headers for CSP, frame protection, content-type protection,
  permissions policy, referrer policy, and cache rules.
- Run `npm run quality` and require the GitHub Actions Quality job to pass.

## Production release

- Obtain explicit approval for the final copy, images, claims, and public links.
- Capture a before/after mobile and desktop Lighthouse comparison from the same
  location and test conditions.
- Confirm the production canonical origin and indexing policy.
- Verify favicon, title, description, canonical, Open Graph image, Twitter card,
  sitemap, robots file, redirects, security headers, 404, and TLS on production.
- Submit or refresh the final sitemap only after the intended primary hostname is
  serving the approved release.
- Monitor the first production deploy for broken routes, image errors, and form
  or email-link failures.

## Google Search Console

- Use `https://work.prestonwimberly.com/sitemap.xml` as the sitemap submission.
- Add or select the appropriate Search Console property, verify ownership, and
  submit the sitemap through the Sitemaps report.
- Do not add a DNS verification record until Google provides the exact TXT or
  CNAME value for the chosen property. Preserve all existing DNS records.
- Validate the homepage and one case study with Google’s URL Inspection and
  Rich Results tools after the production deploy is live.

## Repository consolidation

The active repository is
`prestonwimberly-rgb/Preston-Wimberly-Portfolio-Oxblood`. The legacy portfolio
repository appears redundant once this version is approved and live, but it
should not be deleted. Recommended sequence:

1. Confirm the legacy repository contains no unique content, issues, deploy hooks,
   domain configuration, or history that still matters.
2. Add a short archive notice pointing to the active repository.
3. Disable any obsolete deploy hook.
4. Archive the legacy repository in GitHub only after explicit approval.

Archiving is preferable to deletion because it preserves history and remains
reversible.
