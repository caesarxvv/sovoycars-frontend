import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { renderHome } from "./src/pages/home.js";
import { renderLocations } from "./src/pages/locations.js";
import { renderFleet } from "./src/pages/fleet.js";
import { renderFaq } from "./src/pages/faq.js";
import { renderHelp } from "./src/pages/help.js";

const root = dirname(fileURLToPath(import.meta.url));
const dist = join(root, "dist");

const pages = [
  { file: "index.html", render: renderHome },
  { file: "locations/index.html", render: renderLocations },
  { file: "fleet/index.html", render: renderFleet },
  { file: "faq/index.html", render: renderFaq },
  { file: "Help/index.html", render: renderHelp },
];

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

await cp(join(root, "src/assets"), join(dist, "assets"), { recursive: true });

for (const page of pages) {
  const target = join(dist, page.file);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, page.render(), "utf8");
  console.log(`built ${page.file}`);
}

console.log("Site built into dist/");
