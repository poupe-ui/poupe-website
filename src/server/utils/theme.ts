import {
  type Hct,
  type StandardDynamicSchemeKey,

  hct,
  hexFromHct,
} from '@poupe/theme-builder';

import {
  useColorParam,
  useRandomHexColor,
  useThemeScheme,
} from '~/shared/utils/colors';

export function hctToURL(c?: Hct) {
  const hex = c ? hexFromHct(c) : useRandomHexColor();
  return hex.slice(1);
}

export function themeSchemeFromRouterParam(event: H3Event<EventHandlerRequest>, param: string, opts: {
  fallback?: StandardDynamicSchemeKey;
  decode?: boolean;
} = {}) {
  const s = getRouterParam(event, param, opts);
  let out: typeof opts.fallback;

  if (s !== undefined) {
    out = useThemeScheme(s);
  }

  return out === undefined ? opts.fallback : out;
}

export function themeColorFromRouterParam(event: H3Event<EventHandlerRequest>, param: string, opts: {
  fallback?: Hct;
  decode?: boolean;
} = {}) {
  const s = getRouterParam(event, param, opts);
  let out: typeof opts.fallback;

  const { color } = useColorParam(s);
  if (color !== undefined) {
    out = hct(color);
  }

  return out === undefined ? opts.fallback : out;
}
