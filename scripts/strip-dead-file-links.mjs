/**
 * strip-dead-file-links.mjs
 * Unwraps <a href="/files/..."> anchors whose target file does NOT exist in public/.
 * Keeps the visible anchor text intact; leaves links to existing files untouched.
 * Only touches /files/* hrefs. Reports every change.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readdirSync, statSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const PUBLIC_DIR = join(ROOT, 'public');
const PAGES_DIR = join(ROOT, 'src', 'pages');

function collectAstro(dir) {
  const out = [];
  for (const e of readdirSync(dir)) {
    const full = join(dir, e);
    if (statSync(full).isDirectory()) out.push(...collectAstro(full));
    else if (full.endsWith('.astro')) out.push(full);
  }
  return out;
}

// Matches a single <a ...href="/files/...">TEXT</a> (non-greedy, one anchor)
const ANCHOR_RE = /<a\b[^>]*\bhref="(\/files\/[^"]+)"[^>]*>(.*?)<\/a>/gi;

let filesChanged = 0, linksRemoved = 0, linksKept = 0;
const perFile = [];

for (const file of collectAstro(PAGES_DIR)) {
  const orig = readFileSync(file, 'utf8');
  let removedHere = 0;
  const next = orig.replace(ANCHOR_RE, (whole, href, text) => {
    // decode nothing; href is compared as authored
    const diskPath = join(PUBLIC_DIR, decodeURIComponent(href));
    if (existsSync(diskPath)) { linksKept++; return whole; } // file exists -> keep link
    removedHere++; linksRemoved++;
    return text; // unwrap: keep visible text only
  });
  if (next !== orig) {
    writeFileSync(file, next, 'utf8');
    filesChanged++;
    perFile.push(`  ${removedHere.toString().padStart(3)}  ${file.replace(ROOT, '.')}`);
  }
}

console.log(`Files changed:  ${filesChanged}`);
console.log(`Dead links unwrapped: ${linksRemoved}`);
console.log(`Working /files links kept: ${linksKept}`);
console.log('\nPer-file (dead links unwrapped):');
console.log(perFile.join('\n'));
