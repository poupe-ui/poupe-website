import {
  type CSSRuleObject,
  type HCT,
  type StandardDynamicSchemeKey,

  formatCSSRuleObjects,
  makeCSSTheme,
} from '@poupe/theme-builder';

interface ThemeOptions {
  primary: HCT;
  scheme: StandardDynamicSchemeKey;
}

function handleThemeRequest(event: H3Event<EventHandlerRequest>, opt: ThemeOptions) {
  const theme = makeCSSTheme({
    primary: opt.primary,
  }, {
    scheme: opt.scheme,
    lightSuffix: '',
    darkSuffix: '',
  });

  const rules: CSSRuleObject = {
    ':root, .light': {
      ...theme.lightValues,
      ...theme.lightVars,
    },
    '@media not print': {
      '.dark': {
        ...theme.darkValues,
        ...theme.darkVars,
      },
    },
  };

  setResponseHeaders(event, {
    'content-type': 'text/css; charset=utf-8',
    'cache-control': 'max-age=86400', // 24 hours
  });

  return formatCSSRuleObjects(rules);
};

export default defineEventHandler((event) => {
  const opt: Partial<ThemeOptions> = {
    primary: themeColorFromRouterParam(event, 'primary'),
    scheme: themeSchemeFromRouterParam(event, 'scheme'),
  };

  const errMsg = new Array<string>();

  if (opt.scheme === undefined) {
    errMsg.push('invalid scheme');
  }

  if (opt.primary === undefined) {
    errMsg.push('invalid primary color');
  }

  if (errMsg.length > 0) {
    setResponseStatus(event, 400);
    setResponseHeaders(event, {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'no-cache',
    });

    return errMsg.join('\n');
  }

  return handleThemeRequest(event, opt as ThemeOptions);
});
