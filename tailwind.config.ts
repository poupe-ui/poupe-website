import type { Config } from 'tailwindcss';
import { withMaterialColors } from '@poupe/theme-builder/tailwind';

// colours from darvaza's logo
const primary = '#caae88';
const secondary = '#8ca0a0';
const tertiary = '#6e7181';

export default withMaterialColors({}, {
  primary,
  secondary,
  tertiary,
});
