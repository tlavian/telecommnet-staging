// Protected-page guard (V10.1): the 16 pages that ranked in Google's top three on at least one query on 2026-10-10
// must not change <title>, <h1> or URL without a recorded reason.
//   node scripts/check-protected.mjs            compare dist/ with src/data/protected-pages.json (exit 1 on any difference)
//   node scripts/check-protected.mjs --snapshot  rewrite the snapshot from dist/ (use ONLY after recording the reason in Open Items;
//                                                pass --reason "text" to store it in the file's history)
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const snapPath = path.join(root, "src", "data", "protected-pages.json");
const PAGES = ["/", "/communications-expert-witness/",
  ...["telecommunications", "internet", "network-communications", "computer-networking", "data-communications", "networking", "routing-switching", "streaming-media", "network-management", "network-security", "mobile-wireless", "messaging-and-chat", "pstn-voip"].map((s) => `/communications-expert-witness/${s}-expert-witness/`),
  "/communications-expert-witness/voice-over-ip-voip-expert/"];

const decode = (s) => s.replace(/&#38;|&amp;/g, "&").replace(/&mdash;/g, "—").replace(/&rsquo;/g, "’").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
function read(p) {
  const f = path.join(root, "dist", p, "index.html");
  if (!existsSync(f)) return null;
  const h = readFileSync(f, "utf8");
  return { title: decode((h.match(/<title>([^<]*)<\/title>/) || [])[1] || ""), h1: decode(((h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || "").replace(/<[^>]+>/g, "")) };
}
const now = Object.fromEntries(PAGES.map((p) => [p, read(p)]));
const missing = PAGES.filter((p) => !now[p]);
if (missing.length) { console.error("Protected page missing from dist (URL changed or build not run):\n  " + missing.join("\n  ")); process.exit(1); }

if (process.argv.includes("--snapshot")) {
  const ri = process.argv.indexOf("--reason");
  const reason = ri > 0 ? process.argv[ri + 1] : "initial snapshot";
  const prev = existsSync(snapPath) ? JSON.parse(readFileSync(snapPath, "utf8")) : { history: [] };
  writeFileSync(snapPath, JSON.stringify({ note: "Titles/H1s of the 16 pages that ranked top-3 on 2026-10-10. Change only with a recorded reason (Open Items).", history: [...(prev.history || []), { date: new Date().toISOString().slice(0, 10), reason }], pages: now }, null, 2) + "\n");
  console.log(`protected snapshot written (${PAGES.length} pages): ${reason}`);
  process.exit(0);
}
const snap = JSON.parse(readFileSync(snapPath, "utf8")).pages;
const bad = [];
for (const p of PAGES) {
  if (!snap[p]) bad.push(`${p}: not in snapshot`);
  else for (const k of ["title", "h1"]) if (snap[p][k] !== now[p][k]) bad.push(`${p} ${k}:\n    was: ${snap[p][k]}\n    now: ${now[p][k]}`);
}
if (bad.length) { console.error(`PROTECTED PAGE CHANGED (${bad.length}). Record the reason in Open Items, then run: node scripts/check-protected.mjs --snapshot --reason "..."`); bad.forEach((b) => console.error("  " + b)); process.exit(1); }
console.log(`check-protected: ${PAGES.length} protected pages unchanged`);
