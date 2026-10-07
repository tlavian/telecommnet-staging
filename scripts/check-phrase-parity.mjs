/**
 * check-phrase-parity.mjs  (V8.6, warning mode: always exits 0)
 * For each page in dist/sitemap-0.xml:
 *  - WARN when JSON-LD jobTitle / description / hasOccupation text says "expert witness"
 *    but the page's visible text does not (structured data must match visible content).
 *  - REPORT occurrences of "expert witness" per 1,000 visible words and in the first 100 words.
 * Run after build: npm run audit:phrase
 */
import { readFile } from 'node:fs/promises';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const PHRASE = /expert[\s-]+witness/gi;

const sm = await readFile(join(DIST, 'sitemap-0.xml'), 'utf8');
const paths = [...sm.matchAll(/<loc>https:\/\/telecommnet\.com([^<]*)<\/loc>/g)].map((m) => m[1]);

const collect = (node, key, out) => {
  if (Array.isArray(node)) return node.forEach((n) => collect(n, key, out));
  if (node && typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) {
      if (['jobTitle', 'description'].includes(k) && typeof v === 'string') out.push(`${k}: ${v}`);
      if (k === 'hasOccupation') out.push(`hasOccupation: ${JSON.stringify(v)}`);
      collect(v, key, out);
    }
  }
};

let warnings = 0;
console.log('page'.padEnd(62), 'words', 'per1k', 'first100');
for (const p of paths) {
  const file = join(DIST, p, 'index.html');
  let html;
  try { html = await readFile(file, 'utf8'); } catch { continue; }
  const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  const ldStrings = [];
  for (const m of ld) { try { collect(JSON.parse(m[1]), '', ldStrings); } catch {} }
  const main = (html.match(/<main[\s\S]*?<\/main>/i) || [html])[0];
  const text = main.replace(/<(script|style)[\s\S]*?<\/\1>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
  const visible = html.replace(/<(script|style)[\s\S]*?<\/\1>/gi, ' ').replace(/<[^>]+>/g, ' ');
  const words = text.split(' ').filter(Boolean);
  const count = (text.match(PHRASE) || []).length;
  const first100 = (words.slice(0, 100).join(' ').match(PHRASE) || []).length;
  console.log((p || '/').padEnd(62), String(words.length).padStart(5), (words.length ? (count / words.length * 1000) : 0).toFixed(1).padStart(5), String(first100).padStart(8));
  if (ldStrings.some((s) => PHRASE.test(s)) && !(PHRASE.lastIndex = 0, PHRASE.test(visible))) {
    PHRASE.lastIndex = 0;
    console.log(`  WARN ${p}: JSON-LD uses "expert witness" but the visible page does not`);
    warnings++;
  }
  PHRASE.lastIndex = 0;
}
console.log(`\nphrase-parity warnings: ${warnings} (warning mode; exit 0)`);
