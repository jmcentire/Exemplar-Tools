import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();

const checks = [
  ["src/pages/index.astro", ["SITE_STATS.activeResearchPapers", "SITE_STATS.properTools", "SITE_STATS.tests", "SITE_STATS.languages"]],
  ["src/layouts/BaseLayout.astro", ["SITE_STATS.properTools"]],
  ["nginx.conf", ['Cache-Control "no-cache, must-revalidate"']],
  ["public/llms.txt", ["26 active research papers", "8 books", "23 proper tools"]],
  ["public/llms-full.txt", ["26 active research papers", "8 books", "23 proper tools"]],
  ["public/og-image.svg", ["23 proper tools", "26 papers"]],
];

const forbidden = [
  "40 papers",
  "40 Papers",
  "45 papers",
  "45 Papers",
  "25 papers",
  "25 Papers",
  "24 papers",
  "24 Papers",
  "7 books",
  "7 Books",
];

let failed = false;

for (const [file, required] of checks) {
  const text = readFileSync(join(root, file), "utf8");
  for (const needle of required) {
    if (!text.includes(needle)) {
      console.error(`${file}: missing ${JSON.stringify(needle)}`);
      failed = true;
    }
  }
}

for (const file of ["src/pages/index.astro", "src/layouts/BaseLayout.astro", "public/llms.txt", "public/llms-full.txt", "public/og-image.svg"]) {
  const text = readFileSync(join(root, file), "utf8");
  for (const needle of forbidden) {
    if (text.includes(needle)) {
      console.error(`${file}: forbidden stale count ${JSON.stringify(needle)}`);
      failed = true;
    }
  }
}

if (failed) {
  process.exit(1);
}

console.log("copy counts verified");
