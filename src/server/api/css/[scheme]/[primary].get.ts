import {
  type CSSRuleObject,
  type Hct,
  type StandardDynamicSchemeKey,

  formatCSSRuleObjects,
  makeCSSColors,
} from '@poupe/theme-builder';

interface ThemeOptions {
  primary: Hct;
  scheme: StandardDynamicSchemeKey;
}

function handleThemeRequest(event: H3Event<EventHandlerRequest>, opt: ThemeOptions) {
  const theme = makeCSSColors(opt.primary, {}, opt.scheme, 0, {
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

export default defineEventHandler((e) => {
  const opt: Partial<ThemeOptions> = {
    primary: themeColorFromRouterParam(e, 'primary'),
    scheme: themeSchemeFromRouterParam(e, 'scheme'),
  };

  const errMsg = new Array<string>();

  if (opt.scheme === undefined) {
    errMsg.push('invalid scheme');
  }

  if (opt.primary === undefined) {
    errMsg.push('invalid primary color');
  }

  if (errMsg.length > 0) {
    setResponseStatus(e, 400);
    setResponseHeaders(e, {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'no-cache',
    });

    return errMsg.join('\n');
  }

  return handleThemeRequest(e, opt as ThemeOptions);
});
