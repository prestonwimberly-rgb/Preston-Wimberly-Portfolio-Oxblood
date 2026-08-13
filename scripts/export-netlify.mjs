import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { isIndexableContext } from "../lib/deployment.mjs";
import { projects } from "../data/projects.ts";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectDirectory = path.resolve(scriptDirectory, "..");
const clientDirectory = path.join(projectDirectory, "dist", "client");
const outputDirectory = path.join(projectDirectory, "netlify-dist");
const siteConfig = JSON.parse(
  await readFile(path.join(projectDirectory, "config", "site.json"), "utf8"),
);
const deploymentConfig = JSON.parse(
  await readFile(path.join(projectDirectory, "config", "deployment.json"), "utf8"),
);
const siteOrigin = (process.env.SITE_URL ?? siteConfig.defaultOrigin).replace(/\/$/, "");
const deploymentContext = process.env.CONTEXT ?? "local";
const isIndexable = isIndexableContext(
  deploymentContext,
  deploymentConfig.nonIndexableContexts,
);
const workerUrl = pathToFileURL(
  path.join(projectDirectory, "dist", "server", "index.js"),
);
workerUrl.searchParams.set("netlify-export", `${Date.now()}`);

const { default: worker } = await import(workerUrl.href);

// "/" and "/sandpaper" are standalone pages, not case studies, so they stay
// explicit here. The "/work/*" routes are derived from data/projects.ts —
// the single source of truth for which case studies exist — so a project
// added or removed there can't silently drift out of sync with what's
// actually exported to netlify-dist/ and the sitemap.
const routes = [
  "/",
  "/sandpaper",
  ...projects.map((project) => `/work/${project.slug}`),
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
    .replace(
      /<script\b(?![^>]*\btype=["']application\/ld\+json["'])[^>]*>[\s\S]*?<\/script>/gi,
      "",
    )
    .replace(
      /<link\b(?=[^>]*(?:rel=["']modulepreload["']|as=["']script["']|href=["'][^"']+\.js(?:\?[^"']*)?["']))[^>]*>/gi,
      "",
    );
}

async function render(route, expectedStatus = 200) {
  const response = await worker.fetch(
    new Request(`${siteOrigin}${route}`, {
      headers: { accept: "text/html" },
    }),
    makeEnvironment(),
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  if (response.status !== expectedStatus) {
    throw new Error(`Static render failed for ${route}: ${response.status}`);
  }

  const html = stripRuntime(await response.text());
  if (
    /<script\b(?![^>]*\btype=["']application\/ld\+json["'])/i.test(html) ||
    /\/_next\/image\?/i.test(html)
  ) {
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

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    const canonicalUrl = route === "/" ? siteOrigin : `${siteOrigin}${route}/`;
    return `  <url><loc>${canonicalUrl}</loc></url>`;
  })
  .join("\n")}
</urlset>
`;

await writeFile(path.join(outputDirectory, "sitemap.xml"), sitemap);
await writeFile(
  path.join(outputDirectory, "robots.txt"),
  isIndexable
    ? `User-agent: *\nAllow: /\n\nSitemap: ${siteOrigin}/sitemap.xml\n`
    : "User-agent: *\nDisallow: /\n",
);

await writeFile(
  path.join(outputDirectory, "404.html"),
  (await render("/__portfolio-not-found__", 404)).replace(
    /<link rel="canonical"[^>]*>/i,
    "",
  ),
);

console.log(`Exported ${routes.length} routes to ${outputDirectory}`);
