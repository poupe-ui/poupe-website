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
const scheme = useThemeScheme($route.params.scheme) || 'content';
const primary = useHCTColor($route.params.primary) || useRandomColor();
const themeColor = hexFromHCT(primary);
const themeURL = computed(() => `/api/tailwindcss/${scheme}/${themeColor.slice(1)}`);

const { darkMode } = useTheme();

useHead({
  title: `${scheme}:${themeColor} — @poupe/theme-builder`,
  link: [{
    id: 'poupe-theme-link',
    rel: 'stylesheet',
    href: themeURL,
    tagPriority: 20,
  }],
  meta: [{
    name: 'theme-color',
    content: themeColor,
  }],
  bodyAttrs: {
    class: 'bg-surface text-on-surface',
  },
  htmlAttrs: {
    class: darkMode.value ? 'dark' : '',
  },
});
</script>
