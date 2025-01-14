<template>
  <div class="flex w-screen justify-center">
    <theme-card :title="`Hello, ${themeColor}`">
      <div class="flex justify-center">
        <theme-shades-bar v-model="primary" />
      </div>
    </theme-card>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'themeless',

  validate: (route): boolean => isValidRouteParam('primary', isHexValue, route),
});

const primary = useHCTColor(useRoute().params.primary) || useRandomColor();
const themeColor = hexFromHCT(primary);
const themeURL = computed(() => `/api/tailwindcss/content/${themeColor.slice(1)}`);

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
});
</script>
