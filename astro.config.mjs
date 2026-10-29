// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// For GitHub Pages, the deploy workflow sets SITE_URL and BASE_PATH
// (project sites live under /<repo>; a user/custom-domain site uses "/").
export default defineConfig({
  site: process.env.SITE_URL ?? 'http://localhost:4321',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
