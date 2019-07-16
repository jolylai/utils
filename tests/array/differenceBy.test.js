import differenceBy from "../../src/array/differenceBy";

test("should differenceBy", () => {
  const result = differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
  expect(result).toStrictEqual([1.2]);
});
