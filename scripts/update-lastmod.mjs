// Writes src/data/lastmod.json: { "/path/": "<ISO date of last git commit touching the page source>" }
// Run locally (full git history) before committing page changes: npm run lastmod
// astro.config.mjs uses this file when the build environment has no usable git history
// (Cloudflare Pages builds from a shallow clone).
import { execSync } from 'node:child_process';
import { existsSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const pagesDir = path.join(root, 'src', 'pages');
const out = {};

function walk(dir, urlPrefix) {
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) {
      walk(full, urlPrefix + entry + '/');
    } else if (entry === 'index.astro') {
      const rel = path.relative(root, full).split(path.sep).join('/');
      try {
        const date = execSync(`git log -1 --format=%cI -- "${rel}"`, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
        if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:[+-]\d{2}:\d{2}|Z)$/.test(date)) out[urlPrefix] = date;
      } catch { /* no commit yet: omit */ }
    }
  }
}
const shallow = execSync('git rev-parse --is-shallow-repository', { cwd: root, encoding: 'utf8' }).trim();
if (shallow !== 'false') { console.error('Refusing to write lastmod.json from a shallow clone.'); process.exit(1); }
walk(pagesDir, '/');
const sorted = Object.fromEntries(Object.keys(out).sort().map(k => [k, out[k]]));
writeFileSync(path.join(root, 'src', 'data', 'lastmod.json'), JSON.stringify(sorted, null, 2) + '\n');
console.log(`lastmod.json written: ${Object.keys(sorted).length} paths`);
