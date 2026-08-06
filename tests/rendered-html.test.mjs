import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the finished portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Writer, Brand Builder &amp; Website Maker/);
  assert.match(html, /Clear words/);
  assert.match(html, /Texas Aviation Partners/);
  assert.match(html, /Wimberly Guitars/);
  assert.match(html, /San Marcos Regional Airport/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Starter Project/i);
});

test("server-renders project case studies", async () => {
  const response = await render("/work/texas-aviation-partners");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Making the real scale of an aviation company visible/);
  assert.match(html, /What I delivered/);
  assert.match(html, /Visit Texas Aviation Partners/);
});
