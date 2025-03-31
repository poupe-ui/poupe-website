// dependencies
import { extend } from 'colord';
import colorNames from 'colord/plugins/names';

import {
  type HexColor,

  getColorParam as originalGetColorParam,
} from '@poupe/theme-builder/server';

/* enable color names */
extend([colorNames]);

export {
  colorToURL,
  getThemeSchemeParam,
  hct,
} from '@poupe/theme-builder/server';

export function getColorParam(param?: string | string[]): {
  param?: string
  color?: HexColor
} {
  // wrapped to get colord extended
  return originalGetColorParam(param);
}
