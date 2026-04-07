import { forNuxt } from '@poupe/eslint-config/nuxt';
import withNuxt from './.nuxt/eslint.config.mjs';

const ObjectCompat = Object;

if (!ObjectCompat.groupBy) {
  ObjectCompat.groupBy = function groupBy(items, callback) {
    const accumulator = {};
    for (const [index, item] of [...items].entries()) {
      const key = callback(item, index);
      const group = String(key);
      if (!Object.prototype.hasOwnProperty.call(accumulator, group)) {
        accumulator[group] = [];
      }
      accumulator[group].push(item);
    }
    return accumulator;
  };
}

export default withNuxt(...forNuxt());
