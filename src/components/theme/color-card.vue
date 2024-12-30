<template>
  <div class="m-2 p-2 rounded border border-primary shadow-xl bg-primary-container text-on-primary-container">
    <h1 class="p-2 text-2xl font-bold">
      Hello, {{ hexColor }}
      <span
        :style="`color:${hexColor}`"
      >🮆</span>
      !
    </h1>
    <div class="flex flex-col gap-1">
      <div
        v-for="(hexShade, shade) of shades"
        :key="shade"
        class="rounded-md border-[1px] border-primary m-1 p-2 shadow-sm shadow-primary bg-container text-on-container"
      >
        <span class="font-mono">
          {{ shade }}
        </span>
        :
        <span class="font-mono">{{ hexShade }}</span>
        &nbsp;
        <span
          :style="`color:${hexShade}`"
        >🮆</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { makeHexShades } from '@poupe/theme-builder/tailwind';

const $props = defineProps({
  modelValue: Hct,
});

const hexColor = computed(() => hexFromHct($props.modelValue));

const shades = computed(() => makeHexShades($props.modelValue));
</script>
