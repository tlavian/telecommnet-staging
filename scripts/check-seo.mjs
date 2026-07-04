/**
 * check-seo.mjs
 * Scans the Astro build output (dist/) for basic on-page SEO quality signals.
 *
 * Checks per page:
 *   - <title> present, non-empty, reasonable length (30–70 chars)
 *   - <meta name="description"> present, non-empty, reasonable length (100–160 chars)
 *   - Exactly one <h1> per page
 *   - No duplicate titles across the site
 *   - No duplicate meta descriptions across the site
 *   - Canonical <link rel="canonical"> present
 *   - No "http://" in href attributes (should be https)
 *   - Images have alt attributes
 *   - Open Graph tags present (og:title, og:description)
 *
 * Top-priority keyword check (from memory: "telecommunications expert witness",
 * "internet expert witness") — warns if homepage and key pages are missing them.
 *
 * Run AFTER build: npm run check:seo
 * Exit 1 if errors are found; warnings do not fail the build.
 */

import { readdir, readFile } from 'node:fs/promises';
import { join, resolve, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DIST_DIR = join(ROOT, 'dist');

// Pages where specific keywords must appear in <title> or <h1>
const KEYWORD_RULES = [
  { path: '/index.html', keyword: 'telecommunications expert witness' },
  { path: '/index.html', keyword: 'Tal Lavian' },
  { path: '/communications-expert-witness/index.html', keyword: 'expert witness' },
  { path: '/communications-expert-witness/telecommunications-expert-witness/index.html', keyword: 'telecommunications expert witness' },
  { path: '/communications-expert-witness/internet-expert-witness/index.html', keyword: 'internet expert witness' },
];

function extract(html, re) {
  const m = re.exec(html);
  return m ? m[1].trim() : null;
}

function extractAll(html, re) {
  const results = [];
  let m;
  const reg = new RegExp(re.source, re.flags + (re.flags.includes('g') ? '' : 'g'));
  while ((m = reg.exec(html)) !== null) results.push(m[1].trim());
  return results;
}

async function collectHtmlFiles(dir) {
  const files = [];
  let entries;
  try { entries = await readdir(dir, { withFileTypes: true }); }
  catch { return files; }
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) files.push(...await collectHtmlFiles(full));
    else if (extname(e.name) === '.html') files.push(full);
  }
  return files;
}

async function main() {
  const files = await collectHtmlFiles(DIST_DIR);
  if (files.length === 0) {
    console.warn('check:seo — No HTML files found in dist/. Run "npm run build" first.');
    process.exit(0);
  }

  const errors = [];
  const warnings = [];
  const seenTitles = new Map();
  const seenDescs  = new Map();

  for (const file of files) {
    const html = await readFile(file, 'utf8');
    const relFile = '/' + file.replace(DIST_DIR, '').replace(/\\/g, '/').replace(/^\//, '');

    // --- Title ---
    const title = extract(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
    if (!title) {
      errors.push(`${relFile}: Missing <title>`);
    } else {
      const len = title.length;
      if (len < 30) warnings.push(`${relFile}: <title> too short (${len} chars) — aim for 30–70`);
      if (len > 70) warnings.push(`${relFile}: <title> too long (${len} chars) — aim for 30–70`);
      if (seenTitles.has(title)) {
        errors.push(`${relFile}: Duplicate <title> with ${seenTitles.get(title)}: "${title}"`);
      } else {
        seenTitles.set(title, relFile);
      }
    }

    // --- Meta description ---
    const desc = extract(html, /<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i)
               || extract(html, /<meta\s+content=["']([^"']*)["']\s+name=["']description["']/i);
    if (!desc) {
      errors.push(`${relFile}: Missing <meta name="description">`);
    } else {
      const len = desc.length;
      if (len < 100) warnings.push(`${relFile}: Meta description too short (${len} chars) — aim for 100–160`);
      if (len > 165) warnings.push(`${relFile}: Meta description too long (${len} chars) — aim for 100–160`);
      if (seenDescs.has(desc)) {
        errors.push(`${relFile}: Duplicate meta description with ${seenDescs.get(desc)}`);
      } else {
        seenDescs.set(desc, relFile);
      }
    }

    // --- H1 count ---
    const h1s = extractAll(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i);
    if (h1s.length === 0) {
      errors.push(`${relFile}: No <h1> found`);
    } else if (h1s.length > 1) {
      warnings.push(`${relFile}: ${h1s.length} <h1> tags found — should have exactly 1`);
    }

    // --- Canonical ---
    const canonical = extract(html, /<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i)
                    || extract(html, /<link\s+href=["']([^"']*)["']\s+rel=["']canonical["']/i);
    if (!canonical) {
      warnings.push(`${relFile}: No <link rel="canonical"> found`);
    }

    // --- http:// in hrefs ---
    const httpLinks = (html.match(/href=["']http:\/\//g) || []);
    if (httpLinks.length > 0) {
      errors.push(`${relFile}: ${httpLinks.length} http:// href(s) — all links must use https://`);
    }

    // --- Images without alt ---
    const imgNoAlt = (html.match(/<img(?![^>]*alt=)[^>]*>/gi) || []);
    if (imgNoAlt.length > 0) {
      warnings.push(`${relFile}: ${imgNoAlt.length} <img> tag(s) missing alt attribute`);
    }

    // --- Open Graph ---
    const ogTitle = extract(html, /<meta\s+property=["']og:title["']\s+content=["']([^"']*)["']/i)
                  || extract(html, /<meta\s+content=["']([^"']*)["']\s+property=["']og:title["']/i);
    if (!ogTitle) {
      warnings.push(`${relFile}: Missing og:title Open Graph tag`);
    }
    const ogDesc = extract(html, /<meta\s+property=["']og:description["']\s+content=["']([^"']*)["']/i)
                 || extract(html, /<meta\s+content=["']([^"']*)["']\s+property=["']og:description["']/i);
    if (!ogDesc) {
      warnings.push(`${relFile}: Missing og:description Open Graph tag`);
    }

    // --- Keyword rules ---
    for (const rule of KEYWORD_RULES) {
      if (relFile === rule.path || relFile === rule.path.replace(/\/index\.html$/, '/')) {
        const searchIn = (title || '') + ' ' + (h1s.join(' '));
        if (!searchIn.toLowerCase().includes(rule.keyword.toLowerCase())) {
          warnings.push(`${relFile}: Priority keyword "${rule.keyword}" not found in title or H1`);
        }
      }
    }
  }

  // --- Summary ---
  console.log(`\ncheck:seo — Scanned ${files.length} pages.`);

  if (warnings.length > 0) {
    console.warn(`\nWARNINGS (${warnings.length}):`);
    for (const w of warnings) console.warn(`  WARN  ${w}`);
  }

  if (errors.length > 0) {
    console.error(`\nERRORS (${errors.length}):`);
    for (const e of errors) console.error(`  ERROR ${e}`);
    process.exit(1);
  }

  if (errors.length === 0 && warnings.length === 0) {
    console.log('All SEO checks passed with no issues.');
  } else {
    console.log(`\nSEO check complete — ${errors.length} error(s), ${warnings.length} warning(s).`);
  }

  process.exit(0);
}

main().catch(err => { console.error(err); process.exit(1); });
