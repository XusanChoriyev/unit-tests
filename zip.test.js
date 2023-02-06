// zip.test.js
import { zip } from "./zip";

describe("zip", () => {
  it("should return an array of arrays where each sub-array combines the nth elements of each input array", () => {
    expect(zip([1, 2, 3], ["a", "b", "c"])).toEqual([
      [1, "a"],
      [2, "b"],
      [3, "c"],
    ]);
    expect(zip([1, 2], ["a", "b", "c"])).toEqual([
      [1, "a"],
      [2, "b"],
    ]);
    expect(zip([1, 2, 3], ["a", "b"])).toEqual([
      [1, "a"],
      [2, "b"],
    ]);
    expect(zip([1], ["a", "b", "c"])).toEqual([[1, "a"]]);
    expect(zip([], ["a", "b", "c"])).toEqual([]);
    expect(zip([1, 2, 3], [])).toEqual([]);
  });
});
