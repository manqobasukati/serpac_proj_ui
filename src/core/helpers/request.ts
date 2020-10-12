export function generatParameters(data: any) {
  const flat: { [name: string]: string } = flattenObject(data);
  const params: string[] = [];

  const int: { [name: string]: string } = Object.entries(flat).reduce(
    (prev: any, curr) => {
      if (curr[1] !== '') {
        prev[curr[0]] = curr[1];
      }
      return prev as unknown;
    },
    {}
  );

  const keys = Object.keys(int);

  keys.forEach(key => {
    if (int[key]) {
      const value = `${key}=${int[key]}`;
      params.push(value);
    }
  });

  return params.join('&');
}

export function flattenObject(obj: any, prefix = '') {
  let root: { [name: string]: string } = {};

  Object.keys(obj).reduce((acc: any, k) => {
    const pre = prefix.length ? prefix + '.' : '';
    if (typeof obj[k] === 'object') {
      Object.assign(acc, flattenObject(obj[k], pre + k));
    } else {
      acc[pre + k] = obj[k];
    }

    root = acc;
    return acc as unknown;
  }, {});

  return root;
}
