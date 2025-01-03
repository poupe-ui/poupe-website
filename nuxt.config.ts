import { defineNuxtConfig } from 'nuxt/config';

// isProduction = false
const isProduction = process.env.NODE_ENV === 'production';
// autoFix = true
const autoFix = !isProduction
  && process.env.VITE_AUTO_FIX !== 'false'
  && process.env.VITE_AUTO_FIX !== 'no';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    'nitro-cloudflare-dev',
    'nuxt-svgo',
  ],

  devtools: { enabled: !isProduction },

  srcDir: 'src',
  serverDir: 'src/server',
  compatibilityDate: '2024-11-01',

  nitro: {
    preset: 'cloudflare-pages',
  },

  eslint: {
    checker: {
      lintOnStart: autoFix,
      fix: autoFix,
    },
    config: {
      stylistic: {
        semi: true,
      },
    },
  },
});
