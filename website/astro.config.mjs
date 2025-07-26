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
                  { label: 'View on Github', slug: 'guides/getting-started/repo-struct' },
                  { label: 'Initial Setup', slug: 'guides/getting-started/server-setup'},
              ],
          },
          {
              label: 'Access your Server',
              collapsed: true,
              items: [
                  { label: 'Using Twingate', slug: 'guides/access-server/twingate'},
              ]
          },
          {
              label: 'Manage Containers',
              collapsed: true,
              items: [
                  { label: 'Docker Setup', slug: 'guides/container-management/docker'},
                  { label: 'Portainer Setup', slug: 'guides/container-management/portainer'},
              ]
          },
          {
              label: 'Network Stuff',
              collapsed: true,
              items: [
                  { label: 'Nginx', slug: 'guides/network/nginx'},
              ]
          },
          {
              label: 'Landing Page',
              collapsed: true,
              items: [
                  { label: 'Pre-Made Dashboard', slug: 'guides/landing-page/pre-made' },
                  { label: 'Custom Dashboard', slug: 'guides/landing-page/custom'},
              ]
          },
          {
              label: "Media Server",
              collapsed: true,
              items: [
                  {label: "Jellyfin", slug: "guides/media-server/jellyfin"},
                  {label: " Plex", slug: "guides/media-server/plex"},
              ]
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