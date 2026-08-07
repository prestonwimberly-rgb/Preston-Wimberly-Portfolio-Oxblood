import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { isIndexableContext } from "../lib/deployment.mjs";

const deployment = JSON.parse(
  await readFile(new URL("../config/deployment.json", import.meta.url), "utf8"),
);

test("only production-like contexts are indexable", () => {
  assert.equal(isIndexableContext("production", deployment.nonIndexableContexts), true);
  assert.equal(isIndexableContext("local", deployment.nonIndexableContexts), true);
  assert.equal(isIndexableContext(undefined, deployment.nonIndexableContexts), true);
  assert.equal(isIndexableContext("deploy-preview", deployment.nonIndexableContexts), false);
  assert.equal(isIndexableContext("branch-deploy", deployment.nonIndexableContexts), false);
  assert.equal(isIndexableContext(" DEPLOY-PREVIEW ", deployment.nonIndexableContexts), false);
});
