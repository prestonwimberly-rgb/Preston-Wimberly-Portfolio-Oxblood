import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pages = [
  ["../netlify-dist/index.html", /Clear words/],
  ["../netlify-dist/work/wild-feathers/index.html", /Turning sixteen years/],
  ["../netlify-dist/work/texas-aviation-partners/index.html", /Making the real scale/],
  ["../netlify-dist/work/wimberly-guitars/index.html", /Building a guitar brand/],
  ["../netlify-dist/work/preston-session-site/index.html", /Turning a musician/],
];

test("exports every portfolio route as standalone Netlify HTML", async () => {
  for (const [relativePath, expectedCopy] of pages) {
    const html = await readFile(new URL(relativePath, import.meta.url), "utf8");
    assert.match(html, expectedCopy);
    assert.doesNotMatch(html, /<script\b/i);
    assert.doesNotMatch(html, /\/_next\/image\?/i);
    assert.match(html, /\/_next\/static\/css\//i);
  }
});

test("exports the corrected Wimberly workshop image", async () => {
  const html = await readFile(
    new URL("../netlify-dist/index.html", import.meta.url),
    "utf8",
  );
  assert.match(html, /\/images\/wimberly-workshop-hero\.avif/);
  assert.match(html, /A Wimberly guitar resting on a wooden workbench/);
});
