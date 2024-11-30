import { defineNuxtConfig } from 'nuxt/config';

// isProduction = false
const isProduction = process.env.NODE_ENV === 'production';
// autoFix = true
const autoFix = !isProduction
  && process.env.VITE_AUTO_FIX !== 'false'
  && process.env.VITE_AUTO_FIX !== 'no';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  srcDir: 'src',
  serverDir: 'src/server',

  devtools: { enabled: !isProduction },

  modules: [
    '@nuxt/eslint',
  ],

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
