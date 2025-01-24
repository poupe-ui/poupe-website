<script setup lang="ts">
const hex = useRandomHexColor();
await navigateTo({
  name: 'color-primary',
  params: {
    primary: hex.slice(1),
  },
}, {
  redirectCode: 302,
});
</script>

<template>
  <div />
</template>
