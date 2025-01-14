<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>

<template>
  <div class="m-2 p-2 rounded border-primary border shadow-shadow shadow-md bg-primary-container text-on-primary-container">
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
