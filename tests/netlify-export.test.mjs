import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pages = [
  ["../netlify-dist/index.html", /Clear words/, "https://preston-wimberly-portfolio.netlify.app", "home"],
  ["../netlify-dist/work/texas-aviation-partners/index.html", /Making the real scale/, "https://preston-wimberly-portfolio.netlify.app/work/texas-aviation-partners/", "texas-aviation-partners"],
  ["../netlify-dist/work/wild-feathers/index.html", /Turning sixteen years/, "https://preston-wimberly-portfolio.netlify.app/work/wild-feathers/", "wild-feathers"],
  ["../netlify-dist/work/wimberly-guitars/index.html", /Building a guitar brand/, "https://preston-wimberly-portfolio.netlify.app/work/wimberly-guitars/", "wimberly-guitars"],
  ["../netlify-dist/work/preston-session-site/index.html", /Turning a musician/, "https://preston-wimberly-portfolio.netlify.app/work/preston-session-site/", "preston-session-site"],
];

test("exports every portfolio route as standalone Netlify HTML", async () => {
  for (const [relativePath, expectedCopy, canonicalUrl, socialSlug] of pages) {
    const html = await readFile(new URL(relativePath, import.meta.url), "utf8");
    assert.match(html, expectedCopy);
    assert.doesNotMatch(html, /<script\b/i);
    assert.doesNotMatch(html, /\/_next\/image\?/i);
    assert.match(html, /\/_next\/static\/css\//i);
    assert.ok(html.includes(`rel="canonical" href="${canonicalUrl}"`));
    assert.match(html, /rel="icon" href="\/favicon\.svg"/i);
    assert.match(html, /<picture class="responsive-picture">/i);
    assert.match(html, /srcset="\/optimized\/[^"']+\.avif [0-9]+w/i);
    assert.ok(html.includes(`/social/${socialSlug}.jpg`));
  }
});

test("exports crawl files for every canonical route", async () => {
  const robots = await readFile(
    new URL("../netlify-dist/robots.txt", import.meta.url),
    "utf8",
  );
  const sitemap = await readFile(
    new URL("../netlify-dist/sitemap.xml", import.meta.url),
    "utf8",
  );

  assert.match(robots, /Allow: \//);
  assert.match(
    robots,
    /Sitemap: https:\/\/preston-wimberly-portfolio\.netlify\.app\/sitemap\.xml/,
  );
  for (const [, , canonicalUrl] of pages) {
    assert.ok(sitemap.includes(`<loc>${canonicalUrl}</loc>`));
  }
});

test("exports the selected project photography", async () => {
  const html = await readFile(
    new URL("../netlify-dist/index.html", import.meta.url),
    "utf8",
  );
  assert.match(html, /\/images\/wimberly-jack-antique-bronze-knobs\.jpeg/);
  assert.match(html, /hand-tooled leather pickguard and antique bronze knobs/);
  assert.match(html, /\/images\/wild-feathers-laugh\.png/);
  assert.match(html, /The five members of The Wild Feathers seated together outside, laughing/);
});

test("exports a branded, non-indexable 404 page", async () => {
  const html = await readFile(
    new URL("../netlify-dist/404.html", import.meta.url),
    "utf8",
  );

  assert.match(html, /Page not found — Preston Wimberly/);
  assert.match(html, /404 \/ Page not found/);
  assert.match(html, /Return to selected work/);
  assert.match(html, /name="robots" content="noindex/i);
  assert.doesNotMatch(html, /rel="canonical"/i);
  assert.doesNotMatch(html, /<script\b/i);
});
