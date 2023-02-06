import { omitBy } from "./index";

describe("omitBy", () => {
  test("should return an object with properties that pass the provided function", () => {
    const object = { a: 1, b: 2, c: 3 };
    const predicate = (value) => value > 2;
    const result = omitBy(object, predicate);
    expect(result).toEqual({ a: 1, b: 2 });
  });

  test("should return an empty object if all properties fail the provided function", () => {
    const object = { a: 3, b: 4, c: 5 };
    const predicate = (value) => value < 3;
    const result = omitBy(object, predicate);
    expect(result).toEqual({});
  });

  test("should return an empty object if provided with an empty object", () => {
    const object = {};
    const predicate = (value) => value > 2;
    const result = omitBy(object, predicate);
    expect(result).toEqual({});
  });
});
