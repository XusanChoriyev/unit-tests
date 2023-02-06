const map = require("./map");

describe("map", () => {
  it("should map over an array and return a new array", () => {
    const arr = [1, 2, 3];
    const mappedArr = map(arr, (item) => item * 2);
    expect(mappedArr).toEqual([2, 4, 6]);
  });

  it("should handle an empty array", () => {
    const arr = [];
    const mappedArr = map(arr, (item) => item * 2);
    expect(mappedArr).toEqual([]);
  });

  it("should handle a non-array input", () => {
    const input = "not an array";
    const mappedArr = map(input, (item) => item * 2);
    expect(mappedArr).toEqual([]);
  });

  it("should handle a non-function callback", () => {
    const arr = [1, 2, 3];
    const mappedArr = map(arr, "not a function");
    expect(mappedArr).toEqual([undefined, undefined, undefined]);
  });
});
