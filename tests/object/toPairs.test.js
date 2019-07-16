import toPairs from "../../src/object/toPairs";

const object = { one: 1, two: 2, three: 3 };
test("should Array[[key, value]]", () => {
  expect(toPairs(object)).toStrictEqual([["one", 1], ["two", 2], ["three", 3]]);
});
