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

  return;
}

export function themeSchemeFromRouterParam(event: H3Event<EventHandlerRequest>, param: string, options: {
  fallback?: StandardDynamicSchemeKey;
  decode?: boolean;
} = {}) {
  const s = getRouterParam(event, param, options);
  let out: typeof options.fallback;

  if (s !== undefined) {
    out = useThemeScheme(s);
  }

  return out === undefined ? options.fallback : out;
}

export function themeColorFromRouterParam(event: H3Event<EventHandlerRequest>, param: string, options: {
  fallback?: Hct;
  decode?: boolean;
} = {}) {
  const s = getRouterParam(event, param, options);
  let out: typeof options.fallback;

  if (s !== undefined) {
    out = useHctColor(s);
  }

  return out === undefined ? options.fallback : out;
}
