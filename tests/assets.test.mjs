import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";
import sharp from "sharp";

const imageDirectory = new URL("../public/images/", import.meta.url);

test("portfolio image extensions match their encoded file type", async () => {
  const files = await readdir(imageDirectory);

  for (const file of files) {
    const bytes = await readFile(new URL(file, imageDirectory));
    if (/\.jpe?g$/i.test(file)) {
      assert.deepEqual([...bytes.subarray(0, 2)], [0xff, 0xd8], file);
    }
    if (/\.png$/i.test(file)) {
      assert.deepEqual(
        [...bytes.subarray(0, 8)],
        [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a],
        file,
      );
    }
  }
});

test("exports a valid ICO fallback favicon", async () => {
  const bytes = await readFile(
    new URL("../public/favicon.ico", import.meta.url),
  );
  assert.deepEqual([...bytes.subarray(0, 4)], [0x00, 0x00, 0x01, 0x00]);
});

test("generates responsive AVIF and WebP image sets", async () => {
  const directory = new URL("../public/optimized/", import.meta.url);
  const files = await readdir(directory);
  assert.ok(files.length > 20);
  assert.equal(files.filter((file) => file.endsWith(".avif")).length * 2, files.length);

  const avif = await readFile(new URL("tap-tractor-1200.avif", directory));
  const webp = await readFile(new URL("tap-tractor-1200.webp", directory));
  const source = await readFile(new URL("../public/images/tap-tractor.jpg", import.meta.url));
  assert.match(avif.subarray(0, 32).toString("ascii"), /ftypavif/);
  assert.equal(webp.subarray(0, 4).toString("ascii"), "RIFF");
  assert.equal(webp.subarray(8, 12).toString("ascii"), "WEBP");
  assert.ok(avif.byteLength < source.byteLength / 2);
});

test("generates correctly sized editorial social cards", async () => {
  const slugs = [
    "home",
    "texas-aviation-partners",
    "wild-feathers",
    "wimberly-guitars",
    "preston-session-site",
  ];

  for (const slug of slugs) {
    const file = new URL(`../public/social/${slug}.jpg`, import.meta.url);
    const metadata = await sharp(await readFile(file)).metadata();
    assert.equal(metadata.format, "jpeg");
    assert.equal(metadata.width, 1200);
    assert.equal(metadata.height, 630);
  }
});
