import {
  type CSSRuleObject,
  type Hct,
  type StandardDynamicSchemeKey,

  rgbFromHct,
  formatCSSRuleObjects,
} from '@poupe/theme-builder/tailwind';

interface ThemeOptions {
  primary: Hct;
  scheme: StandardDynamicSchemeKey;
}

function handleThemeRequest(event: H3Event<EventHandlerRequest>, opt: ThemeOptions) {
  const theme: CSSRuleObject = {
    '.root': {
      '--md-primary': rgbFromHct(opt.primary),
      '--md-scheme': opt.scheme,
    },
  };

  setResponseHeaders(event, {
    'content-type': 'text/css; charset=utf-8',
    'cache-control': 'no-cache',
  });

  return formatCSSRuleObjects(theme);
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
