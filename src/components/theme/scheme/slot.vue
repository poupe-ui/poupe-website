<script setup lang="ts">
defineProps<{
  bg: string;
  text: string;
  label?: string;
}>();
</script>

<template>
  <div :class="`p-2 ${bg} ${text}`">
    <span class="capitalize">
      <span v-if="label">{{ label }}</span>
      <span v-else>
        {{ bg.split('-').slice(1).join(' ') }}
      </span>
    </span>
  </div>
</template>
