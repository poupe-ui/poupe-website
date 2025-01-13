import type {
  RouteLocationNormalizedGeneric,
} from '#vue-router';

export function isValidRouteParam(id: string,
  check: (s: string) => boolean,
  route: RouteLocationNormalizedGeneric = useRoute()) {
  const param = route.params[id];
  if (Array.isArray(param)) {
    return param.length == 1 && check(param[0]);
  }
  return check(param);
}
