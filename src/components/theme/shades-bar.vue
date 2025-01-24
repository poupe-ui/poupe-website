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
        v-if="shade !== 'DEFAULT'"
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
  withHexShades,
} from '@poupe/theme-builder/tailwind';

const props = defineProps<{
  modelValue: Hct;
}>();
const hexColor = computed(() => hexFromHct(props.modelValue));
const shades = computed(() => withHexShades(props.modelValue));
</script>
