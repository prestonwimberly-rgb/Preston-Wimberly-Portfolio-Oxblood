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
  assert.match(html, /Preston Wimberly \| Creative Director/);
  assert.match(html, /Find what is true/);
  assert.match(html, /Creative direction for established businesses/);
  assert.doesNotMatch(html, /photography, and web design/);
  assert.match(html, /Photograph by Preston Wimberly/);
  assert.doesNotMatch(html, /Selected work index/);
  assert.match(html, /The industries change\. The method does not/);
  assert.match(html, /Start with the record/);
  assert.match(html, /Report/);
  assert.match(html, /Give it form/);
  assert.match(html, /Ways to work together/);
  assert.match(html, /Creative direction/);
  assert.match(html, /Brand &amp; editorial systems/);
  assert.match(html, /Hands-on execution/);
  assert.match(html, /Tell me what is changing/);
  assert.match(html, />What changed</);
  assert.match(html, /increased website traffic 40% in its first month/);
  assert.match(html, /Producers can hear the work and start a project on one page/);
  assert.match(html, /The Wild Feathers/);
  assert.match(html, /Texas Aviation Partners/);
  assert.match(html, /Wimberly Custom Guitars/);
  assert.match(html, /prestonwimberly.com/);
  assert.match(html, /The Airfield/);
  assert.match(html, /The Road/);
  assert.match(html, /The Object/);
  assert.match(html, /The Musician/);
  assert.match(html, /From 2008 to 2011, I sold advertising at Texas Monthly/);
  assert.match(html, /Warner Bros\./);
  assert.match(html, /Jamestown Revival/);
  assert.match(html, /"jobTitle":"Creative Director"/);
  assert.match(html, /How do you make airport infrastructure feel consequential/);
  assert.match(
    html,
    /How do you build a guitar brand from real materials without borrowing generic vintage language\?/,
  );
  assert.match(html, /The proposed Texas Aviation Partners homepage/);
  assert.match(html, /Memoir · 50,000 words/);
  assert.match(html, /href="\/sandpaper"/);
  assert.match(html, /Experience shaped by/);
  assert.match(html, /Warner Bros. Records/);
  assert.match(html, /Walnut, hand-tooled leather, and antique bronze hardware/);
  assert.doesNotMatch(html, /\/work\/san-marcos-airport/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Starter Project/i);
  assert.ok(html.indexOf("Texas Aviation Partners") < html.indexOf("The Wild Feathers"));
  assert.match(html, /<picture class="responsive-picture">/);
  assert.match(html, /\/optimized\/tap-site-after-[0-9]+\.avif/);
  assert.match(html, /\/optimized\/wild-feathers-laugh-[0-9]+\.avif/);
  assert.match(html, /\/optimized\/wimberly-jack-antique-bronze-knobs-[0-9]+\.avif/);
  assert.match(html, /\/social\/home\.jpg/);
  assert.match(html, /type="application\/ld\+json"/);
  assert.match(html, /"@type":"ProfilePage"/);
  assert.match(html, /"@type":"Person"/);
  assert.match(html, /"@type":"WebSite"/);
  assert.match(html, /"email":"preston\.wimberly@gmail\.com"/);
  assert.match(html, /mailto:preston\.wimberly@gmail\.com/);
  assert.doesNotMatch(html, /preston@prestonwimberly\.com/);
  assert.doesNotMatch(html, /"sameAs"/);
});

test("server-renders the SANDPAPER memoir project", async () => {
  const response = await render("/sandpaper");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /SANDPAPER/);
  assert.match(html, /50,000 words/);
  assert.match(html, /The Finish/);
  assert.match(html, /Removal/);
  assert.match(html, /Finer Grits/);
  assert.match(html, /Photographs, emails, contracts, medical records, and calendars/);
  assert.match(html, /\/optimized\/sandpaper-cover-[0-9]+\.avif/);
  assert.match(html, /The piece has to look worse before it can look honest/);
});

