// @ts-check
import unicornPlugin from 'eslint-plugin-unicorn';

import { forNuxt } from '@poupe/eslint-config/nuxt';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  unicornPlugin.configs['flat/recommended'],
  ...forNuxt(),
  {
    rules: {
      'unicorn/prevent-abbreviations': [
        'error',
        {
          replacements: {
            env: {
              environment: false,
            },
            errMsg: {
              errorMessages: false,
            },
            fn: {
              function: false,
            },
            i: {
              index: false,
            },
            param: {
              parameter: false,
            },
            params: {
              parameters: false,
            },
            prop: {
              property: false,
            },
            props: {
              properties: false,
            },
            vars: {
              variables: false,
            },
          },
        },
      ],
      'unicorn/no-array-for-each': 'error',
      '@stylistic/arrow-parens': 'error',
    },
  },
);
