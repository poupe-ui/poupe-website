<template>
  <ul class="text-mono">
    <li>scheme: {{ scheme }}</li>
    <li>primary: {{ hexPrimary }} (H:{{ primary.hue.toFixed(2) }} C:{{ primary.chroma.toFixed(2) }} T:{{ primary.tone.toFixed(2) }})</li>
  </ul>
</template>

<script setup lang="ts">
import {
  type HCT,
  type StandardDynamicSchemeKey,
} from '@poupe/theme-builder';

const $props = defineProps<{
  modelValue: HCT;
  scheme: StandardDynamicSchemeKey;
}>();

const primary = computed(() => $props.modelValue);
const hexPrimary = computed(() => hexFromHCT(primary.value));
</script>
