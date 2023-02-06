// omitBy.js
export const omitBy = (object, predicate) => {
  const result = {};
  for (const [key, value] of Object.entries(object)) {
    if (!predicate(value)) {
      result[key] = value;
    }
  }
  return result;
};
