<script setup lang="ts">
await navigateTo({
  name: 'color-primary',
  params: {
    primary: colorToURL(), // random
  },
}, {
  redirectCode: 302,
});
</script>

<template>
  <div />
</template>
