<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const { darkMode, themeColor } = useTheme();
const themeURL = computed(() => `/api/tailwindcss/content/${themeColor.value.slice(1)}`);

useHead({
  link: [{
    id: 'poupe-theme-link',
    rel: 'stylesheet',
    href: themeURL,
    tagPriority: 0,
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
