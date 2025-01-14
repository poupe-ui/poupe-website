<template>
  <div class="flex w-screen justify-center">
    <theme-card>
      <template #title>
        <h1 class="text-2xl font-bold capitalize">
          <span class="font-mono">{{ themeColor }}</span>
          {{ scheme }}
          theme
        </h1>
      </template>

      <div class="flex flex-col">
        <ul class="flex justify-center">
          <li>
            <span class="font-bold">H</span>:{{ primary.hue.toFixed(2) }}
            <span class="font-bold">C</span>:{{ primary.chroma.toFixed(2) }}
            <span class="font-bold">T</span>:{{ primary.tone.toFixed(2) }}
          </li>
        </ul>

        <theme-colors-table />
      </div>
    </theme-card>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'themeless',

  validate: (route): boolean => {
    return isValidRouteParam('primary', isHexValue, route) && isValidRouteParam('scheme', isThemeSchemeKey, route);
  },
});

const $route = useRoute();
const scheme = useThemeScheme($route.params.scheme) || 'content';
const primary = useHCTColor($route.params.primary) || useRandomColor();
const themeColor = hexFromHCT(primary);
const themeURL = computed(() => `/api/tailwindcss/${scheme}/${themeColor.slice(1)}`);

useHead({
  title: `${scheme}:${themeColor} — @poupe/theme-builder`,
  link: [{
    id: 'poupe-theme-link',
    rel: 'stylesheet',
    href: themeURL,
    tagPriority: 20,
  }],
  meta: [{
    name: 'theme-color',
    content: themeColor,
  }],
});
</script>
