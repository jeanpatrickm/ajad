import { renderToString } from "react-dom/server";
import { createElement } from "react";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

const OUT_DIR = "./dist";

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
  const scriptSrc = entry?.file ? `/${entry.file}` : "/assets/main.js";
  const cssSrc = entry?.css?.[0] ? `/${entry.css[0]}` : null;
  return { scriptSrc, cssSrc };
}

function pageTemplate(html: string, scriptSrc: string, cssSrc: string | null, title = "App") {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
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
      pageTemplate(renderToString(createElement(App)), scriptSrc, cssSrc)
    ).then(() => console.log("🖼️  HTML rendered → dist/index.html")),

    Bun.write(
      join(OUT_DIR, "404.html"),
      pageTemplate(renderToString(createElement(NotFound)), scriptSrc, cssSrc, "404 - Not Found")
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
