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
  assert.match(html, /organizations with complex work/);
  assert.match(html, /The Wild Feathers/);
  assert.match(html, /Texas Aviation Partners/);
  assert.match(html, /Wimberly Guitars/);
  assert.match(html, /prestonwimberly.com/);
  assert.doesNotMatch(html, /\/work\/san-marcos-airport/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Starter Project/i);
  assert.ok(html.indexOf("Texas Aviation Partners") < html.indexOf("The Wild Feathers"));
  assert.match(html, /<picture class="responsive-picture">/);
  assert.match(html, /\/optimized\/tap-tractor-[0-9]+\.avif/);
  assert.match(html, /\/social\/home\.jpg/);
});

test("server-renders all four project case studies", async () => {
  const cases = [
    ["/work/wild-feathers", /Turning sixteen years of a band/, /Public link withheld while image rights and fact-checking remain open/],
    ["/work/texas-aviation-partners", /Making the real scale of an aviation company visible/, /Visit Texas Aviation Partners/],
    ["/work/wimberly-guitars", /Building a guitar brand from the materials up/, /Visit Wimberly Guitars/],
    ["/work/preston-session-site", /Turning a musician’s range into one direct invitation/, /Visit prestonwimberly.com/],
  ];

  for (const [path, heading, liveLink] of cases) {
    const response = await render(path);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, heading);
    assert.match(html, /What I made/);
    assert.match(html, /Observable change/);
    assert.match(html, /Engagement/);
    assert.match(html, /Status/);
    assert.match(html, liveLink);
    assert.match(html, /<picture class="responsive-picture">/);
    assert.match(html, new RegExp(`/social/${path.split("/").pop()}\\.jpg`));
  }
});

test("server-renders unknown routes with the portfolio 404", async () => {
  const response = await render("/__missing-portfolio-route__");
  assert.equal(response.status, 404);

  const html = await response.text();
  assert.match(html, /That page/);
  assert.match(html, /Return to selected work/);
  assert.match(html, /Preston Wimberly/);
  assert.match(html, /name="robots" content="noindex/i);
});
