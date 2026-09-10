import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

test("guitar motion is disclosed, user-initiated, and exported with its poster", async () => {
  const html = await readFile(new URL("../netlify-dist/work/wimberly-guitars/index.html", import.meta.url), "utf8");
  const videos = [...html.matchAll(/<video\b[^>]*>/g)];
  assert.equal(videos.length, 1);
  const tag = videos[0][0];
  assert.match(tag, /\bcontrols(?:[\s=>])/);
  assert.match(tag, /preload="none"/);
  assert.match(tag, /plays[Ii]nline/);
  assert.doesNotMatch(tag, /\b(?:autoplay|loop)\b/i);
  assert.match(tag, /aria-describedby="motion-study-caption"/);
  assert.match(html, /AI-generated motion from the still photograph using Higgsfield; not filmed footage/);
  assert.match(html, /src="\/video\/wimberly-material-study.mp4" type="video\/mp4"/);
  assert.ok((await stat(new URL("../netlify-dist/video/wimberly-material-study.mp4", import.meta.url))).size < 3_000_000);
  await stat(new URL("../netlify-dist/images/wimberly-jack-antique-bronze-knobs.jpeg", import.meta.url));
  const home = await readFile(new URL("../netlify-dist/index.html", import.meta.url), "utf8");
  assert.doesNotMatch(home, /<video\b/);
});
