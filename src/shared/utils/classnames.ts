export const cn = (...args) => {
  const result = [];

  for (const arg of args) {
    if (arg) {
      if (typeof arg === 'string') {
        result.push(arg);
      } else if (typeof arg === 'object') {
        for (const key in arg) {
          if (arg[key]) {
            result.push(key);
          }
        }
      }
    }
  }

  return result.join(' ');
};
