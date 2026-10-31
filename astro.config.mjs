import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://vpnvalget.com',
  // Served URLs end with a trailing slash (dist is directory-style:
  // /no/guide/index.html). 'always' keeps sitemap <loc> entries on the
  // final 200 URL instead of a 301 (no-slash -> slash).
  trailingSlash: 'always',
  integrations: [
    tailwind(),
    sitemap({
      // lastmod = build date for every URL (per-URL dates are not tracked).
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'no',
        locales: {
          no: 'nb-NO',
          se: 'sv-SE',
          dk: 'da-DK',
          de: 'de-DE',
        },
      },
      // /go/ = affiliate redirects (noindex, nofollow) and /se, /dk, /de =
      // noindex "coming soon" stubs until real localized content exists.
      // A page that is noindex must not be listed in the sitemap.
      // NOTE: page URLs carry a trailing slash (trailingSlash: 'always').
      filter: (page) =>
        !page.includes('/go/') &&
        !page.endsWith('/se/') &&
        !page.endsWith('/dk/') &&
        !page.endsWith('/de/'),
    }),
  ],
});
