import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://telecommnet.com',
  integrations: [
    sitemap(),
  ],
  output: 'static',
  trailingSlash: 'always',
});
