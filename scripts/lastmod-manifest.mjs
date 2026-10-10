// Content-hash manifest for page dates (sitemap <lastmod>, footer "Last updated", JSON-LD dateModified).
//   node scripts/lastmod-manifest.mjs           update: bump a page's date only when its source content changed
//   node scripts/lastmod-manifest.mjs --check   fail (exit 1) if any page's content differs from the manifest
// Files: src/data/lastmod-hashes.json ({path: {hash, date}}) and src/data/lastmod.json ({path: date}).
// Hash = sha256 of the page source with CRLF normalised to LF, so line-ending noise never bumps a date.
import { createHash } from "node:crypto";
import { execSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const pagesDir = path.join(root, "src", "pages");
const manifestPath = path.join(root, "src", "data", "lastmod-hashes.json");
const lastmodPath = path.join(root, "src", "data", "lastmod.json");
const check = process.argv.includes("--check");

const pages = {}; // urlPath -> {hash, file}
(function walk(dir, prefix) {
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, prefix + entry + "/");
    else if (entry === "index.astro") {
      const text = readFileSync(full, "utf8").replace(/\r\n/g, "\n");
      pages[prefix] = { hash: createHash("sha256").update(text).digest("hex").slice(0, 16), file: path.relative(root, full).split(path.sep).join("/") };
    }
  }
})(pagesDir, "/");

const manifest = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, "utf8")) : {};
const now = new Date().toISOString();
const seedDate = (file) => {
  try { return execSync(`git log -1 --format=%cI -- "${file}"`, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim() || now; }
  catch { return now; }
};

const drift = [];
const next = {};
for (const [p, { hash, file }] of Object.entries(pages)) {
  const old = manifest[p];
  if (!old) { drift.push(`${p}: not in manifest`); next[p] = { hash, date: check ? now : seedDate(file) }; }
  else if (old.hash !== hash) { drift.push(`${p}: content changed`); next[p] = { hash, date: now }; }
  else next[p] = old;
}
for (const p of Object.keys(manifest)) if (!pages[p]) drift.push(`${p}: page removed`);

if (check) {
  if (drift.length) { console.error(`lastmod drift (${drift.length}): run "npm run lastmod" and commit src/data/*.json`); drift.slice(0, 20).forEach((d) => console.error("  " + d)); process.exit(1); }
  console.log(`lastmod manifest OK: ${Object.keys(pages).length} pages`);
  process.exit(0);
}
const sorted = Object.fromEntries(Object.keys(next).sort().map((k) => [k, next[k]]));
writeFileSync(manifestPath, JSON.stringify(sorted, null, 2) + "\n");
writeFileSync(lastmodPath, JSON.stringify(Object.fromEntries(Object.entries(sorted).map(([k, v]) => [k, v.date])), null, 2) + "\n");
console.log(`lastmod updated: ${Object.keys(sorted).length} pages, ${drift.length} changed/new`);
