---
name: seo-check
description: Run comprehensive SEO check on a telecommnet.com page using GSC, schema validation, and content analysis
user-invocable: true
---

# SEO Check for TelecommNet Page

Run a comprehensive SEO analysis on a specific page.

## Arguments
- `$ARGUMENTS` — The page URL or path to check (e.g., `/about-dr-lavian/` or `https://telecommnet.com/about-dr-lavian/`)

## Steps

1. **Check GSC indexing status:**
   - Use `mcp__gscServer__inspect_url_enhanced` to check if the page is indexed
   - Report: indexed/not indexed, last crawl date, any issues

2. **Validate schema markup:**
   - Read the page's `.astro` source file
   - Verify it imports and uses `buildSchema()` from `src/lib/schemas.ts`
   - Check that schema includes appropriate types (Person, Service, FAQPage, BreadcrumbList)
   - Verify all URLs in schema use `https://telecommnet.com` base

3. **Check meta tags:**
   - Title: 50-60 chars, contains primary keyword
   - Meta description: 150-160 chars, compelling and unique
   - Canonical URL: set to `https://telecommnet.com/{slug}/`
   - Open Graph and Twitter Card tags present

4. **Content quality:**
   - Verify H1 is unique and contains target keyword
   - Check heading hierarchy (H1 > H2 > H3, no skipped levels)
   - Verify images have alt text and use local paths
   - Check for thin content (minimum 500 words for service pages)

5. **Link validation:**
   - Extract all internal links from the page
   - Verify each points to a valid staging page
   - Check external links are not broken

6. **Report:**
   - Summary score (issues found / checks passed)
   - List each issue with severity (critical/warning/info)
   - Suggest specific fixes
