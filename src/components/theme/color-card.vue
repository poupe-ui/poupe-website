<template>
  <div class="m-2 p-2 rounded border border-primary shadow-xl bg-primary-container text-on-primary-container">
    <h1 class="p-2 text-2xl font-bold">
      Hello, {{ hexColor }}!
    </h1>
    <div class="flex">
      <div
        role="region"
        aria-label="Color Shades"
        class="grid p-2 shadow-md shadow-shadow"
        :style="`background-color:${hexColor}`"
      >
        <div
          v-for="(hexShade, shade) in shades"
          :key="shade"
        >
          <div
            v-if="shade !== 'DEFAULT'"
            class="grid grid-cols-2"
          >
            <div class="font-mono text-end align-middle p-2">
              {{ shade }}
            </div>
            <div
              class="block h-10 w-20"
              :style="`background-color:${hexShade}`"
              :aria-label="`Color shade ${shade}`"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  type HCT,

  withShades,
} from '@poupe/theme-builder/tailwind';

const $props = defineProps<{
  modelValue: HCT;
}>();

const hexColor = computed(() => hexFromHCT($props.modelValue));

const shades = computed(() => withShades($props.modelValue));
</script>
