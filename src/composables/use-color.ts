import uniqolor from 'uniqolor';

import {
  type Hct,
  type HexColor,
  type StandardDynamicSchemeKey,

  hct,

  standardDynamicSchemes,
} from '@poupe/theme-builder';

export {
  type StandardDynamicSchemeKey,

  hexFromHct,
  hct,
} from '@poupe/theme-builder';

const reHexValue = /^#?(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

/** @returns if the value is a string suitable for {@link hct} */
export const isHexValue = (s: string | HexColor): boolean => reHexValue.test(s);

/** @returns a random color in {@link HexColor} format */
export const useRandomHexColor = () => uniqolor.random().color as HexColor;

/** @returns a random color as {@link Hct} object */
export const useRandomColor = () => hct(useRandomHexColor());

/** useHCTColor attempts to convert an string to {@link Hct} */
export const useHCTColor = (value: string | string[] = useRandomHexColor()): Hct | undefined => {
  if (!Array.isArray(value)) {
    if (!isHexValue(value))
      return undefined;

    return hct(value.startsWith('#') ? value : `#${value}`);
  }

  return value.length > 0 ? useHCTColor(value[0]) : undefined;
};

/** @returns if the value is a valid {@link StandardDynamicSchemeKey} */
export const isThemeSchemeKey = (s: string): boolean => s in standardDynamicSchemes;

/** useThemeScheme attempts to convert an string to a {@link StandardDynamicSchemeKey}. */
export const useThemeScheme = (value: string | string[]) => {
  const key = Array.isArray(value) ? value[0] : value;
  if (key in standardDynamicSchemes) {
    return key as StandardDynamicSchemeKey;
  }
  return undefined;
};
