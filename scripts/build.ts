import { renderToString } from "react-dom/server";
import { createElement } from "react";
import { HelmetProvider } from "react-helmet-async";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

const OUT_DIR = "./dist";
const BASE_NAME = "/ajad/"

async function buildClient() {
  const proc = Bun.spawn(["bunx", "vite", "build"], {
    stdout: "inherit",
    stderr: "inherit",
  });

  const exitCode = await proc.exited;
  if (exitCode !== 0) {
    console.error("❌ Vite client build failed");
    process.exit(1);
  }

  console.log("📦 Client bundle built (via Vite) → dist/");
}

async function getManifestAssets() {
  const manifest = await Bun.file(join(OUT_DIR, ".vite/manifest.json")).json();
  const entry = manifest["index.html"] ?? manifest["src/main.tsx"];
  const scriptSrc = entry?.file ? `${BASE_NAME}${entry.file}` : "/assets/main.js";
  const cssSrc = entry?.css?.[0] ? `${BASE_NAME}${entry.css[0]}` : null;
  return { scriptSrc, cssSrc };
}

function renderWithHelmet(component: React.ReactElement) {
  const helmetContext: Record<string, any> = {};
  const html = renderToString(
    createElement(HelmetProvider, { context: helmetContext }, component)
  );
  // toString() on each helmet property renders the full tag string,
  // so anything declared in <Helmet> (title, meta, link, script, style...)
  // gets included without us needing to know about it in advance
  const head = Object.values(helmetContext.helmet)
    .map((val: any) => val.toString())
    .join("\n    ");
  return { html, head };
}

function pageTemplate(
  html: string,
  head: string,
  scriptSrc: string,
  cssSrc: string | null,
) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ${head}
    ${cssSrc ? `<link rel="stylesheet" href="${cssSrc}" />` : ""}
  </head>
  <body>
    <div id="root">${html}</div>
    <script src="${scriptSrc}" defer></script>
  </body>
</html>`;
}

async function buildHTML() {
  const { default: App } = await import("../src/App.tsx");
  const { default: NotFound } = await import("../src/pages/404.tsx");
  const { scriptSrc, cssSrc } = await getManifestAssets();

  await Promise.all([
    Bun.write(
      join(OUT_DIR, "index.html"),
      pageTemplate(...Object.values(renderWithHelmet(createElement(App))), scriptSrc, cssSrc)
    ).then(() => console.log("🖼️  HTML rendered → dist/index.html")),

    Bun.write(
      join(OUT_DIR, "404.html"),
      pageTemplate(...Object.values(renderWithHelmet(createElement(NotFound))), scriptSrc, cssSrc)
    ).then(() => console.log("🖼️  HTML rendered → dist/404.html")),
  ]);
}

async function main() {
  console.log("🚀 Starting SSG build...\n");

  await mkdir(OUT_DIR, { recursive: true });

  await buildClient();
  await buildHTML();

  console.log("\n✅ Build complete → dist/");
}

main().catch((err) => {
  console.error("Build failed:", err);
  process.exit(1);
});
