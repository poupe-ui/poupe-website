import {
  type StandardDynamicSchemeKey,
  HCT,

  hexFromHCT,
} from '@poupe/theme-builder';

import {
  useHCTColor,
  useRandomHexColor,
  useThemeScheme,
} from '~/composables/use-color';

export function hctToURL(c?: HCT) {
  if (c === undefined) {
    return useRandomHexColor().slice(1);
  }

  if (c instanceof HCT) {
    return hexFromHCT(c).slice(1);
  }

  return undefined;
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
  fallback?: HCT;
  decode?: boolean;
} = {}) {
  const s = getRouterParam(event, param, opts);
  let out: typeof opts.fallback;

  if (s !== undefined) {
    out = useHCTColor(s);
  }

  return out === undefined ? opts.fallback : out;
}
