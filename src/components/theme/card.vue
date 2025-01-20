<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>

<template>
  <div class="surface-bright md:m-2 p-2 md:rounded md:shadow-shadow md:shadow-md">
    <div class="flex justify-between items-center">
      <slot name="title">
        <h1
          v-if="title"
          class="text-2xl font-bold"
        >
          {{ title }}
        </h1>
      </slot>
      <toggle-dark class="ms-2" />
    </div>

    <slot />
  </div>
</template>
