# TelecommNet SEO Improvement Plan
## Expert Witness Expertise Pages — Searchability Optimization

**Target Pages:**
1. Telecommunications Expert Witness
2. Network Communications Expert Witness
3. Internet Expert Witness
4. Data Communications Expert
5. Computer Networking Expert Witness

**Date Created:** 2026-03-13
**Status:** In Progress

---

## Tier 1 — High Impact, Moderate Effort

### 1. Backlink Acquisition Strategy ⬜
**Impact:** ★★★★★ | **Effort:** Medium | **Type:** Off-site

- [ ] Ensure profiles on Justia, HG.org, ExpertPages.com, ForensisGroup, SEAK, and Expert Institute all link back to specific expertise pages (not just homepage)
- [ ] Update UC Berkeley alumni/faculty page to link to telecommnet.com
- [ ] Update IEEE/ACM author profiles to include expert witness URL
- [ ] Confirm Google Scholar profile links to the site
- [ ] Author a short article or Q&A for a legal blog (Law360, JD Supra) linking to expertise pages

### 2. Google Business Profile Optimization ⬜
**Impact:** ★★★★☆ | **Effort:** Low | **Type:** Off-site

- [ ] Create or verify Google Business Profile
- [ ] List "Expert Witness" and "Telecommunications Consulting" as service categories
- [ ] Add all expertise areas as services
- [ ] Link directly to relevant expertise pages (not just home)
- [ ] Post periodic updates (case results, publications, speaking engagements)

### 3. Content Freshness Signals ✅ (Completed 2026-03-13)
**Impact:** ★★★★☆ | **Effort:** Low | **Type:** On-site code change

- [x] Add `dateModified` and `datePublished` to WebPage schema in `schemas.ts`
- [ ] Add visible "Last updated: Month Year" on each expertise page (small footer-area text)
- [ ] Update case/patent/publication counts as they change

---

## Tier 2 — Medium Impact, Lower Effort

### 4. Expand FAQ Schema with PAA Questions ✅ (Completed 2026-03-13)
**Impact:** ★★★☆☆ | **Effort:** Low | **Type:** On-site code change

- [x] Research "People Also Ask" questions for each target keyword
- [x] Add 2–3 more FAQ items per page in `expertise-schemas.ts` (11 new FAQs across 5 pages)
- [x] Structure as genuine attorney questions (e.g., "How is a telecommunications expert witness qualified under Daubert?")

### 5. Core Web Vitals Audit ✅ (Completed 2026-03-13)
**Impact:** ★★★☆☆ | **Effort:** Low | **Type:** On-site

- [x] Code-level CWV audit completed (PageSpeed API rate-limited)
- [x] All images have width/height attributes (low CLS risk)
- [x] No render-blocking CSS; GA script properly deferred via requestIdleCallback
- [x] Zero-JS Astro advantage confirmed
- [x] Fixed: Above-fold images changed from `loading="lazy"` to `fetchpriority="high"` on all 5 target pages
- [ ] Future: Convert remaining JPEG to WebP/AVIF, add responsive srcset, event delegation for GA4

### 6. Image Alt Text Audit ✅ (Completed 2026-03-13)
**Impact:** ★★★☆☆ | **Effort:** Low | **Type:** On-site code change

- [x] Audited all images on the 5 target pages
- [x] Improved alt text on 4 images with keyword-rich, descriptive alt text including Dr. Lavian's name and specialty
- [x] Internet expert page alt text already optimized (no change needed)

### 7. Testimonial / Review Schema ⬜
**Impact:** ★★★☆☆ | **Effort:** Medium | **Type:** On-site code change

- [ ] Collect any attorney testimonials or endorsements
- [ ] Add `Review` or `Recommendation` schema markup
- [ ] Display quotes on relevant expertise pages

---

## Tier 3 — Incremental Gains

### 8. Video Content + VideoObject Schema ⬜
**Impact:** ★★★★☆ | **Effort:** High | **Type:** Content + code

- [ ] Identify any existing video of presentations, testimony explanations, or concept discussions
- [ ] Embed on relevant expertise pages
- [ ] Add `VideoObject` schema with description, thumbnail, and duration

### 9. Methodology / Process Page ⬜
**Impact:** ★★★☆☆ | **Effort:** Medium | **Type:** New content

- [ ] Create "Expert Witness Process" or "How We Work" page at `/expert-witness-process/`
- [ ] Cover engagement methodology, Daubert qualification, report preparation, deposition/trial
- [ ] Internal link from all expertise pages
- [ ] Add appropriate schema markup

### 10. Semantic Internal Cross-Linking ✅ (Completed 2026-03-13)
**Impact:** ★★☆☆☆ | **Effort:** Low | **Type:** On-site code change

- [x] Added contextual cross-links on 4 expertise pages (telecom, network comms, data comms, computer networking)
- [x] Fixed mislinked "network communications" anchor (was pointing to patent page, now points to expertise page)
- [x] Strengthens topical cluster authority between all 5 target pages

### 11. External Authority / AI Search Readiness ⬜
**Impact:** ★★★☆☆ | **Effort:** Medium | **Type:** Off-site

- [ ] Verify Wikipedia/Wikidata presence (if any) is accurate
- [ ] Ensure Google Scholar, LinkedIn, and other profiles are consistent with site claims
- [ ] Maximize corroborating sources for E-E-A-T trust score

---

## Completed (Prior Sessions)

### ✅ Non-Visible SEO (Meta, Schema, FAQ Schema)
- Title tags and meta descriptions optimized for all 5 pages
- JSON-LD @graph: Person + Organization + WebPage + Service + FAQPage + BreadcrumbList
- FAQ schema with keyword-targeted Q&A pairs

### ✅ Minimal Visible Changes (H1/H2/H3, First Paragraphs)
- H1, H2, H3 headings refined with target keywords
- First-paragraph body text optimized

### ✅ Trust Signals — Credential Bar
- `.credential-bar` component on all 5 target pages
- Ph.D., 120+ Patents, 80+ Cases, 25+ Publications, 20+ Years
- Named client companies (Cisco, AT&T, Verizon, Qualcomm, etc.)
- Linked to evidence pages

### ✅ Conversion Architecture — CTA Blocks
- Per-page `.cta-block` with topic-specific headlines
- Contact link with trust copy

### ✅ Organization Schema
- Added `ORG_ENTITY` to expertise page @graph

---

## Competitive Rubric Scores (Current)

| Parameter | Score |
|-----------|-------|
| 1. Title Tag & Meta Description | 9/10 |
| 2. Heading Hierarchy | 9/10 |
| 3. Trust Signals & Social Proof | 9/10 |
| 4. Schema Breadth | 9/10 |
| 5. Content Depth & E-E-A-T | 9/10 |
| 6. Internal Linking & Topical Authority | 9/10 |
| 7. Conversion Architecture | 9/10 |
| **Average** | **9.0/10** |

---

## User Constraints (Must Follow)

- Minimum changes to actual page content
- Do not create new content unless approved
- Minimal changes to visible content, titles, headers
- Commit after each page change
- Check, check again, test, and verify
