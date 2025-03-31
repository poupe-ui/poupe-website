import {
  type Hct,
  type StandardDynamicSchemeKey,

  hct,
} from '@poupe/theme-builder';

import {
  getColorParam,
  getThemeSchemeParam,
} from '~/shared/utils/colors';

export {
  colorToURL,
} from '~/shared/utils/colors';

export function themeSchemeFromRouterParam(event: H3Event<EventHandlerRequest>, param: string, opts: {
  fallback?: StandardDynamicSchemeKey
  decode?: boolean
} = {}) {
  const s = getRouterParam(event, param, opts);
  const { scheme } = getThemeSchemeParam(s);

  return {
    param: s,
    scheme: scheme ?? opts.fallback,
  };
}

export function themeColorFromRouterParam(event: H3Event<EventHandlerRequest>, param: string, opts: {
  fallback?: Hct
  decode?: boolean
} = {}) {
  const s = getRouterParam(event, param, opts);
  let out: typeof opts.fallback;

  const { color: hex } = getColorParam(s);
  if (hex !== undefined) {
    out = hct(hex);
  }

  return {
    param: s,
    color: out ?? opts.fallback,
    hex,
  };
}
