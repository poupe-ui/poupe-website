<template>
  <div class="flex flex-1 h-screen justify-center items-center">
    <div class="container">
      <theme-card
        v-if="primary"
        :title="`Hello, ${themeColor}`"
      >
        <div class="flex justify-center">
          <theme-shades-bar v-model="primary" />
        </div>
      </theme-card>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'themeless',
});

const $route = useRoute();
const { param: primaryParam, color: themeColor } = getColorParam($route.params.primary);

if (themeColor === undefined || $route.path.endsWith('/')) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Not Found',
  });
}

if (themeColor !== `#${primaryParam}`) {
  await navigateTo({
    name: 'color-primary',
    params: {
      primary: themeColor.slice(1),
    },
  }, {
    redirectCode: 308,
  });
}

const primary = computed(() => hct(themeColor));
const themeURL = computed(() => `/api/tailwindcss/content/${themeColor.slice(1)}`);

useHead({
  title: `${themeColor} — @poupe/theme-builder`,
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
