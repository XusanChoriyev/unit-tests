// compact.test.js
const compact = require("./compact");

describe("compact", () => {
  it("should return an array with all falsy values removed", () => {
    const result = compact([0, 1, false, "", "Hello", undefined, NaN]);
    expect(result).toEqual([1, "Hello"]);
  });

  it("should return an empty array if all values are falsy", () => {
    const result = compact([0, false, "", undefined, NaN]);
    expect(result).toEqual([]);
  });

  it("should return the same array if there are no falsy values", () => {
    const input = [1, "Hello", true];
    const result = compact(input);
    expect(result).toEqual(input);
  });
});
