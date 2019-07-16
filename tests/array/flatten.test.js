import flatten from "../../src/array/flatten";

const array = [1, [2, [3]]];
test("flatten [1, [2, [3]]] to [1,2,[3]]", () => {
  expect(flatten(array)).toStrictEqual([1, 2, [3]]);
});
