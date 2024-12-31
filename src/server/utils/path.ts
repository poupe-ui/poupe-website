export function trimPath(path: string): string {
  let i = path.length;

  while (path[--i] === '/')
    ;

  return path.slice(0, i + 1);
}
