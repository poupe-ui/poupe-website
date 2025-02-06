<script setup lang="ts">
defineProps<{
  title?: string
}>();
</script>

<template>
  <p-card
    shadow="lg"
    surface="bright"
  >
    <template #header>
      <div class="flex justify-between items-center m-2 p-2">
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
    </template>

    <slot />
  </p-card>
</template>
