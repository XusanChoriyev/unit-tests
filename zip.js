// zip.js
export const zip = (...arrays) => {
  const length = Math.min(...arrays.map((array) => array.length));
  return Array.from({ length }, (_, index) =>
    arrays.map((array) => array[index])
  );
};
