<script setup lang="ts">
const props = defineProps<{
  bg: string;
  text: string;
  label?: string;
}>();

const label = computed(() => props.label || props.bg.split('-').slice(1).join(' '));
</script>

<template>
  <div
    class="p-2 capitalize"
    :class="[bg, text]"
    role="status"
    :aria-label="label"
  >
    {{ label }}
  </div>
</template>
