const defaultThemeColor = '#caae88';

export const useTheme = () => {
  const themeCookie = useCookie<'dark' | 'light'>('poupe-color-mode', {
    maxAge: 1000 * 60 * 60 * 24,
    sameSite: 'lax',
    default: () => 'light',
  });

  const darkMode = computed<boolean>({
    get: () => themeCookie.value === 'dark',
    set: (value: boolean) => themeCookie.value = value ? 'dark' : 'light',
  });

  const themeColor = ref(defaultThemeColor);

  return { darkMode, themeColor };
};
