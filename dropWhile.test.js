// dropWhile.test.js
const dropWhile = require("./dropWhile");

describe("dropWhile", () => {
  it("should remove elements from the beginning of the array until the predicate function returns false", () => {
    const result = dropWhile([2, 4, 6, 7, 8], (num) => num % 2 === 0);
    expect(result).toEqual([7, 8]);
  });

  it("should return an empty array if the predicate function returns true for all elements", () => {
    const result = dropWhile([2, 4, 6], (num) => num % 2 === 0);
    expect(result).toEqual([]);
  });

  it("should return the same array if the predicate function returns false for the first element", () => {
    const input = [1, 2, 3, 4, 5];
    const result = dropWhile(input, (num) => num % 2 === 0);
    expect(result).toEqual(input);
  });
});
