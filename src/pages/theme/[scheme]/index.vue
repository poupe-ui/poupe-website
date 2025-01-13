<script setup lang="ts">
import { trimPath } from '~/server/utils/path';

definePageMeta({
  layout: false,

  validate: (route): boolean => isValidRouteParam('scheme', isThemeSchemeKey, route),
});

const $route = useRoute();
const path = trimPath($route.path);
const hex = useRandomHexColor();

await navigateTo(`${path}/${hex.slice(1)}`);
</script>

<template>
  <div />
</template>
