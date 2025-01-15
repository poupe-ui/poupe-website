import { useMediaQuery } from '@vueuse/core';

const defaultThemeColor = '#caae88';
const secondsPerDay = 60 * 60 * 24;

/*
 * types
 */
export type ColorMode = 'dark' | 'light';

/*
 * cookie
 */
const cookieName = 'poupe-color-mode';
const cookieMaxAge = 1000 * secondsPerDay;
const cookieSameSite = 'lax';

/** @returns variables associated with active theme */
export const useTheme = () => {
  /** @returns {@link ColorMode} to use by default considering user preferences */
  const preferredColorMode = computed((): ColorMode => {
    const wantsDark = useMediaQuery('(prefers-color-scheme: dark)');
    return wantsDark.value ? 'dark' : 'light';
  });

  /** @returns the cookie used to store the chosen {@link ColorMode} persistently */
  const themeCookie = useCookie<ColorMode>(cookieName, {
    maxAge: cookieMaxAge,
    sameSite: cookieSameSite,
    default: () => preferredColorMode.value,
  });

  /** @returns a persistent toggleable accessor to the chosen {@link ColorMode}  */
  const darkMode = computed<boolean>({
    get: () => themeCookie.value === 'dark',
    set: (value: boolean) => themeCookie.value = value ? 'dark' : 'light',
  });

  /** @returns the source color to use to build the default theme */
  const themeColor = ref(defaultThemeColor);

  return { darkMode, themeColor };
};
