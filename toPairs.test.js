const { toPairs } = require("./index");

describe("toPairs method", () => {
  it("should convert an object to an array of key-value pairs", () => {
    const object = { a: 1, b: 2, c: 3 };
    expect(toPairs(object)).toEqual([
      ["a", 1],
      ["b", 2],
      ["c", 3],
    ]);
  });

  it("should return an empty array for an empty object", () => {
    expect(toPairs({})).toEqual([]);
  });

  it("should return an array of key-value pairs for a non-empty object", () => {
    const object = { name: "John", age: 30 };
    expect(toPairs(object)).toEqual([
      ["name", "John"],
      ["age", 30],
    ]);
  });
});
