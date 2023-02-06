// omit.test.js
const { omit } = require("./index");

describe("omit", () => {
  it("should return a new object without the specified properties", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const expected = { a: 1, c: 3 };
    const result = omit(obj, ["b"]);
    expect(result).toEqual(expected);
  });

  it("should return the original object if no properties are specified", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const expected = { a: 1, b: 2, c: 3 };
    const result = omit(obj, []);
    expect(result).toEqual(expected);
  });

  it("should return an empty object if all properties are specified", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const expected = {};
    const result = omit(obj, ["a", "b", "c"]);
    expect(result).toEqual(expected);
  });

  it("should return an empty object if the input is an empty object", () => {
    const obj = {};
    const expected = {};
    const result = omit(obj, ["a"]);
    expect(result).toEqual(expected);
  });
});
