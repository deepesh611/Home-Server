// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import starlightScrollToTop from 'starlight-scroll-to-top';
import react from '@astrojs/react';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
      title: 'Home Server',
      defaultLocale: 'en',
      social: [
          { icon: 'github', label: 'GitHub', href: 'https://github.com/deepesh611/Home-Server' },
      ],
      sidebar: [
          {
              label: 'Home',
              link: '/'
          },
          {
              label: 'About me',
              link: 'https://deepesh-patil.vercel.app/',
              attrs: { target: '_blank'},
          },

          {
              label: 'Getting Started',
              collapsed: true,
              items: [
                  // Each item here is one entry in the navigation menu.
                  { label: 'Example Guide', slug: 'guides/server-setup' },
              ],
          },
          {
              label: 'Reference',
              collapsed: true,
              autogenerate: { directory: 'reference' },
          },
      ],

      logo:{
          src: './public/favicon.svg'
      },
      disable404Route: true,
      plugins: [starlightScrollToTop()],
  }), react(), vue()],

  vite: {
    plugins: [tailwindcss()],
  },
});