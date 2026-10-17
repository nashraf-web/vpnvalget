import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.vpnvalget.com',
  trailingSlash: 'never',
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'no',
        locales: {
          no: 'nb-NO',
          se: 'sv-SE',
          dk: 'da-DK',
          de: 'de-DE',
        },
      },
      filter: (page) => !page.includes('/go/'),
    }),
  ],
});
