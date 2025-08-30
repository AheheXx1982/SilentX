import react from '@astrojs/react';
import { siteConfig } from './src/constants/site-config';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';
import svgr from 'vite-plugin-svgr';
import umami from '@yeskunall/astro-umami';
import tailwindcss from '@tailwindcss/vite';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
  site: siteConfig.site,
  markdown: {
    // Enable GitHub Flavored Markdown
    gfm: true,
    // Configure rehype plugins for automatic heading IDs and anchor links
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: {
            className: ['anchor-link'],
          },
        },
      ],
    ],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
  integrations: [
    react(),
    icon({
      include: {
        gg: ['*'],
        'fa6-regular': ['*'],
        'fa6-solid': ['*'],
        ri: ['*'],
      },
    }),
    umami({
      id: '45cd2ace-8fe8-4d16-bbf2-3ecb3fb96a3d',
      endpointUrl: 'https://silentxx.com',
      hostUrl: 'https://silentxx.com',
    }),
  ],
  devToolbar: {
    enabled: true,
  },
  vite: {
    plugins: [svgr(), tailwindcss()],
  },
  trailingSlash: 'never',
});
