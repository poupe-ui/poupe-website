import { defineNuxtConfig } from 'nuxt/config';

// isProduction = false
const isProduction = process.env.NODE_ENV === 'production';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nitro-cloudflare-dev',
  ],

  devtools: { enabled: !isProduction },

  srcDir: 'src',
  serverDir: 'src/server',
  compatibilityDate: '2024-11-01',

  nitro: {
    preset: 'cloudflare-pages',
  },
});
