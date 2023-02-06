import { pick } from "./pick";

describe("pick", () => {
  test("returns an object containing only the specified keys", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const keys = ["a", "c"];
    const result = pick(obj, keys);
    expect(result).toEqual({ a: 1, c: 3 });
  });

  test("returns an empty object if the keys array is empty", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const keys = [];
    const result = pick(obj, keys);
    expect(result).toEqual({});
  });

  test("does not include keys that do not exist in the original object", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const keys = ["a", "d"];
    const result = pick(obj, keys);
    expect(result).toEqual({ a: 1 });
  });
});
