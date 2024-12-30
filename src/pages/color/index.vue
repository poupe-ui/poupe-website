<script setup lang="ts">
const hex = useRandomHexColor();
await navigateTo(`${useRoute().path}/${hex.substring(1)}`);
</script>

<template>
  <div />
</template>
