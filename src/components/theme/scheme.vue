<script setup lang="ts">
const props = defineProps<{
  ariaLabel?: string;
}>();

const ariaLabel = computed(() => props.ariaLabel || 'Theme Colors');
</script>

<template>
  <div
    class="text-xs max-w-2xl"
    role="region"
    :aria-label="ariaLabel"
  >
    <table>
      <tbody>
        <tr>
          <td>
            <theme-scheme-colors />
          </td>
          <td class="inline-block align-top">
            <theme-scheme-error />
          </td>
        </tr>
        <tr>
          <td class="inline-block align-top">
            <theme-scheme-neutral />
          </td>
          <td>
            <theme-scheme-extra />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
