<script setup lang="ts">
type Cell = ThemeSchemeSlot & { class?: string };

const data: Array<Array<Cell | Array<Cell>>> = [
  [
    { bg: 'bg-primary', text: 'text-on-primary' },
    { bg: 'bg-on-primary', text: 'text-primary' },
    { bg: 'bg-primary-container', text: 'text-on-primary-container', class: 'mt-1' },
    { bg: 'bg-on-primary-container', text: 'text-primary-container' },
    [
      { bg: 'bg-primary-fixed', text: 'text-on-primary-fixed' },
      { bg: 'bg-primary-fixed-dim', text: 'text-on-primary-fixed' },
    ],
    { bg: 'bg-on-primary-fixed', text: 'text-primary-fixed' },
    { bg: 'bg-on-primary-fixed-variant', text: 'text-primary-fixed' },
  ], [
    { bg: 'bg-secondary', text: 'text-on-secondary' },
    { bg: 'bg-on-secondary', text: 'text-secondary' },
    { bg: 'bg-secondary-container', text: 'text-on-secondary-container', class: 'mt-1' },
    { bg: 'bg-on-secondary-container', text: 'text-secondary-container' },
    [
      { bg: 'bg-secondary-fixed', text: 'text-on-secondary-fixed' },
      { bg: 'bg-secondary-fixed-dim', text: 'text-on-secondary-fixed' },
    ],
    { bg: 'bg-on-secondary-fixed', text: 'text-secondary-fixed' },
    { bg: 'bg-on-secondary-fixed-variant', text: 'text-secondary-fixed' },
  ], [
    { bg: 'bg-tertiary', text: 'text-on-tertiary' },
    { bg: 'bg-on-tertiary', text: 'text-tertiary' },
    { bg: 'bg-tertiary-container', text: 'text-on-tertiary-container', class: 'mt-1' },
    { bg: 'bg-on-tertiary-container', text: 'text-tertiary-container' },
    [
      { bg: 'bg-tertiary-fixed', text: 'text-on-tertiary-fixed' },
      { bg: 'bg-tertiary-fixed-dim', text: 'text-on-tertiary-fixed' },
    ],
    { bg: 'bg-on-tertiary-fixed', text: 'text-tertiary-fixed' },
    { bg: 'bg-on-tertiary-fixed-variant', text: 'text-tertiary-fixed' },
  ],
];
</script>

<template>
  <div
    class="grid grid-cols-3 gap-1"
    role="group"
    aria-label="Main Colors"
  >
    <div
      v-for="(d, i) in data"
      :key="i"
    >
      <div class="flex flex-col">
        <div
          v-for="v in d"
          :key="v.bg"
        >
          <div
            v-if="Array.isArray(v)"
            class="flex flex-row justify-between mt-2"
          >
            <theme-scheme-slot
              v-for="vv in v"
              :key="vv.bg"
              v-bind="vv"
            />
          </div>
          <theme-scheme-slot
            v-else
            v-bind="v"
          />
        </div>
      </div>
    </div>
  </div>
</template>
