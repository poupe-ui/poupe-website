<script setup lang="ts">
const here = useRoute().path;
const scheme = 'content';
const hex = useRandomHexColor();

await navigateTo(joinURL(here, scheme, hex.slice(1)));
</script>

<template>
  <div />
</template>
