// filter.js
export function filter(array, func) {
  if (!Array.isArray(array)) {
    throw new Error("First argument must be an array");
  }

  if (typeof func !== "function") {
    throw new Error("Second argument must be a function");
  }

  const filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (func(array[i], i, array)) {
      filteredArray.push(array[i]);
    }
  }

  return filteredArray;
}
