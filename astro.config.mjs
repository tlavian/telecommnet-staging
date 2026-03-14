import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ── 27 core pages that belong in the sitemap ──
// All other pages (patents, cases, publications, categories) are
// discoverable via their hub pages and should NOT be in the sitemap
// to avoid GSC issues (404s, noindex conflicts, redirect loops).
const CORE_PATHS = new Set([
  '/',
  '/about-dr-lavian/',
  '/communications-expert-witness/',
  '/communications-expert-witness/pstn-voip-cellular-expert/',
  '/communications-expert-witness/network-communications-expert-witness/',
  '/communications-expert-witness/internet-expert-witness/',
  '/communications-expert-witness/voice-over-ip-voip-expert/',
  '/communications-expert-witness/network-security-expert/',
  '/communications-expert-witness/streaming-media-audio-and-video-conferencing-expert/',
  '/communications-expert-witness/computer-networking-expert-witness/',
  '/communications-expert-witness/data-communications-expert/',
  '/communications-expert-witness/mobile-wireless-expert/',
  '/communications-expert-witness/routing-switching-expert/',
  '/communications-expert-witness/network-management-expert-witness/',
  '/communications-expert-witness/networking-expert/',
  '/communications-expert-witness/messaging-and-chat-expert-witness/',
  '/corporate-clients/',
  '/law-firm-clients/',
  '/scientific-publications/',
  '/talks-presentations/',
  '/cases-expert-witness-testimony/',
  '/site-map/',
  '/contact/',
  '/patents/',
  '/publication/',
]);

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
    }),
  ],
  output: 'static',
  trailingSlash: 'always',
  redirects: {
    '/case/': '/cases-expert-witness-testimony/',
    // Redirect legacy WordPress sitemaps to Astro sitemap (fixes GSC 404 errors)
    '/case-sitemap.xml': '/sitemap-index.xml',
    '/post-sitemap.xml': '/sitemap-index.xml',
    '/page-sitemap.xml': '/sitemap-index.xml',
    '/patent-sitemap.xml': '/sitemap-index.xml',
    '/publication-sitemap.xml': '/sitemap-index.xml',
  },
});
