// map.js
const isArray = (obj) =>
  Object.prototype.toString.call(obj) === "[object Array]";
const isFunction = (obj) => typeof obj === "function";

const map = (arr, callback) => {
  if (!isArray(arr) || !isFunction(callback)) return [];

  const mappedArr = [];
  for (let i = 0; i < arr.length; i++) {
    mappedArr.push(callback(arr[i], i, arr));
  }

  return mappedArr;
};

module.exports = map;
