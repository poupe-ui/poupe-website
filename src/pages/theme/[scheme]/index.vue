<script setup lang="ts">
definePageMeta({
  layout: false,

  validate: (route): boolean => isValidRouteParam('scheme', isThemeSchemeKey, route),
});

const hex = useRandomHexColor();

await navigateTo({
  name: 'theme-scheme-primary',
  params: {
    scheme: useRoute().params.scheme,
    primary: hex.slice(1),
  },
}, {
  redirectCode: 302,
});
</script>

<template>
  <div />
</template>
