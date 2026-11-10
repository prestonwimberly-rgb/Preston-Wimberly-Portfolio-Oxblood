import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { isIndexableContext } from "../lib/deployment.mjs";

const deployment = JSON.parse(
  await readFile(new URL("../config/deployment.json", import.meta.url), "utf8"),
);
const site = JSON.parse(
  await readFile(new URL("../config/site.json", import.meta.url), "utf8"),
);

test("only production-like contexts are indexable", () => {
  assert.equal(isIndexableContext("production", deployment.nonIndexableContexts), true);
  assert.equal(isIndexableContext("local", deployment.nonIndexableContexts), true);
  assert.equal(isIndexableContext(undefined, deployment.nonIndexableContexts), true);
  assert.equal(isIndexableContext("deploy-preview", deployment.nonIndexableContexts), false);
  assert.equal(isIndexableContext("branch-deploy", deployment.nonIndexableContexts), false);
  assert.equal(isIndexableContext(" DEPLOY-PREVIEW ", deployment.nonIndexableContexts), false);
});

test("Netlify permits only the production monitoring script and collector", async () => {
  const config = await readFile(new URL("../netlify.toml", import.meta.url), "utf8");
  const policies = [...config.matchAll(/^\s*Content-Security-Policy\s*=\s*"([^"]+)"$/gm)];
  assert.equal(policies.length, 1);
  const entries = policies[0][1].split(";").map((directive) => {
    const [name, ...sources] = directive.trim().split(/\s+/);
    return [name.toLowerCase(), sources];
  });
  const directives = new Map(entries);

  assert.equal(directives.size, entries.length, "CSP directives must be unique");
  assert.equal(directives.has("script-src-elem"), false);
  assert.equal(directives.has("script-src-attr"), false);
  assert.deepEqual(directives.get("script-src"), [`${site.defaultOrigin}/.netlify/scripts/rum`]);
  assert.deepEqual(directives.get("connect-src"), ["'self'", "https://ingesteer.services-prod.nsvcs.net/rum_collection"]);
});
