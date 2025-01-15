import { useMediaQuery } from '@vueuse/core';

const defaultThemeColor = '#caae88';
const secondsPerDay = 60 * 60 * 24;

export type ColorMode = 'dark' | 'light';

const preferredColorMode = computed((): ColorMode => {
  const wantsDark = useMediaQuery('(prefers-color-scheme: dark)');
  return wantsDark ? 'dark' : 'light';
});

const cookieName = 'poupe-color-mode';
const cookieMaxAge = 1000 * secondsPerDay;
const cookieSameSite = 'lax';

export const useTheme = () => {
  const themeCookie = useCookie<ColorMode>(cookieName, {
    maxAge: cookieMaxAge,
    sameSite: cookieSameSite,
    default: () => preferredColorMode.value,
  });

  const darkMode = computed<boolean>({
    get: () => themeCookie.value === 'dark',
    set: (value: boolean) => themeCookie.value = value ? 'dark' : 'light',
  });

  const themeColor = ref(defaultThemeColor);

  return { darkMode, themeColor };
};
