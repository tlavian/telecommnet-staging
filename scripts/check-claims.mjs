// Registry-conformance lint for the BUILT site (dist/*.html visible text + JSON-LD, plus public/llms*.txt).
// Fails (exit 1) on content the project forbids or on wording the Approved Facts Registry does not support.
// Usage: node scripts/check-claims.mjs [distDir]
import fs from "node:fs";
import path from "node:path";

const dist = process.argv[2] || "dist";
const RULES = [
  // Prohibited topics (project rules, July 8-9 2026)
  [/\bPOSITA\b|person of ordinary skill/i, "POSITA content is prohibited"],
  [/\bDaubert\b|FRE 702|Rule 702/i, "Daubert / FRE 702 content is prohibited"],
  [/\b5G\b|\bFRAND\b|\bSEPs?\b|standards-essential|\bmmWave\b|network slicing|\bLTE\b/i, "5G/LTE/SEP/FRAND content is prohibited"],
  // Registry wording
  [/Wi-Fi\s*\(IEEE\s*802\.11\)/i, "write Wi-Fi 802.11 (no parenthetical IEEE form)"],
  [/Wi-Fi\s*802\.11\s*(a|b|g|n|ac|ax|be)\b/i, "Wi-Fi must be written 'Wi-Fi 802.11' without variant suffix"],
  [/\b(90\+|over 90) patent cases\b/i, "use '90+ cases' (registry wording)"],
  [/\b(25\+|over 25|more than 25) peer-reviewed (publications|works)\b/i, "use '25+ scientific publications' (registry wording)"],
  [/\bhas (testified|provided testimony) in patent cases\b/i, "use 'retained in' (testimony only where registry says so)"],
  [/court in Asia|Canada and Asia/i, "use 'a court in Malaysia'"],
  [/tax court/i, "Canadian matters: use 'Canadian Federal Court' / 'Canadian court'"],
  [/international arbitration/i, "'international arbitration' is not supported"],
  [/UC Berkeley (professor|researcher)|professor at (UC )?Berkeley|researcher at (UC )?Berkeley/i, "UC Berkeley role is 'researching, studying, and lecturing'"],
  [/(?<!nearly )\b20 years\b[^.]{0,40}Berkeley|Berkeley[^.]{0,40}(?<!nearly )\b20 years\b/i, "use 'nearly 20 years' for UC Berkeley"],
  [/\b(expired|abandoned|lapsed|withdrawn) patents?\b/i, "never state patent legal status"],
  [/\b(world-class|renowned|premier|leading expert|best expert|top expert|#1)\b/i, "no superlatives"],
  [/8\+ trial testimon/i, "unsupported count"],
  [/200\+ patents analyzed|70\+ expert reports/i, "unsupported count"],
  [/source code review/i, "source-code review content is on the hold list"],
];

// Owner-approved exceptions (Dr. Lavian, 2026-10-09): [file fragment, rule message fragment]
const ALLOW = [
  ["cases-expert-witness-testimony", "5G/LTE"],   // Ericsson v. Samsung matter lists LTE; real past case
  ["communications-expert-witness/index.html", "source-code"], // hub FAQ mention approved
];

const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.html$/.test(e.name)) files.push(p);
  }
})(dist);
for (const f of ["public/llms.txt", "public/llms-full.txt"]) if (fs.existsSync(f)) files.push(f);

const strip = (h) =>
  h.replace(/<script(?![^>]*ld\+json)[\s\S]*?<\/script>/g, " ")
   .replace(/<style[\s\S]*?<\/style>/g, " ")
   .replace(/<[^>]+>/g, " ")
   .replace(/&mdash;|&rsquo;|&amp;|&nbsp;/g, " ")
   .replace(/\s+/g, " ");

let hits = 0;
for (const f of files) {
  const raw = fs.readFileSync(f, "utf8");
  const text = f.endsWith(".html") ? strip(raw) : raw;
  for (const [re, msg] of RULES) {
    const m = text.match(re);
    if (m && !ALLOW.some(([a, b]) => f.split(String.fromCharCode(92)).join("/").includes(a) && msg.includes(b))) {
      const i = m.index;
      console.log(`FAIL ${f.split(String.fromCharCode(92)).join("/")}: ${msg}\n     ...${text.slice(Math.max(0, i - 60), i + 90)}...`);
      hits++;
    }
  }
}
console.log(`\ncheck-claims: ${files.length} files, ${hits} violation(s)`);
process.exit(hits ? 1 : 0);
