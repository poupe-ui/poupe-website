<template>
  <div
    class="flex"
    role="region"
    :aria-label="`${hexColor} Color Shades`"
  >
    <div
      v-for="(hexShade, shade) in shades"
      :key="shade"
    >
      <div
        class="h-10 w-10"
        :style="`background-color:${hexShade}`"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  type Hct,

  hexFromHct,
} from '@poupe/theme-builder/core';

import {
  type Shades,
  makeHexShades,
} from '@poupe/tailwindcss/theme';

const props = defineProps<{
  modelValue: Hct
}>();

const hexColor = computed<string>(() => hexFromHct(props.modelValue));
const shades = computed<Shades>(() => makeHexShades(props.modelValue));
</script>
