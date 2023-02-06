// take.test.js
import { take } from "./index";

describe("take method", () => {
  it("should return the first n elements of an array", () => {
    const array = [1, 2, 3, 4, 5];
    const n = 3;
    const result = take(array, n);
    expect(result).toEqual([1, 2, 3]);
  });

  it("should return an empty array if n is 0", () => {
    const array = [1, 2, 3, 4, 5];
    const n = 0;
    const result = take(array, n);
    expect(result).toEqual([]);
  });

  it("should return the original array if n is greater than the length of the array", () => {
    const array = [1, 2, 3, 4, 5];
    const n = 10;
    const result = take(array, n);
    expect(result).toEqual(array);
  });
});
