<script setup lang="ts">
type Cell = ThemeSchemeSlot & { class?: string };
const data: Array<Cell> = [
  { bg: 'bg-error', text: 'text-on-error', class: 'flex-1' },
  { bg: 'bg-on-error', text: 'text-error' },
  { bg: 'bg-error-container', text: 'text-on-error-container', class: 'mt-1 flex-1' },
  { bg: 'bg-on-error-container', text: 'text-error-container' },
];
</script>

<template>
  <div
    role="group"
    aria-label="Error Colors"
  >
    <theme-scheme-slot
      v-for="v in data"
      :key="v.bg"
      :class="v.class"
      v-bind="v"
    />
  </div>
</template>
