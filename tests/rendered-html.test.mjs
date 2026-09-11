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

test("homepage leads with selected work and gives hiring readers direct paths", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Find what is true/);
  assert.match(html, /Photograph by Preston Wimberly/);
  const rows = [...html.matchAll(/<article class="project-row[\s\S]*?<\/article>/g)].map(match => match[0]);
  assert.equal(rows.length, 4);
  for (const [index, title] of ["Wimberly Custom Guitars", "Texas Aviation Partners", "The Wild Feathers", "SANDPAPER"].entries()) {
    assert.ok(rows[index].includes(title));
  }
  assert.match(html, /href="https:\/\/wildfeathers\.netlify\.app\/field-notes\/willie-in-las-vegas\/"/);
  assert.match(html, /href="https:\/\/texasaviationpartners\.com\/about\/jim-wimberly\/"/);
  assert.doesNotMatch(html, /san-marcos-regional-airport-expands-with-170-acre-land-purchase|proposed website redesign|Proposed redesign · Review build/);
  assert.match(html, /href="\/downloads\/preston-wimberly-resume\.pdf"/);
  assert.match(html, /agency and in-house roles/);
  assert.match(html, /independent projects/);
  assert.match(html, /From 2008 to 2011, I sold advertising at Texas Monthly/);
  assert.match(html, /Warner Bros\./);
  assert.match(html, /Jamestown Revival/);
  assert.match(html, /href="\/sandpaper"/);
  assert.match(html, /href="\/work\/preston-session-site"/);
  assert.doesNotMatch(html, /40%|preston@prestonwimberly\.com|Starter Project/);
});

test("case studies show ownership and artifacts before the process explanation", async () => {
  for (const slug of ["wimberly-guitars", "texas-aviation-partners", "wild-feathers", "preston-session-site"]) {
    const response = await render(`/work/${slug}`);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, /My role/);
    assert.match(html, /Working together/);
    assert.ok(html.indexOf('id="case-artifacts-title"') < html.indexOf('id="case-decision-title"'));
    assert.match(html, /aria-label="Next project"/);
    assert.match(html, /All selected work/);
    assert.match(html, /"@type":"CreativeWork"/);
    assert.match(html, /"email":"preston\.wimberly@gmail\.com"/);
    assert.doesNotMatch(html, /"sameAs"|40%|Direction record/);
  }
});

test("project status distinguishes launched work from review and speculative work", async () => {
  const tap = await (await render("/work/texas-aviation-partners")).text();
  assert.match(tap, /<span>Client engagement<\/span><strong>Live<\/strong>/);
  assert.doesNotMatch(tap, /proposed|review build|different design/i);
  assert.match(tap, /Visit the live TAP website/);
  assert.match(tap, /tap-site-before/);
  assert.match(tap, /tap-site-live-2026-09/);
  assert.match(tap, /Public website capture · August 2026/);
  assert.match(tap, /Live website capture · September 2026/);
  // The launched site is now a public example of the case-study work.
  const jsonLd = JSON.parse(tap.match(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/s)[1]);
  assert.equal(jsonLd["@graph"].find(node => node["@type"] === "CreativeWork").workExample.url, "https://texasaviationpartners.com/");

  const wild = await (await render("/work/wild-feathers")).text();
  assert.match(wild, /Public review archive · Own domain pending/);
  assert.match(wild, /384 performance records/);
  assert.match(wild, /193 archive records/);
  assert.match(wild, /110 source records/);
  assert.doesNotMatch(wild, /private archive|href="https:\/\/thewildfeathersband\.com/);
  assert.match(wild, /field-notes\/willie-in-las-vegas/);

  const guitar = await (await render("/work/wimberly-guitars")).text();
  assert.match(guitar, /Founder \/ Creative Director/);
  assert.match(guitar, /Jim Wimberly/);
  assert.match(guitar, /Speculative · Not launched/);
  assert.match(guitar, /Print advertisement concept/);
  assert.match(guitar, /Three-frame social sequence concept/);
  assert.match(guitar, /Launch email concept/);
  assert.match(guitar, /join the waitlist/i);
  assert.doesNotMatch(guitar, /wimberly-reference|co-founder|commission|commerce/i);
  assert.match(guitar, /wimberly-mobile/);
});

test("SANDPAPER includes accessible manuscript text, genuine pages, and a chapter download", async () => {
  const html = await (await render("/sandpaper")).text();
  assert.match(html, /Four Hundred/);
  assert.match(html, /There is a part of the work I look forward to all week/);
  assert.match(html, /The figure was in the walnut the whole time/);
  assert.match(html, /The chapter continues in the manuscript/);
  for (const page of [114, 115, 116, 117]) assert.match(html, new RegExp(`sandpaper-page-${page}`));
  assert.match(html, /href="\/downloads\/sandpaper-four-hundred\.pdf"/);
  assert.match(html, /The Finish/);
  assert.match(html, /Removal/);
  assert.match(html, /Finer Grits/);
  assert.match(html, /Photographs, emails, contracts, medical records, and calendars/);
});

test("server-renders unknown routes with the portfolio 404", async () => {
  const response = await render("/__missing-portfolio-route__");
  assert.equal(response.status, 404);

  const html = await response.text();
  assert.match(html, /That page/);
  assert.match(html, /Return to selected work/);
  assert.match(html, /Preston Wimberly/);
  assert.match(html, /mailto:preston\.wimberly@gmail\.com/);
  assert.doesNotMatch(html, /preston@prestonwimberly\.com/);
  assert.match(html, /name="robots" content="noindex/i);
});
