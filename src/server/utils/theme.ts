import {
  type Hct,
  type StandardDynamicSchemeKey,

  hct,
} from '@poupe/theme-builder';

import {
  useColorParam,
  useThemeSchemeParam,
} from '~/shared/utils/colors';

export {
  hctToURL,
} from '~/shared/utils/colors';

export function themeSchemeFromRouterParam(event: H3Event<EventHandlerRequest>, param: string, opts: {
  fallback?: StandardDynamicSchemeKey;
  decode?: boolean;
} = {}) {
  const s = getRouterParam(event, param, opts);
  const { scheme } = useThemeSchemeParam(s);

  return {
    param: s,
    scheme: scheme ?? opts.fallback,
  };
}

export function themeColorFromRouterParam(event: H3Event<EventHandlerRequest>, param: string, opts: {
  fallback?: Hct;
  decode?: boolean;
} = {}) {
  const s = getRouterParam(event, param, opts);
  let out: typeof opts.fallback;

  const { color: hex } = useColorParam(s);
  if (hex !== undefined) {
    out = hct(hex);
  }

  return {
    param: s,
    color: out ?? opts.fallback,
    hex,
  };
}
