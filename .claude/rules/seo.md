---
paths:
  - "src/pages/**/*.astro"
  - "src/components/**/*.astro"
  - "src/layouts/**/*.astro"
---

# SEO & Page Quality Rules

- Every page must have a unique title (50-60 chars) with primary keyword and meta description (150-160 chars)
- All images must use LOCAL paths (`/wp-content/uploads/...`), NEVER production URLs (`https://telecommnet.com/wp-content/...`)
- Schema markup must use `buildSchema()` from `src/lib/schemas.ts` — never inline JSON-LD
- Internal links must use trailing slashes (`/about-dr-lavian/` not `/about-dr-lavian`)
- Verify the page matches its production counterpart before committing
- Expertise sub-pages (under `/communications-expert-witness/`) use `content-full` layout, NOT sidebar
- Pages with sidebar use `content-with-sidebar` layout with the shared `Sidebar.astro` component
