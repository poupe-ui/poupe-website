<template>
  <theme-color-card v-model="primary" />
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,

  validate: (route): boolean => isValidRouteParam('primary', isHexValue, route),
});

const primary = useHCTColor(useRoute().params.primary) || useRandomColor();
const themeColor = hexFromHCT(primary);
const themeURL = computed(() => `/api/tailwindcss/content/${themeColor.slice(1)}`);
const { darkMode } = useTheme();

useHead({
  title: `${themeColor} — @poupe/theme-builder`,
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
