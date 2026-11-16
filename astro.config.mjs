import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const isPages = process.env.GITHUB_ACTIONS === 'true';
export default defineConfig({
  site: isPages ? 'https://juanjogamero.github.io' : 'https://unespacio.es',
  base: isPages ? '/unespacio-site/' : '/',
  integrations: [react(),tailwind(),mdx(),sitemap()],
});
