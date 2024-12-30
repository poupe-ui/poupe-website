<template>
  <div>
    <theme-color-card v-model="primary" />
  </div>
</template>

<script setup lang="ts">
const $primary = useRoute().params.primary;
let primary: Hct;

try {
  primary = useHctColor($primary);
} catch(error) {
  throw createError({
    statusCode: 404,
    statusMessage: `Unrecognized Color ${$primary}`,
    cause: error,
  });
}

const hexPrimary = hexFromHct(primary);

useHead({
  title: `${hexPrimary} — @poupe/theme-builder` ,
  meta: [{
    name: 'theme-color',
    content: hexPrimary,
  }],
})
</script>
