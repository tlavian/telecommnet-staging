---
paths:
  - "**/*"
---

# Git & Build Rules

- Always run `rm -f .git/index.lock` before any git operation (stale locks from timeouts)
- Use 5-minute timeout (300000ms) for builds and commits — the git index is ~1.1MB
- Build in `/sessions/vigilant-clever-pasteur/telecommnet-build/`, NEVER in the git directory (esbuild SIGSEGV)
- Build command: `rsync -a --exclude='public/files/' --exclude='node_modules/' --exclude='.git/' mnt/Claude/telecommnet-git/ telecommnet-build/ && cd telecommnet-build && npm install --silent && npx astro build`
- Commit after each page change for incremental deployment
- Push triggers auto-deploy to telecommnet.pages.dev via Cloudflare Pages
