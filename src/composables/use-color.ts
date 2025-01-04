import uniqolor from 'uniqolor';

import {
  type HexColor,
  type StandardDynamicSchemeKey,

  hct,

  standardDynamicSchemes,
} from '@poupe/theme-builder';

export {
  type StandardDynamicSchemeKey,
  Hct,

  hexFromHct,
  rgbFromHct,
  hct,
} from '@poupe/theme-builder';

export const useRandomHexColor = () => uniqolor.random().color as HexColor;

// useHctColor attempts to convert an string to Hct.
export const useHctColor = (value: string = useRandomHexColor()) => {
  try {
    return hct(value);
  } catch {
    return undefined;
  }
};

// useThemeScheme attempts to convert an string to a StandardDynamicSchemeKey.
export const useThemeScheme = (value: string) => {
  if (value in standardDynamicSchemes) {
    return value as StandardDynamicSchemeKey;
  }
  return undefined;
};
