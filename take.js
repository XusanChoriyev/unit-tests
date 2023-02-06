// take.js
export const take = (array, n) => {
  if (n <= 0) {
    return [];
  }
  if (n >= array.length) {
    return array;
  }
  return array.slice(0, n);
};
