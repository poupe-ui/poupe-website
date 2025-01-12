<template>
  <div>
    <theme-color-card v-model="primary" />
  </div>
</template>

<script setup lang="ts">
function getParamPrimary(): string {
  const p = useRoute().params.primary;
  if (!Array.isArray(p))
    return p;
  else if (p.length > 0)
    return p[0];
  else
    return '';
}

const $primary = getParamPrimary();
const primary = useHctColor($primary);

if (primary === undefined) {
  throw createError({
    statusCode: 404,
    statusMessage: `Unrecognized Color #${$primary}`,
    cause: `params:${useRoute().params}`,
  });
}

const hexPrimary = hexFromHct(primary);

useHead({
  title: `${hexPrimary} — @poupe/theme-builder`,
  meta: [{
    name: 'theme-color',
    content: hexPrimary,
  }],
});
</script>
