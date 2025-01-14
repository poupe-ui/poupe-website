<script setup lang="ts">
import { trimPath } from '~/server/utils/path';

const path = trimPath(useRoute().path);
const scheme = 'content';
const hex = useRandomHexColor();

await navigateTo(`${path}/${scheme}/${hex.slice(1)}`);
</script>

<template>
  <div />
</template>
