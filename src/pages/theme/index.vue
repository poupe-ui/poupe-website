<script setup lang="ts">
await navigateTo({
  name: 'theme-scheme-primary',
  params: {
    scheme: 'content',
    primary: hctToURL(),
  },
}, {
  redirectCode: 302,
});
</script>

<template>
  <div />
</template>
