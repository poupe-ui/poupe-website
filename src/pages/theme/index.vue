<script setup lang="ts">
const hex = useRandomHexColor();

await navigateTo({
  name: 'theme-scheme-primary',
  params: {
    scheme: 'content',
    primary: hex.slice(1),
  },
}, {
  redirectCode: 302,
});
</script>

<template>
  <div />
</template>
