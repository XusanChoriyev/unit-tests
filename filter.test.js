// take.test.js
import { filter } from "./filter";

describe("filter", () => {
  it("should filter array of numbers and return only even numbers", () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = filter(numbers, (num) => num % 2 === 0);
    expect(result).toEqual([2, 4]);
  });

  it("should return an empty array if no elements pass the test", () => {
    const numbers = [1, 3, 5, 7, 9];
    const result = filter(numbers, (num) => num % 2 === 0);
    expect(result).toEqual([]);
  });

  it("should return the original array if all elements pass the test", () => {
    const numbers = [2, 4, 6, 8, 10];
    const result = filter(numbers, (num) => num % 2 === 0);
    expect(result).toEqual([2, 4, 6, 8, 10]);
  });

  it("should return an empty array if given an empty array", () => {
    const numbers = [];
    const result = filter(numbers, (num) => num % 2 === 0);
    expect(result).toEqual([]);
  });

  it("should throw an error if not passed an array as first argument", () => {
    const notAnArray = "not an array";
    expect(() => filter(notAnArray, (num) => num % 2 === 0)).toThrowError(
      "First argument must be an array"
    );
  });

  it("should throw an error if not passed a function as second argument", () => {
    const numbers = [1, 2, 3, 4, 5];
    const notAFunction = "not a function";
    expect(() => filter(numbers, notAFunction)).toThrowError(
      "Second argument must be a function"
    );
  });
});
