---
name: build-deploy
description: Build the Astro staging site and deploy via git push to Cloudflare Pages
user-invocable: true
---

# Build and Deploy Staging Site

Build the telecommnet staging site and push to Cloudflare Pages.

## Steps

1. **Prepare build directory:**
   ```bash
   cd /sessions/vigilant-clever-pasteur && \
   rm -rf telecommnet-build && \
   rsync -a --exclude='public/files/' --exclude='node_modules/' --exclude='.git/' \
     mnt/Claude/telecommnet-git/ telecommnet-build/
   ```

2. **Build:**
   ```bash
   cd /sessions/vigilant-clever-pasteur/telecommnet-build && \
   npm install --silent && npx astro build
   ```
   Use a 5-minute timeout (300000ms).

3. **If build succeeds — commit and push:**
   ```bash
   cd /mnt/Claude/telecommnet-git && \
   rm -f .git/index.lock && sleep 2 && \
   git add -A && \
   git -c gc.auto=0 commit -m "build: deploy staging site updates"
   ```
   Then push:
   ```bash
   git push origin main
   ```

4. **If build fails:**
   - Read the error output
   - Fix the issue in the source files
   - Retry from step 1

5. **Verify deployment:**
   - Wait 60 seconds for Cloudflare Pages to deploy
   - Check telecommnet.pages.dev is accessible
