<script setup lang="ts">
await navigateTo({
  name: 'color-primary',
  params: {
    primary: hctToURL(),
  },
}, {
  redirectCode: 302,
});
</script>

<template>
  <div />
</template>
