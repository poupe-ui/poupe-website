<script setup lang="ts">
const here = useRoute().path;
const hex = useRandomHexColor();
await navigateTo(joinURL(here, hex.slice(1)));
</script>

<template>
  <div />
</template>
