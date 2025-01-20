<script setup lang="ts">
const data: Array<ThemeSchemeSlot & { class?: string }> = [
  { bg: 'bg-error', text: 'text-on-error', class: 'flex-1' },
  { bg: 'bg-on-error', text: 'text-error' },
  { bg: 'bg-error-container', text: 'text-on-error-container', class: 'mt-1 flex-1' },
  { bg: 'bg-on-error-container', text: 'text-error-container' },
];
</script>

<template>
  <div>
    <theme-scheme-slot
      v-for="v in data"
      :key="v.bg"
      :class="v.class"
      v-bind="v"
    />
  </div>
</template>
