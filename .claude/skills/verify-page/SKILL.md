---
name: verify-page
description: Compare a staging page against production telecommnet.com to verify they match
user-invocable: true
---

# Verify Page Against Production

Compare the staging Astro page against its production counterpart on telecommnet.com.

## Arguments
- `$ARGUMENTS` — The page path to verify (e.g., `/about-dr-lavian/` or `about-dr-lavian`)

## Steps

1. **Read the staging source file:**
   - Determine the `.astro` file path from the page slug
   - Read the file and extract: H1, H2s, all text content, internal links, image paths, meta title, meta description

2. **View the production page:**
   - Use Claude in Chrome to navigate to `https://telecommnet.com/{slug}/`
   - Use `get_page_text` to extract the full text content
   - Use `read_page` to extract heading structure and links

3. **Compare:**
   - Heading hierarchy (H1, H2, H3) must match exactly
   - Body text content must match (allow minor formatting differences)
   - All internal links must point to correct destinations
   - All images must use local paths (`/wp-content/uploads/...`), not production URLs
   - Meta title and description should match production intent

4. **Report:**
   - List any discrepancies found
   - Suggest fixes for each discrepancy
   - If page matches: confirm "Page verified — matches production"
