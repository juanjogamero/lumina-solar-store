import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

const onPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: onPages ? 'https://juanjogamero.github.io' : 'https://unespacio.es',
  base: onPages ? '/unespacio-site/' : '/',
  integrations: [react(), tailwind(), mdx()],
});
