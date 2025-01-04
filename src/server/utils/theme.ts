import {
  Hct,

  hexFromHct,
} from '@poupe/theme-builder/core';

import {
  type StandardDynamicSchemeKey,

  useHctColor,
  useRandomHexColor,
  useThemeScheme,
} from '~/composables/use-color';

export function hctToURL(c?: Hct) {
  if (c === undefined) {
    return useRandomHexColor().slice(1);
  }

  if (c instanceof Hct) {
    return hexFromHct(c).slice(1);
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
  fallback?: Hct;
  decode?: boolean;
} = {}) {
  const s = getRouterParam(event, param, opts);
  let out: typeof opts.fallback;

  if (s !== undefined) {
    out = useHctColor(s);
  }

  return out === undefined ? opts.fallback : out;
}
