const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

const isEven = (num) => num % 2 === 0;

test("pickBy method picks only even values from an object", () => {
  const result = pickBy(obj, isEven);
  expect(result).toEqual({ b: 2, d: 4 });
});

test("pickBy method returns an empty object if no properties satisfy the predicate", () => {
  const isOdd = (num) => num % 2 !== 0;
  const result = pickBy(obj, isOdd);
  expect(result).toEqual({});
});
