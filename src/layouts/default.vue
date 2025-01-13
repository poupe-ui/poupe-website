<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const primary = '#caae88';

useHead({
  link: [{
    id: 'poupe-theme-link',
    rel: 'stylesheet',
    href: `/api/tailwindcss/content/${primary.slice(1)}`,
    tagPriority: 0,
  }],
  meta: [{
    name: 'theme-color',
    content: primary,
  }],
  bodyAttrs: {
    class: 'bg-surface text-on-surface',
  },
});
</script>
