import uniqolor from 'uniqolor';

import {
  type Color,
  type HexColor,
  Hct,

  hct,
} from '@poupe/theme-builder/core';

export {
  Hct,

  hexFromHct,
  rgbFromHct,
  hct,
} from '@poupe/theme-builder/core';

export const useRandomHexColor = () => uniqolor.random().color as HexColor

export const useHctColor = (color: Color = useRandomHexColor()): Hct => hct(color)
