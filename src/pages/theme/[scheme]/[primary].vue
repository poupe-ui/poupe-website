<template>
  <theme-card
    v-model="primary"
    :scheme="scheme"
  />
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,

  validate: (route): boolean => {
    return isValidRouteParam('primary', isHexValue, route) && isValidRouteParam('scheme', isThemeSchemeKey, route);
  },
});

const $route = useRoute();
const scheme = useThemeScheme($route.params.scheme) || 'vibrant';
const primary = useHCTColor($route.params.primary) || useRandomColor();
const hexPrimary = hexFromHCT(primary);

const { darkMode } = useUserSettings();

useHead({
  title: `${scheme}:${hexPrimary} — @poupe/theme-builder`,
  link: [{
    id: 'poupe-theme-link',
    rel: 'stylesheet',
    href: `/api/tailwindcss/${scheme}/${hexPrimary.slice(1)}`,
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
