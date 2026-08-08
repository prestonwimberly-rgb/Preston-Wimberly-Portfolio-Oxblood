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
  assert.match(html, /Brand Strategy, Communications &amp; Web/);
  assert.match(html, /Clear words/);
  assert.match(html, /organizations with complex work/);
  assert.match(html, /Photograph by Preston Wimberly · San Marcos Regional Airport, Texas/);
  assert.match(html, /Selected work index/);
  assert.match(html, /Aviation, instruments, music history, and the web/);
  assert.match(html, /make original photography for organizations with complex work/);
  assert.match(html, /Work people can understand/);
  assert.match(html, />Result</);
  assert.match(html, /Prospective partners can trace each service to supporting work/);
  assert.match(html, /Producers can hear the work and start a project on one page/);
  assert.match(html, /The Wild Feathers/);
  assert.match(html, /Texas Aviation Partners/);
  assert.match(html, /Wimberly Guitars/);
  assert.match(html, /prestonwimberly.com/);
  assert.doesNotMatch(html, /\/work\/san-marcos-airport/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Starter Project/i);
  assert.ok(html.indexOf("Texas Aviation Partners") < html.indexOf("The Wild Feathers"));
  assert.match(html, /<picture class="responsive-picture">/);
  assert.match(html, /\/optimized\/tap-tractor-[0-9]+\.avif/);
  assert.match(html, /\/optimized\/wild-feathers-laugh-[0-9]+\.avif/);
  assert.match(html, /\/optimized\/wimberly-jack-antique-bronze-knobs-[0-9]+\.avif/);
  assert.match(html, /\/social\/home\.jpg/);
});

test("server-renders all four project case studies", async () => {
  const cases = [
    ["/work/wild-feathers", /Turning sixteen years of a band/, /I’m keeping the public link offline while image rights and fact-checking remain open/, /Archive method/],
    ["/work/texas-aviation-partners", /Making the real scale of an aviation company visible/, /Visit Texas Aviation Partners/, /Public proof/],
    ["/work/wimberly-guitars", /Building a guitar brand from the materials up/, /Visit Wimberly Guitars/, /Material system/],
    ["/work/preston-session-site", /Turning a musician’s range into one direct invitation/, /Visit prestonwimberly.com/, /Service sequence/],
  ];

  for (const [path, heading, liveLink, evidenceLabel] of cases) {
    const response = await render(path);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, heading);
    assert.match(html, /What I made/);
    assert.match(html, /05 \/ Result/);
    assert.match(html, /Engagement/);
    assert.match(html, /Status/);
    assert.match(html, /Place/);
    assert.match(html, /Working principle/);
    assert.match(html, evidenceLabel);
    assert.match(html, liveLink);
    assert.match(html, /<picture class="responsive-picture">/);
    assert.match(html, new RegExp(`/social/${path.split("/").pop()}\\.jpg`));
    if (path === "/work/texas-aviation-partners") {
      assert.match(html, /Photograph by Preston Wimberly/);
    }
    if (path === "/work/wild-feathers") {
      assert.match(html, /case-image-cover/);
      assert.match(html, /The five members of The Wild Feathers seated together outside, laughing/);
    }
    if (path === "/work/wimberly-guitars") {
      assert.match(html, /case-image-cover/);
      assert.match(html, /hand-tooled leather pickguard and antique bronze knobs/);
    }
  }
});

test("public case studies exclude unresolved figures and rejected guitar artifacts", async () => {
  const wildResponse = await render("/work/wild-feathers");
  const wildHtml = await wildResponse.text();
  assert.doesNotMatch(wildHtml, /384 performances|200 canonical photographs|six story chapters|eleven archive collections/i);

  const guitarResponse = await render("/work/wimberly-guitars");
  const guitarHtml = await guitarResponse.text();
  assert.doesNotMatch(guitarHtml, /wimberly-mobile|wimberly-reference|wimberly-workshop-hero/i);
  assert.doesNotMatch(guitarHtml, /co-founder|commission|waitlist|commerce/i);
  assert.match(guitarHtml, /ask directly about availability/i);
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
