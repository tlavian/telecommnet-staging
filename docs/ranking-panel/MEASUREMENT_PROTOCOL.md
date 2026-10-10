# Ranking measurement protocol (V10.7)

Panel: `Z5_google_serp_2026-10-10.csv` (34 queries, Google US English, `hl=en&gl=us&pws=0`, top 7-9 organic results, host + path only).

- Re-run by hand (not automated; Google CAPTCHA means stop) about 2026-10-17, 10-31 and 11-14, at most ~12 queries per sitting. Save each run as a new CSV in this folder, named `Z5_google_serp_<date>.csv`.
- A change counts only if it holds on two consecutive dates and exceeds about two positions.
- Single-day ranks are volatile (spam update ran about 2026-09-24 to 10-08); do not use one day as proof.
- Record each site change with its date in Open Items so later moves can be attributed.
- Search Console is the source of truth for impressions and clicks; use data from about 2026-10-15 as the baseline.
- Protected pages (title/H1/URL guarded by `npm run check:protected`): `/`, `/communications-expert-witness/` and its 14 expertise pages.
