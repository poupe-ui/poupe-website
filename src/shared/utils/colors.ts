import { colord, extend } from 'colord';
import colorNames from 'colord/plugins/names';
import uniqolor from 'uniqolor';

import {
  type Hct,
  type HexColor,
  type StandardDynamicSchemeKey,

  hct,
  hexFromHct,
  standardDynamicSchemes,
} from '@poupe/theme-builder';

import { getParam } from './route';

/* enable color names */
extend([colorNames]);

export {
  type StandardDynamicSchemeKey,

  hct,
} from '@poupe/theme-builder';

const reHexValue = /^#?(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

/** @returns if the value is a string suitable for {@link hct} */
export const isHexValue = (s: string | HexColor): boolean => reHexValue.test(s);

/** @returns a color in {@link HexColor} format without the leading `#` */
export function hctToURL(c?: Hct) {
  const hex = c ? hexFromHct(c) : useRandomHexColor();
  return hex.slice(1);
}

/** @returns a random color in {@link HexColor} format */
export const useRandomHexColor = () => uniqolor.random().color as HexColor;

/** @returns a random color as {@link Hct} object */
export const useRandomColor = () => hct(useRandomHexColor());

/** @returns the normalized color for the given parameter */
export const useColorParam = (param?: string | string[]): {
  param?: string
  color?: string
  hex?: HexColor
} => {
  const s = getParam(param);
  if (s === undefined || s === '') {
    return { param: s };
  }

  if (isHexValue(s)) {
    const hex = (s.startsWith('#') ? s : `#${s}`).toLowerCase() as HexColor;
    return { param: s, color: hex };
  }

  const c = colord(s);
  if (c.isValid()) {
    const hex = c.toHex() as HexColor;
    return { param: s, color: hex };
  }

  return { param: s };
};

/** @returns if the value is a valid {@link StandardDynamicSchemeKey} */
export const isThemeSchemeKey = (s: string): boolean => s in standardDynamicSchemes;

/** useThemeSchemeParam attempts to convert an string to a {@link StandardDynamicSchemeKey}. */
export const useThemeSchemeParam = (value?: string | string[]) => {
  const key = getParam(value);
  let scheme: StandardDynamicSchemeKey | undefined;

  if (key && key in standardDynamicSchemes) {
    scheme = key as StandardDynamicSchemeKey;
  }

  return {
    param: key,
    scheme,
  };
};
