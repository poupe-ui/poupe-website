<script setup lang="ts">
const props = defineProps<{
  ariaLabel?: string
}>();

const ariaLabel = computed(() => props.ariaLabel || 'Theme Colors');
</script>

<template>
  <div
    class="text-xs max-w-2xl grid grid-cols-4 gap-2"
    role="region"
    :aria-label="ariaLabel"
  >
    <theme-scheme-colors class="col-span-3" />
    <theme-scheme-error class="self-start" />
    <theme-scheme-neutral class="col-span-3" />
    <theme-scheme-extra class="self-start" />
  </div>
</template>
