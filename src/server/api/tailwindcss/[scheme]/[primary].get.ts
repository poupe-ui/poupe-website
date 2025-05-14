import {
  type Theme,

  makeThemeBases,
  makeThemeFromPartialOptions,
} from '@poupe/tailwindcss/theme';

import {
  stringifyCSSRules,
} from '@poupe/css';

function handleThemeRequest(event: H3Event<EventHandlerRequest>, theme: Theme) {
  const bases = makeThemeBases(theme);

  setResponseHeaders(event, {
    'content-type': 'text/css; charset=utf-8',
    'cache-control': 'max-age=86400', // 24 hours
  });

  return stringifyCSSRules(...bases);
};

export default defineEventHandler((event) => {
  const { scheme } = themeSchemeFromRouterParam(event, 'scheme');
  const { param: primaryParam, color: primary, hex: primaryHex } = themeColorFromRouterParam(event, 'primary');

  if (scheme === undefined || primary === undefined || primaryHex === undefined || event.path.endsWith('/')) {
    setResponseStatus(event, 404);
    return;
  } else if (primaryHex !== `#${primaryParam}`) {
    sendRedirect(event, `./${primaryHex.slice(1)}`, 308);
    return;
  }

  const theme = makeThemeFromPartialOptions({
    colors: {
      primary: primaryHex,
    },
    scheme,
    lightSuffix: '',
    darkSuffix: '',
  });

  return handleThemeRequest(event, theme);
});
