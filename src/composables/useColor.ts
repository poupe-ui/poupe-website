import uniqolor from 'uniqolor';

import {
  type HexColor,

  hct,
} from '@poupe/theme-builder/core';

export {
  Hct,

  hexFromHct,
  rgbFromHct,
  hct,
} from '@poupe/theme-builder/core';

export const useRandomHexColor = () => uniqolor.random().color as HexColor;

// useHctColor attempts to convert an string to Hct.
export const useHctColor = (value: string = useRandomHexColor()) => {
  try {
    return hct(value);
  } catch {
    return undefined;
  }
};
