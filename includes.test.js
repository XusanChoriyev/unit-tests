// includes.test.js
import { includes } from "./includes.test";

describe("includes", () => {
  it("should return true if the value is in the array", () => {
    const array = [1, 2, 3, 4];
    const result = includes(array, 2);
    expect(result).toBe(true);
  });

  it("should return false if the value is not in the array", () => {
    const array = [1, 2, 3, 4];
    const result = includes(array, 5);
    expect(result).toBe(false);
  });
});
