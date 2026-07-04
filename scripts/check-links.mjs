/**
 * check-links.mjs
 * Scans all .astro files in src/pages/ for internal href/src values
 * and verifies each resolved path exists in the public/ directory or
 * as a page file in src/pages/.
 *
 * Run: npm run check:links
 * Exit 1 if broken links are found; 0 if clean.
 */

import { readdir, readFile, stat } from 'node:fs/promises';
import { join, extname, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const PAGES_DIR = join(ROOT, 'src', 'pages');
const PUBLIC_DIR = join(ROOT, 'public');

// Patterns to skip — external, mailto, tel, anchors, data URIs
const SKIP_RE = /^(https?:|mailto:|tel:|#|data:|\/\/)/;

// Collect all .astro files recursively
async function collectAstroFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await collectAstroFiles(full));
    } else if (extname(entry.name) === '.astro') {
      files.push(full);
    }
  }
  return files;
}

// Extract href and src attribute values from raw text
function extractPaths(text) {
  const paths = [];
  // href="..." and src="..."
  const re = /(?:href|src)=["']([^"']+)["']/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    paths.push(m[1].trim());
  }
  return paths;
}

// Check if a public/ path exists
async function existsInPublic(urlPath) {
  // Strip query string and fragment
  const clean = urlPath.split('?')[0].split('#')[0];
  const candidate = join(PUBLIC_DIR, clean);
  try {
    await stat(candidate);
    return true;
  } catch {
    return false;
  }
}

// Check if a path corresponds to an Astro page (with trailing slash = index.astro)
async function existsAsPage(urlPath) {
  const clean = urlPath.split('?')[0].split('#')[0].replace(/\/$/, '');
  if (clean === '') return true; // root
  const candidates = [
    join(PAGES_DIR, clean + '.astro'),
    join(PAGES_DIR, clean, 'index.astro'),
  ];
  for (const c of candidates) {
    try {
      await stat(c);
      return true;
    } catch {}
  }
  return false;
}

async function main() {
  const files = await collectAstroFiles(PAGES_DIR);
  // Also check components and layouts
  const extraDirs = [join(ROOT, 'src', 'components'), join(ROOT, 'src', 'layouts')];
  for (const d of extraDirs) {
    try { files.push(...await collectAstroFiles(d)); } catch {}
  }

  let totalIssues = 0;
  const report = [];

  for (const file of files) {
    const text = await readFile(file, 'utf8');
    const paths = extractPaths(text);
    const relFile = file.replace(ROOT, '').replace(/\\/g, '/');

    for (const p of paths) {
      if (SKIP_RE.test(p)) continue;

      // http:// is always wrong on this site
      if (/^http:\/\//.test(p)) {
        report.push({ file: relFile, path: p, issue: 'Uses http:// (not https://)' });
        totalIssues++;
        continue;
      }

      // Remote https links are allowed (external) — skip
      if (/^https:\/\//.test(p)) continue;

      // Local absolute paths
      if (p.startsWith('/')) {
        const inPublic = await existsInPublic(p);
        const isPage  = await existsAsPage(p);
        if (!inPublic && !isPage) {
          // Whitelist known Cloudflare special paths
          const special = ['/_redirects', '/_headers', '/robots.txt', '/sitemap', '/sitemap-index.xml', '/sitemap-0.xml'];
          if (!special.some(s => p === s || p.startsWith(s))) {
            report.push({ file: relFile, path: p, issue: 'Path not found in public/ or src/pages/' });
            totalIssues++;
          }
        }
        continue;
      }

      // Relative paths — flag them; project standard is absolute paths
      report.push({ file: relFile, path: p, issue: 'Relative path detected — use absolute /path/ instead' });
      totalIssues++;
    }
  }

  if (report.length === 0) {
    console.log('check:links — All links clean. No issues found.');
    process.exit(0);
  }

  console.error(`\ncheck:links — ${totalIssues} issue(s) found:\n`);
  for (const { file, path, issue } of report) {
    console.error(`  ${file}\n    PATH: ${path}\n    ISSUE: ${issue}\n`);
  }
  process.exit(1);
}

main().catch(err => { console.error(err); process.exit(1); });
