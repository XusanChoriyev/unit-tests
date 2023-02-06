const { merge } = require("./index");

describe("merge", () => {
  test("should merge two objects correctly", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    const result = merge(obj1, obj2);
    expect(result).toEqual({ a: 1, b: 2, c: 3, d: 4 });
  });

  test("should merge multiple objects correctly", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    const obj3 = { c: 5, d: 6 };
    const result = merge(obj1, obj2, obj3);
    expect(result).toEqual({ a: 1, b: 3, c: 5, d: 6 });
  });

  test("should overwrite properties if they exist in multiple objects", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    const result = merge(obj1, obj2);
    expect(result).toEqual({ a: 1, b: 3, c: 4 });
  });

  test("should return empty object if no objects are provided", () => {
    const result = merge();
    expect(result).toEqual({});
  });
});
