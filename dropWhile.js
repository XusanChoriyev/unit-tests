// dropWhile.js
const dropWhile = (array, predicate) => {
  for (let i = 0; i < array.length; i++) {
    if (!predicate(array[i])) {
      return array.slice(i);
    }
  }
  return [];
};

module.exports = dropWhile;
