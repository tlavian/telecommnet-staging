import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { execSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const PROJECT_ROOT = fileURLToPath(new URL('.', import.meta.url));

// ── 27 core pages that belong in the sitemap ──
// All other pages (patents, cases, publications, categories) are
// discoverable via their hub pages and should NOT be in the sitemap
// to avoid GSC issues (404s, noindex conflicts, redirect loops).
const CORE_PATHS = new Set([
  '/',
  '/about-dr-lavian/',
  '/communications-expert-witness/',
  '/communications-expert-witness/telecommunications-expert-witness/',
  '/communications-expert-witness/pstn-voip-cellular-expert-witness/',
  '/communications-expert-witness/network-communications-expert-witness/',
  '/communications-expert-witness/internet-expert-witness/',
  '/communications-expert-witness/voice-over-ip-voip-expert/',
  '/communications-expert-witness/network-security-expert-witness/',
  '/communications-expert-witness/streaming-media-expert-witness/',
  '/communications-expert-witness/computer-networking-expert-witness/',
  '/communications-expert-witness/data-communications-expert-witness/',
  '/communications-expert-witness/mobile-wireless-expert-witness/',
  '/communications-expert-witness/routing-switching-expert-witness/',
  '/communications-expert-witness/network-management-expert-witness/',
  '/communications-expert-witness/networking-expert-witness/',
  '/communications-expert-witness/messaging-and-chat-expert-witness/',
  '/corporate-clients/',
  '/law-firm-clients/',
  '/scientific-publications/',
  '/talks-presentations/',
  '/cases-expert-witness-testimony/',
  '/site-map/',
  '/contact/',
  '/patents/',
  '/privacy-policy/',
  '/terms-and-conditions/',
]);

// ── Sitemap <lastmod> from git history ──
// lastmod = committer date of the last commit that touched the page's source file
// (src/pages/<pathname>/index.astro; "/" -> src/pages/index.astro). The date is read
// from git at build time. If git is unavailable, the clone is shallow (a shallow clone
// would report the same truncated date for every file), or git has no commit for the
// file, lastmod is simply left unset. Build time is never used as a fallback.
let gitLastmodUsable = null;
function gitHistoryUsable() {
  if (gitLastmodUsable !== null) return gitLastmodUsable;
  try {
    const shallow = execSync('git rev-parse --is-shallow-repository', {
      cwd: PROJECT_ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    gitLastmodUsable = shallow === 'false';
    if (!gitLastmodUsable) {
      console.warn('[sitemap] shallow git clone detected; <lastmod> will be omitted.');
    }
  } catch {
    console.warn('[sitemap] git not available; <lastmod> will be omitted.');
    gitLastmodUsable = false;
  }
  return gitLastmodUsable;
}

function sourceFileForPath(pathname) {
  const rel = pathname.replace(/^\/+/, '');
  const candidates = [
    path.join('src', 'pages', rel, 'index.astro'),
    path.join('src', 'pages', rel.replace(/\/+$/, '') + '.astro'),
  ];
  return candidates.find((c) => existsSync(path.join(PROJECT_ROOT, c)));
}

// Fallback when the build has no usable git history (Cloudflare Pages builds from a shallow
// clone): src/data/lastmod.json, generated locally from full git history by `npm run lastmod`.
let lastmodFile = null;
function fileLastmod(pathname) {
  try {
    if (lastmodFile === null) {
      const p = path.join(PROJECT_ROOT, 'src', 'data', 'lastmod.json');
      lastmodFile = existsSync(p) ? JSON.parse(readFileSync(p, 'utf8')) : {};
    }
    const v = lastmodFile[pathname];
    return typeof v === 'string' && /^\d{4}-\d{2}-\d{2}T/.test(v) ? v : undefined;
  } catch {
    return undefined;
  }
}

function gitLastmod(pathname) {
  try {
    if (!gitHistoryUsable()) return undefined;
    const file = sourceFileForPath(pathname);
    if (!file) return undefined;
    const out = execSync(`git log -1 --format=%cI -- "${file}"`, {
      cwd: PROJECT_ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    // %cI is strict ISO 8601; reject anything else rather than emit a bad date.
    if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:[+-]\d{2}:\d{2}|Z)$/.test(out)) return undefined;
    return out;
  } catch {
    return undefined;
  }
}

export default defineConfig({
  site: 'https://telecommnet.com',
  integrations: [
    sitemap({
      filter: (page) => {
        // Extract pathname from full URL
        try {
          const url = new URL(page);
          return CORE_PATHS.has(url.pathname);
        } catch {
          return false;
        }
      },
      serialize: (item) => {
        try {
          const pathname = new URL(item.url).pathname;
          const lastmod = gitLastmod(pathname) || fileLastmod(pathname);
          if (lastmod) item.lastmod = lastmod;
        } catch {
          // leave lastmod unset
        }
        return item;
      },
    }),
  ],
  output: 'static',
  trailingSlash: 'always',
  redirects: {
    '/case/': '/cases-expert-witness-testimony/',
    '/publication/': '/scientific-publications/',
  },
});
