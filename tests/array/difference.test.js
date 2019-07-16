import difference from "../../src/array/difference";

test("difference", () => {
  const array = [2, 1];
  const result = difference(array, [2, 3]);
  expect(result).toStrictEqual([1]);
});
