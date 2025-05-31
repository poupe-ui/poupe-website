<script setup lang="ts">
const { darkMode } = useTheme();

useHead({
  bodyAttrs: {
    class: 'surface',
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
