import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://telecommnet.com',
  integrations: [
    sitemap({
      filter: (page) =>
        // Exclude noindex pages (privacy/terms have robots="noindex, follow")
        !page.includes('/privacy-policy/') &&
        !page.includes('/terms-and-conditions/') &&
        // Exclude individual patent pages — discoverable via /patents/ hub
        !page.match(/\/\d{6,}-/) &&
        !page.match(/\/\d{8}-/) &&
        // Exclude individual case/publication stubs and taxonomy pages
        !page.includes('/category/') &&
        // Exclude legacy patent slug patterns (ep-, ca- prefixed)
        !page.match(/\/ep-/) &&
        !page.match(/\/ca-/) &&
        // Exclude misc one-off pages that aren't core
        !page.includes('/frequency-synthesizer-'),
    }),
  ],
  output: 'static',
  trailingSlash: 'always',
  redirects: {
    '/case/': '/cases-expert-witness-testimony/',
  },
});
