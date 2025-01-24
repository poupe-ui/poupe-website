export const getParam = (param?: string | string[]): (string | undefined) => {
  if (param === undefined) {
    return undefined;
  } else if (!Array.isArray(param)) {
    return param;
  } else if (param.length > 0) {
    return param[0];
  } else {
    return undefined;
  }
};
