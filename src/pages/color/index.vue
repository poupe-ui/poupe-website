<script setup lang="ts">
import { trimPath } from '~/server/utils/path';

const hex = useRandomHexColor();
const path = trimPath(useRoute().path);
await navigateTo(`${path}/${hex.slice(1)}`);
</script>

<template>
  <div />
</template>
