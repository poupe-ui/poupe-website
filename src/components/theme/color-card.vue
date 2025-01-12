<template>
  <div class="m-2 p-2 rounded border border-primary shadow-xl bg-primary-container text-on-primary-container">
    <h1 class="p-2 text-2xl font-bold">
      Hello, {{ hexColor }}
      <span
        :style="`color:${hexColor}`"
      >🮆</span>
      !
    </h1>
    <div class="flex">
      <div
        class="grid p-2 shadow-md shadow-shadow"
        :style="`background-color:${hexColor}`"
      >
        <div
          v-for="(hexShade, shade) in shades"
          :key="shade"
        >
          <span
            v-if="shade !== 'DEFAULT'"
            class="inline-block h-10 w-20 text-center align-middle"
            :style="`background-color:${hexShade}`"
          >{{ shade }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withShades } from '@poupe/theme-builder/tailwind';

const $props = defineProps({
  modelValue: Hct,
});

const hexColor = computed(() => hexFromHct($props.modelValue));

const shades = computed(() => withShades($props.modelValue));
</script>
