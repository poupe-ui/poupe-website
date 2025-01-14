<template>
  <theme-color-card v-model="primary" />
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,

  validate: (route): boolean => isValidRouteParam('primary', isHexValue, route),
});

const primary = useHCTColor(useRoute().params.primary) || useRandomColor();
const hexPrimary = hexFromHCT(primary);
const { darkMode } = useUserSettings();

useHead({
  title: `${hexPrimary} — @poupe/theme-builder`,
  link: [{
    id: 'poupe-theme-link',
    rel: 'stylesheet',
    href: `/api/tailwindcss/content/${hexPrimary.slice(1)}`,
    tagPriority: 20,
  }],
  meta: [{
    name: 'theme-color',
    content: hexPrimary,
  }],
  bodyAttrs: {
    class: 'bg-surface text-on-surface',
  },
  htmlAttrs: {
    class: darkMode ? 'dark' : '',
  },
});
</script>
