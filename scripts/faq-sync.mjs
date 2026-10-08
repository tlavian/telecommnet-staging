/**
 * faq-sync.mjs — Astro integration (build-time).
 * Rebuilds each page's FAQPage JSON-LD from the FAQ the visitor can actually read
 * (<section class="faq-section"> with <details><summary>question</summary>answer</details>),
 * so the structured data can never contain questions or answers that are not on the page.
 * No visible content is changed. Pages without a visible FAQ section keep their schema as is
 * (a warning is printed).
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const NAMED = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“', mdash: '—', ndash: '–', hellip: '…', middot: '·', times: '×' };
const decode = (s) =>
  s.replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
   .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
   .replace(/&([a-z]+);/gi, (m, n) => (NAMED[n.toLowerCase()] ?? m));
const text = (html) => decode(html.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (e.name === 'index.html') out.push(p);
  }
  return out;
}

export function visibleFaq(html) {
  const sec = html.match(/<section[^>]*class="[^"]*faq-section[^"]*"[^>]*>([\s\S]*?)<\/section>/i);
  if (!sec) return [];
  const items = [];
  for (const m of sec[1].matchAll(/<details[^>]*>\s*<summary[^>]*>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/gi)) {
    const q = text(m[1]);
    const a = text(m[2]);
    if (q && a) items.push({ q, a });
  }
  return items;
}

export default function faqSync() {
  return {
    name: 'faq-sync',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const root = fileURLToPath(dir);
        let synced = 0;
        for (const file of await walk(root)) {
          let html = await readFile(file, 'utf8');
          if (!html.includes('FAQPage')) continue;
          const faq = visibleFaq(html);
          const rel = file.slice(root.length).split("\\").join("/");
          if (!faq.length) { console.warn(`[faq-sync] ${rel}: FAQPage schema but no visible FAQ section; left unchanged`); continue; }
          let changed = false;
          html = html.replace(/(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/g, (m, a, body, c) => {
            let j;
            try { j = JSON.parse(body); } catch { return m; }
            const graph = Array.isArray(j['@graph']) ? j['@graph'] : [j];
            let hit = false;
            for (const n of graph) {
              if (n && [].concat(n['@type'] || []).includes('FAQPage')) {
                n.mainEntity = faq.map((x) => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } }));
                hit = true;
              }
            }
            if (!hit) return m;
            changed = true;
            return a + JSON.stringify(j) + c;
          });
          if (changed) { await writeFile(file, html); synced++; console.log(`[faq-sync] ${rel}: ${faq.length} visible questions -> FAQPage`); }
        }
        console.log(`[faq-sync] synced ${synced} pages`);
      },
    },
  };
}
