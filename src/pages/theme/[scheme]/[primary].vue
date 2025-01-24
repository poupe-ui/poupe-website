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
        <theme-scheme :aria-label="`${themeColor} ${scheme} theme`" />
      </div>
    </theme-card>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'themeless',
});

const $route = useRoute();
const scheme = useThemeScheme($route.params.scheme);
const { param: primaryParam, color: themeColor } = useColorParam($route.params.primary);

if (scheme === undefined || themeColor === undefined || $route.path.endsWith('/')) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Not Found',
  });
}

if (themeColor !== `#${primaryParam}`) {
  await navigateTo(joinRelativeURL($route.path, `../${themeColor.slice(1)}`), {
    redirectCode: 308,
  });
}

const primary = hct(themeColor);
const themeURL = computed(() => `/api/tailwindcss/${scheme}/${themeColor.slice(1)}`);

useHead({
  title: `${scheme}:${themeColor} — @poupe/theme-builder`,
  link: [{
    key: 'poupe-theme-link',
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
