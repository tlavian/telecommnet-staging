/**
 * check-schema.mjs
 * Scans the Astro build output (dist/) for JSON-LD <script type="application/ld+json">
 * blocks and validates their structure. Does NOT call external APIs — pure local check.
 *
 * Validates:
 *   - JSON parses without error
 *   - @context is "https://schema.org"
 *   - @type is present and non-empty
 *   - Known required fields per type (Person, WebPage, WebSite, Organization, BreadcrumbList)
 *
 * Run AFTER build: npm run check:schema
 * Exit 1 if schema errors are found.
 */

import { readdir, readFile } from 'node:fs/promises';
import { join, resolve, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DIST_DIR = join(ROOT, 'dist');

// Required fields per @type
const REQUIRED_FIELDS = {
  Person: ['name'],
  WebSite: ['name', 'url'],
  WebPage: ['name', 'url'],
  Organization: ['name', 'url'],
  BreadcrumbList: ['itemListElement'],
  FAQPage: ['mainEntity'],
  Article: ['headline', 'author'],
  Service: ['name', 'provider'],
};

async function collectHtmlFiles(dir) {
  let files = [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return files; // dist doesn't exist yet
  }
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...await collectHtmlFiles(full));
    } else if (extname(e.name) === '.html') {
      files.push(full);
    }
  }
  return files;
}

function extractJsonLd(html) {
  const blocks = [];
  const re = /<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    blocks.push(m[1].trim());
  }
  return blocks;
}

function validateSchema(obj, filePath) {
  const issues = [];

  if (typeof obj !== 'object' || obj === null) {
    issues.push('Schema is not a JSON object');
    return issues;
  }

  // Handle @graph array
  if (obj['@graph'] && Array.isArray(obj['@graph'])) {
    for (const item of obj['@graph']) {
      issues.push(...validateSchema(item, filePath));
    }
    return issues;
  }

  if (!obj['@context']) {
    issues.push('@context is missing');
  } else if (!String(obj['@context']).includes('schema.org')) {
    issues.push(`@context should reference schema.org, got: ${obj['@context']}`);
  }

  if (!obj['@type']) {
    issues.push('@type is missing');
    return issues;
  }

  const type = Array.isArray(obj['@type']) ? obj['@type'][0] : obj['@type'];
  const required = REQUIRED_FIELDS[type] || [];
  for (const field of required) {
    if (!obj[field]) {
      issues.push(`@type "${type}" is missing required field: ${field}`);
    }
  }

  // Sanity checks for Person type (Dr. Lavian)
  if (type === 'Person') {
    if (obj.name && !obj.name.includes('Lavian')) {
      issues.push(`Person name "${obj.name}" does not include "Lavian" — verify this is correct`);
    }
  }

  return issues;
}

async function main() {
  const files = await collectHtmlFiles(DIST_DIR);

  if (files.length === 0) {
    console.warn('check:schema — No HTML files found in dist/. Run "npm run build" first.');
    process.exit(0);
  }

  let totalIssues = 0;
  let totalBlocks = 0;
  let filesWithSchema = 0;
  const report = [];

  for (const file of files) {
    const html = await readFile(file, 'utf8');
    const blocks = extractJsonLd(html);

    if (blocks.length === 0) continue;
    filesWithSchema++;
    totalBlocks += blocks.length;

    const relFile = file.replace(ROOT, '').replace(/\\/g, '/');

    for (let i = 0; i < blocks.length; i++) {
      let parsed;
      try {
        parsed = JSON.parse(blocks[i]);
      } catch (e) {
        report.push({ file: relFile, block: i + 1, issues: [`JSON parse error: ${e.message}`] });
        totalIssues++;
        continue;
      }

      const issues = validateSchema(parsed, relFile);
      if (issues.length > 0) {
        report.push({ file: relFile, block: i + 1, issues });
        totalIssues += issues.length;
      }
    }
  }

  console.log(`\ncheck:schema — Scanned ${files.length} HTML files, ${filesWithSchema} with JSON-LD, ${totalBlocks} total schema blocks.`);

  if (report.length === 0) {
    console.log('All schema blocks passed validation.');
    process.exit(0);
  }

  console.error(`\n${totalIssues} issue(s) found:\n`);
  for (const { file, block, issues } of report) {
    console.error(`  ${file} (block ${block}):`);
    for (const issue of issues) {
      console.error(`    - ${issue}`);
    }
    console.error('');
  }
  process.exit(1);
}

main().catch(err => { console.error(err); process.exit(1); });
