import values from "../../src/object/values";

const object = { one: 1, two: 2, three: 3 };

test("should object's own enumerable property values ", () => {
  expect(values(object)).toStrictEqual([1, 2, 3]);
});
