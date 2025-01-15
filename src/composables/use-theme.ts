import { useMediaQuery } from '@vueuse/core';

const defaultThemeColor = '#caae88';

type ColorMode = 'dark' | 'light';

const preferredColorMode = (): ColorMode => {
  const wantsDark = useMediaQuery('(prefers-color-scheme: dark)');
  return wantsDark ? 'dark' : 'light';
};

const cookieName = 'poupe-color-mode';
const cookieMaxAge = 1000 * 60 * 60 * 24;
const cookieSameSite = 'lax';

export const useTheme = () => {
  const themeCookie = useCookie<ColorMode>(cookieName, {
    maxAge: cookieMaxAge,
    sameSite: cookieSameSite,
    default: () => preferredColorMode(),
  });

  const darkMode = computed<boolean>({
    get: () => themeCookie.value === 'dark',
    set: (value: boolean) => themeCookie.value = value ? 'dark' : 'light',
  });

  const themeColor = ref(defaultThemeColor);

  return { darkMode, themeColor };
};
