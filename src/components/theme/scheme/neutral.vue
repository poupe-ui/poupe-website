<script setup lang="ts">
const data: Array<Array<ThemeSchemeSlot>> = [
  [
    { bg: 'bg-surface-dim', text: 'text-on-surface-dim' },
    { bg: 'bg-surface', text: 'text-on-surface' },
    { bg: 'bg-surface-bright', text: 'text-on-surface-bright' },
  ], [
    { bg: 'bg-surface-container-lowest', text: 'text-on-surface-container-lowest' },
    { bg: 'bg-surface-container-low', text: 'text-on-surface-container-low' },
    { bg: 'bg-surface-container', text: 'text-on-surface-container' },
    { bg: 'bg-surface-container-high', text: 'text-on-surface-container-high' },
    { bg: 'bg-surface-container-highest', text: 'text-on-surface-container-highest' },
  ], [
    { bg: 'bg-on-surface', text: 'text-surface' },
    { bg: 'bg-on-surface-variant', text: 'text-surface' },
    { bg: 'bg-outline', text: 'text-surface' },
    { bg: 'bg-outline-variant', text: 'text-on-surface' },
  ],
];

const colsClass: Array<string> = [
  'grid-cols-3',
  'grid-cols-5',
  'grid-cols-4',
];
</script>

<template>
  <div class="flex flex-col">
    <div
      v-for="(d, i) in data"
      :key="i"
    >
      <div :class="`grid ${colsClass[i]}`">
        <theme-scheme-slot
          v-for="v in d"
          :key="v.bg"
          v-bind="v"
        />
      </div>
    </div>
  </div>
</template>
