<script setup lang="ts">
await navigateTo({
  name: 'theme-scheme-primary',
  params: {
    scheme: 'content',
    primary: colorToURL(), // random
  },
}, {
  redirectCode: 302,
});
</script>

<template>
  <div />
</template>
