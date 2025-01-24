<script setup lang="ts">
definePageMeta({
  layout: false,
});

const scheme = useThemeScheme(useRoute().params.scheme);

if (scheme === undefined) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Not Found',
  });
}

await navigateTo({
  name: 'theme-scheme-primary',
  params: {
    scheme,
    primary: hctToURL(),
  },
}, {
  redirectCode: 302,
});
</script>

<template>
  <div />
</template>
