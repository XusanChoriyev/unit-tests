// drop.test.js
const drop = require("./drop");

describe("drop", () => {
  it("should return an array with the specified number of elements removed from the beginning", () => {
    const result = drop([1, 2, 3, 4, 5], 2);
    expect(result).toEqual([3, 4, 5]);
  });

  it("should return an empty array if the number of elements to remove is equal or greater than the array length", () => {
    const result = drop([1, 2, 3, 4, 5], 5);
    expect(result).toEqual([]);
  });

  it("should return the same array if the number of elements to remove is 0", () => {
    const input = [1, 2, 3, 4, 5];
    const result = drop(input, 0);
    expect(result).toEqual(input);
  });
});
