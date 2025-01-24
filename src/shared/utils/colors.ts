import uniqolor from 'uniqolor';

import {
  type Hct,
  type HexColor,
  type StandardDynamicSchemeKey,

  hct,

  standardDynamicSchemes,
} from '@poupe/theme-builder';

import { getParam } from './route';

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

/** @returns the normalized color for the given parameter */
export const useColorParam = (param?: string | string[]): {
  param?: string;
  color?: string;
  hex?: HexColor;
} => {
  const s = getParam(param);
  if (s === undefined || s === '') {
    return { param: s };
  }

  if (isHexValue(s)) {
    const hex = (s.startsWith('#') ? s : `#${s}`).toLowerCase() as HexColor;
    return { param: s, color: hex };
  }

  return { param: s };
};

/** useHCTColor attempts to convert an string to {@link Hct} */
export const useHCTColor = (value: string | string[] = useRandomHexColor()): Hct | undefined => {
  const { color } = useColorParam(value);
  return color ? hct(color) : undefined;
};
/** @returns if the value is a valid {@link StandardDynamicSchemeKey} */
export const isThemeSchemeKey = (s: string): boolean => s in standardDynamicSchemes;

/** useThemeScheme attempts to convert an string to a {@link StandardDynamicSchemeKey}. */
export const useThemeScheme = (value: string | string[]) => {
  const key = getParam(value);
  if (key && key in standardDynamicSchemes) {
    return key as StandardDynamicSchemeKey;
  }
  return undefined;
};
