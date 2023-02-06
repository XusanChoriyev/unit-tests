const pickBy = (obj, fn) => {
  return Object.entries(obj)
    .filter(([key, value]) => fn(value, key))
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
};
