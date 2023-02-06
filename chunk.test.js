// chunk.test.js
const chunk = require("./chunk");

describe("chunk", () => {
  it("should return an array of arrays with specified chunk size", () => {
    const result = chunk([1, 2, 3, 4, 5], 2);
    expect(result).toEqual([[1, 2], [3, 4], [5]]);
  });

  it("should return an array with single chunk if chunk size is greater than array length", () => {
    const result = chunk([1, 2, 3, 4, 5], 10);
    expect(result).toEqual([[1, 2, 3, 4, 5]]);
  });

  it("should return an empty array if input array is empty", () => {
    const result = chunk([], 2);
    expect(result).toEqual([]);
  });
});
