<template>
  <ul class="text-mono">
    <li>scheme: {{ scheme }}</li>
    <li>primary: {{ hexPrimary }} (H:{{ primary.hue.toFixed(2) }} C:{{ primary.chroma.toFixed(2) }} T:{{ primary.tone.toFixed(2) }})</li>
  </ul>
</template>

<script setup lang="ts">
const $props = defineProps<{
  modelValue: typeof Hct;
  scheme: StandardDynamicSchemeKey;
}>();

const primary = computed<Hct>(() => $props.modelValue);
const hexPrimary = computed<HexColor>(() => hexFromHct(primary.value));
</script>