test("server-renders all four project case studies", async () => {
  const cases = [
    ["/work/wild-feathers", /Reconstructing a band’s history/, /not yet deployed at thewildfeathersband\.com/, /Archive method/, /02 \/ The Road/, /The Wild Feathers Archive Creative Direction \| Preston Wimberly/],
    ["/work/texas-aviation-partners", /Making the real scale of an aviation company visible/, /Visit Texas Aviation Partners/, /Public proof/, /01 \/ The Airfield/, /Texas Aviation Partners Creative Direction \| Preston Wimberly/],
    ["/work/wimberly-guitars", /Building a guitar brand from the materials up/, /Visit Wimberly Custom Guitars/, /Material system/, /03 \/ The Object/, /Wimberly Custom Guitars Creative Direction \| Preston Wimberly/],
    ["/work/preston-session-site", /Turning a musician’s range into one direct invitation/, /Visit prestonwimberly.com/, /Service sequence/, /04 \/ The Musician/, /prestonwimberly.com Creative Direction \| Preston Wimberly/],
  ];

  for (const [path, heading, liveLink, evidenceLabel, chapterLabel, metaTitle] of cases) {
    const response = await render(path);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, heading);
    assert.match(html, /Selected work/);
    assert.match(html, /05 \/ Result/);
    assert.match(html, /Role/);
    assert.match(html, /Direction &amp; collaboration/);
    assert.doesNotMatch(html, /<dt>Engagement<\/dt>/);
    assert.doesNotMatch(html, /<dt>Status<\/dt>/);
    assert.match(html, /Place/);
    assert.match(html, /Working principle/);
    assert.match(html, evidenceLabel);
    assert.match(html, chapterLabel);
    assert.match(html, liveLink);
    assert.match(html, metaTitle);
    assert.match(html, /type="application\/ld\+json"/);
    assert.match(html, /"@type":"CreativeWork"/);
    assert.match(html, /"email":"preston\.wimberly@gmail\.com"/);
    assert.match(html, /mailto:preston\.wimberly@gmail\.com/);
    assert.doesNotMatch(html, /preston@prestonwimberly\.com/);
    assert.match(html, /"creator":\{"@id":"https:\/\/work\.prestonwimberly\.com\/#person"\}/);
    assert.doesNotMatch(html, /"sameAs"/);
    assert.match(html, /<picture class="responsive-picture">/);
    assert.match(html, new RegExp(`/social/${path.split("/").pop()}\\.jpg`));
    if (path === "/work/texas-aviation-partners") {
      assert.ok(html.indexOf("Role") < html.indexOf("Public proof"));
      assert.match(html, /The public system in transition/);
      assert.match(html, /\/optimized\/tap-hay-windsock-[0-9]+\.avif/);
      assert.match(html, /\/optimized\/tap-site-before-[0-9]+\.avif/);
      assert.match(html, /\/optimized\/tap-site-after-[0-9]+\.avif/);
      assert.match(html, /Public website capture · August 2026/);
      assert.match(html, /Netlify deploy capture · August 2026/);
      assert.match(html, /Google Analytics recorded a 40% increase/);
      assert.doesNotMatch(html, /tap-projects-site|tap-mobile|san-marcos-tower/i);
    }
    if (path === "/work/wild-feathers") {
      assert.ok(html.indexOf("Archive method") < html.indexOf("Role"));
      assert.match(html, /case-image-cover/);
      assert.match(html, /The five members of The Wild Feathers seated together outside, laughing/);
    }
    if (path === "/work/wimberly-guitars") {
      assert.ok(html.indexOf("Material system") < html.indexOf("Role"));
      assert.ok(html.indexOf("Build every rule from the instruments") < html.indexOf("We built the product language from the materials"));
      assert.match(html, /case-image-cover/);
      assert.match(html, /Objects meant to acquire history/);
      assert.match(html, /hand-tooled leather pickguard and antique bronze knobs/);
    }
    if (path === "/work/preston-session-site") {
      assert.ok(html.indexOf("Service sequence") < html.indexOf("Role"));
      assert.ok(html.indexOf("Working principle") < html.indexOf("01 / Context"));
      assert.match(html, /\/optimized\/preston-session-mobile-[0-9]+\.avif/);
      assert.match(html, /listening and inquiry path stays intact/);
    }
  }
});

test("public case studies include confirmed facts and exclude unresolved guitar artifacts", async () => {
  const wildResponse = await render("/work/wild-feathers");
  const wildHtml = await wildResponse.text();
  assert.match(wildHtml, /384 performances/);
  assert.match(wildHtml, /200 canonical photographs/);
  assert.match(wildHtml, /six story chapters/);
  assert.match(wildHtml, /eleven collections/);
  assert.doesNotMatch(wildHtml, /href="https:\/\/thewildfeathersband\.com/i);

  const guitarResponse = await render("/work/wimberly-guitars");
  const guitarHtml = await guitarResponse.text();
  assert.match(guitarHtml, /\/optimized\/wimberly-mobile-[0-9]+\.avif/);
  assert.match(guitarHtml, /model and material hierarchy stays direct/);
  assert.doesNotMatch(guitarHtml, /wimberly-reference|wimberly-workshop-hero/i);
  assert.doesNotMatch(guitarHtml, /co-founder|commission|commerce/i);
  assert.match(guitarHtml, /Founder \/ Creative Director/);
  assert.match(guitarHtml, /join the waitlist/i);

  const tapResponse = await render("/work/texas-aviation-partners");
  const tapHtml = await tapResponse.text();
  assert.match(tapHtml, /The public system in transition/);
  assert.match(tapHtml, /\/optimized\/tap-site-before-[0-9]+\.avif/);
  assert.match(tapHtml, /\/optimized\/tap-site-after-[0-9]+\.avif/);
  assert.match(tapHtml, /Public website capture · August 2026/);
  assert.match(tapHtml, /Netlify deploy capture · August 2026/);
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
