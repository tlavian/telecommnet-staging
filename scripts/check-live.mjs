// Post-deploy monitor: fetches the LIVE site and verifies the signals that decide indexing and display.
// Usage: node scripts/check-live.mjs [https://telecommnet.com]   (exit 1 on any failure)
const base = (process.argv[2] || "https://telecommnet.com").replace(/\/$/, "");
const get = async (u) => { const r = await fetch(u + (u.includes("?") ? "&" : "?") + "cb=" + Date.now(), { redirect: "manual", headers: { "user-agent": "Mozilla/5.0 (live-check)" } }); return { r, t: await r.text() }; };
const fails = [];
const bad = (u, m) => { fails.push(`${u}: ${m}`); };

const sm = await get(base + "/sitemap-0.xml");
const urls = [...sm.t.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (urls.length < 27) bad("sitemap", `only ${urls.length} URLs`);

for (const u of urls) {
  const { r, t } = await get(u);
  if (r.status !== 200) { bad(u, `HTTP ${r.status}`); continue; }
  const xr = r.headers.get("x-robots-tag") || "";
  if (/noindex/i.test(xr)) bad(u, `X-Robots-Tag ${xr}`);
  const robots = (t.match(/<meta name="robots" content="([^"]*)"/i) || [])[1] || "";
  if (/noindex/i.test(robots)) bad(u, `meta robots ${robots}`);
  const canon = (t.match(/<link rel="canonical" href="([^"]*)"/i) || [])[1];
  if (canon !== u) bad(u, `canonical ${canon}`);
  const h1 = (t.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) bad(u, `${h1} <h1>`);
  if (!/<title>[^<]{20,}/.test(t)) bad(u, "title missing/short");
  const blocks = [...t.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (!blocks.length) bad(u, "no JSON-LD");
  let faqQ = 0;
  for (const b of blocks) {
    try { const j = JSON.parse(b[1]); for (const n of (j["@graph"] || [j])) if (n["@type"] === "FAQPage") faqQ += (n.mainEntity || []).length; }
    catch { bad(u, "JSON-LD does not parse"); }
  }
  const visQ = (t.match(/<section class="faq-section"[\s\S]*?<\/section>/) || [""])[0].match(/<summary/g)?.length || 0;
  if (visQ !== faqQ) bad(u, `FAQ visible ${visQ} vs JSON-LD ${faqQ}`);
  if (/\[email.protected\]|cdn-cgi\/l\/email-protection/.test(t)) bad(u, "email obfuscated by Cloudflare");
  if (/Peer-Reviewed Telecom|court in Asia|90\+ patent cases/.test(t)) bad(u, "retired wording present");
}
for (const p of ["/robots.txt", "/llms.txt", "/Dr-Tal-Lavian-CV-Expert-Witness-Network-Communications-Telecommunications-Internet-Protocols-Mobile-Wireless-2026.pdf"]) {
  const { r } = await get(base + p); if (r.status !== 200) bad(p, `HTTP ${r.status}`);
  if (/noindex/i.test(r.headers.get("x-robots-tag") || "")) bad(p, "noindex header");
}
console.log(`check-live: ${urls.length} URLs, ${fails.length} failure(s)`);
fails.forEach((f) => console.log("FAIL " + f));
process.exit(fails.length ? 1 : 0);
