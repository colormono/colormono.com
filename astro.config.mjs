import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
// import {imageService} from '@unpic/astro/service';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://colormono.com',
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      // @see: https://ui.shadcn.com/docs/installation/astro
      applyBaseStyles: false,
    }),
    react(),
  ],
  image: {
    // service: imageService(),
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    fallback: {
      es: 'en',
    },
  },
  redirects: {
    '/old': '/new',
    '/blog/[...slug]': '/lab/[...slug]',
    '/cursos/inpr': 'https://colormono.notion.site/INPR-4e1b25ec0e304d219158553b8ca53480',
  },
});
