<template>
  <NuxtLayout name="themeless">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { themeColor } = useTheme();

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
});
</script>
