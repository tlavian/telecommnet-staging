import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://telecommnet.com',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/privacy-policy/') &&
        !page.includes('/terms-and-conditions/'),
    }),
  ],
  output: 'static',
  trailingSlash: 'always',
  redirects: {
    '/case/': '/cases-expert-witness-testimony/',
  },
});
