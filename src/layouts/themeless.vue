<script setup lang="ts">
const { darkMode } = useTheme();

useHead({
  bodyAttrs: {
    class: 'bg-surface text-on-surface',
  },
  htmlAttrs: {
    class: {
      dark: () => darkMode.value,
    },
  },
});
</script>

<template>
  <NuxtPage />
</template>
