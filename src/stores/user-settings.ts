import { useDark as origUseDark } from '@vueuse/core';
import { defineStore } from 'pinia';

/** @returns the user' settings */
export const useUserSettings = defineStore('user-settings', () => {
  const darkMode = origUseDark();

  return {
    darkMode,
  };
});
