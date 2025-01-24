import {
  type Hct,
  type StandardDynamicSchemeKey,

  formatCSSRuleObjects,
  makeCSSTheme,
} from '@poupe/theme-builder/tailwind';

interface ThemeOptions {
  primary: Hct;
  scheme: StandardDynamicSchemeKey;
}

function handleThemeRequest(event: H3Event<EventHandlerRequest>, opt: ThemeOptions) {
  const { styles } = makeCSSTheme({
    primary: opt.primary,
  }, {
    scheme: opt.scheme,
    lightSuffix: '',
    darkSuffix: '',
  });

  setResponseHeaders(event, {
    'content-type': 'text/css; charset=utf-8',
    'cache-control': 'max-age=86400', // 24 hours
  });

  return formatCSSRuleObjects(styles);
};

export default defineEventHandler((event) => {
  const { scheme } = themeSchemeFromRouterParam(event, 'scheme');
  const { param: primaryParam, color: primary, hex } = themeColorFromRouterParam(event, 'primary');

  if (scheme === undefined || primary === undefined || hex === undefined || event.path.endsWith('/')) {
    setResponseStatus(event, 404);
    return;
  } else if (hex !== `#${primaryParam}`) {
    sendRedirect(event, `./${hex.slice(1)}`, 308);
    return;
  }

  const opt: ThemeOptions = {
    primary,
    scheme,
  };

  return handleThemeRequest(event, opt as ThemeOptions);
});
