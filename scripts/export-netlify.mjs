import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectDirectory = path.resolve(scriptDirectory, "..");
const clientDirectory = path.join(projectDirectory, "dist", "client");
const outputDirectory = path.join(projectDirectory, "netlify-dist");
const workerUrl = pathToFileURL(
  path.join(projectDirectory, "dist", "server", "index.js"),
);
workerUrl.searchParams.set("netlify-export", `${Date.now()}`);

const { default: worker } = await import(workerUrl.href);

const routes = [
  "/",
  "/work/wild-feathers",
  "/work/texas-aviation-partners",
  "/work/wimberly-guitars",
  "/work/preston-session-site",
];

function makeEnvironment() {
  return {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  };
}

function stripRuntime(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(
      /<link\b(?=[^>]*(?:rel=["']modulepreload["']|as=["']script["']|href=["'][^"']+\.js(?:\?[^"']*)?["']))[^>]*>/gi,
      "",
    );
}

async function render(route) {
  const response = await worker.fetch(
    new Request(`https://preston-wimberly-portfolio.netlify.app${route}`, {
      headers: { accept: "text/html" },
    }),
    makeEnvironment(),
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  if (response.status !== 200) {
    throw new Error(`Static render failed for ${route}: ${response.status}`);
  }

  const html = stripRuntime(await response.text());
  if (/<script\b/i.test(html) || /\/_next\/image\?/i.test(html)) {
    throw new Error(`Static render for ${route} still contains runtime-only markup`);
  }

  return html;
}

await rm(outputDirectory, { recursive: true, force: true });
await cp(clientDirectory, outputDirectory, { recursive: true });

for (const route of routes) {
  const targetDirectory =
    route === "/"
      ? outputDirectory
      : path.join(outputDirectory, ...route.slice(1).split("/"));
  await mkdir(targetDirectory, { recursive: true });
  await writeFile(path.join(targetDirectory, "index.html"), await render(route));
}

await writeFile(
  path.join(outputDirectory, "404.html"),
  `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Page not found — Preston Wimberly</title><style>body{margin:0;background:#f4efe6;color:#0a0a0a;font-family:Georgia,serif;display:grid;min-height:100vh;place-items:center;text-align:center}main{padding:2rem}a{color:#8b1a1a}</style></head><body><main><p>404</p><h1>That page is not here.</h1><p><a href="/">Return to the portfolio</a></p></main></body></html>`,
);

console.log(`Exported ${routes.length} routes to ${outputDirectory}`);
