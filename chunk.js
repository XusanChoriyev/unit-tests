const chunk = (array, size) => {
  if (!array.length) return [];
  const result = [];
  let chunk = [];
  for (let i = 0; i < array.length; i++) {
    chunk.push(array[i]);
    if ((i + 1) % size === 0 || i === array.length - 1) {
      result.push(chunk);
      chunk = [];
    }
  }
  return result;
};

module.exports = chunk;
