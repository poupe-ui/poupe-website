<script setup lang="ts">
const inverse: Array<ThemeSchemeSlot> = [
  { bg: 'bg-inverse-surface', text: 'text-on-inverse-surface' },
  { bg: 'bg-on-inverse-surface', text: 'text-inverse-surface' },
  { bg: 'bg-inverse-primary', text: 'text-primary' },
];
</script>

<template>
  <div class="flex flex-col justify-between">
    <div>
      <theme-scheme-slot
        v-for="v in inverse"
        :key="v.bg"
        v-bind="v"
      />
    </div>
    <div class="flex flex-row justify-between mt-1">
      <theme-scheme-slot
        bg="bg-scrim"
        text="text-primary-50"
      />
      <theme-scheme-slot
        bg="bg-shadow"
        text="text-primary-50"
      />
    </div>
  </div>
</template>
