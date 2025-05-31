<script setup lang="ts">
defineProps<{
  title?: string
}>();
</script>

<template>
  <p-card
    class="m-auto w-full max-w-2xl"
    shadow="z2"
  >
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
  </p-card>
</template>
