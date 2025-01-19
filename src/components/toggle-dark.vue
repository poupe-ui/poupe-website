<script setup lang="ts">
const sun = 'heroicons:sun-solid';
const moon = 'heroicons:moon-solid';

const { darkMode } = useTheme();
</script>

<template>
  <div>
    <client-only>
      <template #fallback>
        <div class="size-4" />
      </template>

      <reka-toggle
        v-model="darkMode"
        class="cursor-pointer size-4"
        as-child
      >
        <icon
          :name="darkMode ? sun : moon"
        />
      </reka-toggle>
    </client-only>
  </div>
</template>
