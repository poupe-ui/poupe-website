import type {
  RouteLocationNormalizedGeneric,
} from '#vue-router';

import {
  getParam,
} from '~/shared/utils/route';

export function isValidRouteParam(id: string,
  check: (s: string) => boolean,
  route: RouteLocationNormalizedGeneric = useRoute()) {
  const param = getParam(route.params[id]);
  return param ? check(param) : false;
}
