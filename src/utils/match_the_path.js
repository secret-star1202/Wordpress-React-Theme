export function returnPathKeys(path) {
  let found = path.match(/:[A-Za-z]+/g), keys = [];
  if (found) {
    for (let f = 0; f < found.length; f++) {
      keys.push(found[f].substring(1));
    }
  }

  return {
    regex: new RegExp(path.replace(/:[A-Za-z]+\//g, '(.+)\\/')
      .replace(/:[A-Za-z]+$/, '(.+)')),
    keys
  };
}

export default function matchThePath(pathname, { path, exact }) {
  let pathActual = pathname !== '/' ? pathname.replace(/\/$/, '') : pathname;
  if (typeof path !== 'string') {
    return path.map((p) => matchThePath(pathActual, { path: p, exact })).find((t) => t != null);
  }
  if (path === '*') {
    return {
      path,
      url: pathActual,
      params: {}
    };
  }
  if (path === '/') {
    if (pathActual === '/') {
      return {
        path: '/',
        url: pathActual,
        params: {}
      };
    }
    if (pathActual.length) {
      return null;
    }
  }
  let { regex, keys } = returnPathKeys(path);
  if (!keys.length && pathActual !== path) {
    return null;
  }
  let params = {}, res = pathActual.match(regex);

  if (!res) return null;

  for (let k = 0; k < keys.length; k++) {
    params[keys[k]] = res[k + 1];
  }

  return {
    path,
    url: pathActual,
    params
  };
}
