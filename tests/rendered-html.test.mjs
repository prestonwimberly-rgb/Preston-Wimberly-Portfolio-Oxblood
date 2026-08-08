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
  assert.match(html, /Creative Director, Brand Strategist &amp; Writer/);
  assert.match(html, /Clear words/);
  assert.match(html, /creative director, brand strategist, and writer/);
  assert.match(html, /Photograph by Preston Wimberly/);
  assert.match(html, /Selected work index/);
  assert.match(html, /Aviation, instruments, music history, and the web/);
  assert.match(html, /Judgment first. Direction through the finished work/);
  assert.match(html, /write, photograph, design, and build the finished work/);
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
  assert.match(html, /type="application\/ld\+json"/);
  assert.match(html, /"@type":"ProfilePage"/);
  assert.match(html, /"@type":"Person"/);
  assert.match(html, /"@type":"WebSite"/);
  assert.doesNotMatch(html, /"sameAs"/);
});

test("server-renders all four project case studies", async () => {
  const cases = [
    ["/work/wild-feathers", /Turning sixteen years of a band/, /I’m keeping the public link offline while image rights and fact-checking remain open/, /Archive method/, /The Wild Feathers Music Archive \| Preston Wimberly/],
    ["/work/texas-aviation-partners", /Making the real scale of an aviation company visible/, /Visit Texas Aviation Partners/, /Public proof/, /Texas Aviation Partners Brand Strategy \| Preston Wimberly/],
    ["/work/wimberly-guitars", /Building a guitar brand from the materials up/, /Visit Wimberly Guitars/, /Material system/, /Wimberly Guitars Brand Strategy \| Preston Wimberly/],
    ["/work/preston-session-site", /Turning a musician’s range into one direct invitation/, /Visit prestonwimberly.com/, /Service sequence/, /prestonwimberly.com Website Strategy \| Preston Wimberly/],
  ];

  for (const [path, heading, liveLink, evidenceLabel, metaTitle] of cases) {
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
    assert.match(html, metaTitle);
    assert.match(html, /type="application\/ld\+json"/);
    assert.match(html, /"@type":"CreativeWork"/);
    assert.match(html, /"creator":\{"@id":"https:\/\/work\.prestonwimberly\.com\/#person"\}/);
    assert.doesNotMatch(html, /"sameAs"/);
    assert.match(html, /<picture class="responsive-picture">/);
    assert.match(html, new RegExp(`/social/${path.split("/").pop()}\\.jpg`));
    if (path === "/work/texas-aviation-partners") {
      assert.match(html, /Work recorded in the field/);
      assert.match(html, /\/optimized\/tap-hay-windsock-[0-9]+\.avif/);
      assert.match(html, /\/optimized\/tap-tractor-[0-9]+\.avif/);
      assert.match(html, /\/optimized\/tap-surveyor-[0-9]+\.avif/);
      assert.ok((html.match(/Photograph by Preston Wimberly/g)?.length ?? 0) >= 3);
      assert.doesNotMatch(html, /tap-projects-site|tap-mobile|san-marcos-tower/i);
    }
    if (path === "/work/wild-feathers") {
      assert.match(html, /case-image-cover/);
      assert.match(html, /The five members of The Wild Feathers seated together outside, laughing/);
    }
    if (path === "/work/wimberly-guitars") {
      assert.match(html, /case-image-cover/);
      assert.match(html, /hand-tooled leather pickguard and antique bronze knobs/);
    }
    if (path === "/work/preston-session-site") {
      assert.match(html, /\/optimized\/preston-session-mobile-[0-9]+\.avif/);
      assert.match(html, /390-pixel mobile viewport/);
    }
  }
});

test("public case studies exclude unresolved figures and rejected guitar artifacts", async () => {
  const wildResponse = await render("/work/wild-feathers");
  const wildHtml = await wildResponse.text();
  assert.doesNotMatch(wildHtml, /384 performances|200 canonical photographs|six story chapters|eleven archive collections/i);

  const guitarResponse = await render("/work/wimberly-guitars");
  const guitarHtml = await guitarResponse.text();
  assert.match(guitarHtml, /\/optimized\/wimberly-mobile-[0-9]+\.avif/);
  assert.match(guitarHtml, /390-pixel mobile viewport/);
  assert.doesNotMatch(guitarHtml, /wimberly-reference|wimberly-workshop-hero/i);
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
