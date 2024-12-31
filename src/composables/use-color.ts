import uniqolor from 'uniqolor';

import {
  type HexColor,
  type StandardDynamicSchemeKey,

  hct,

  standardDynamicSchemes,
} from '@poupe/theme-builder';

export {
  type StandardDynamicSchemeKey,
  HCT,

  hexFromHCT,
  hct,
} from '@poupe/theme-builder';

const reHexValue = /^(#?[0-9a-fA-F]){3,6}$/;

/** @returns if the value is a string suitable for {@link hct} */
export const isHexValue = (s: string | HexColor): boolean => reHexValue.test(s);

/** @returns a random color in {@link HexColor} format */
export const useRandomHexColor = () => uniqolor.random().color as HexColor;

/** useHCTColor attempts to convert an string to HCT */
export const useHCTColor = (value: string | string[] = useRandomHexColor()) => {
  if (!Array.isArray(value))
    return isHexValue(value) ? hct(value) : undefined;
  else if (value.length === 1)
    return isHexValue(value[0]) ? hct(value[0]) : undefined;
  return undefined;
};

/** @returns if the value is a valid {@link StandardDynamicSchemeKey} */
export const isThemeSchemeKey = (s: string): boolean => s in standardDynamicSchemes;

/** useThemeScheme attempts to convert an string to a {@link StandardDynamicSchemeKey}. */
export const useThemeScheme = (value: string|string[]) => {
  const key = Array.isArray(value) ? value[0] : value;
  if (key in standardDynamicSchemes) {
    return key as StandardDynamicSchemeKey;
  }
  return undefined;
};
