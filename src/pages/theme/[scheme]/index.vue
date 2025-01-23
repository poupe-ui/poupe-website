<script setup lang="ts">
definePageMeta({
  layout: false,

  validate: (route): boolean => isValidRouteParam('scheme', isThemeSchemeKey, route),
});

const here = useRoute().path;
const hex = useRandomHexColor();

await navigateTo(joinURL(here, hex.slice(1)));
</script>

<template>
  <div />
</template>
