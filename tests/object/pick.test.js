import pick from "../../src/object/pick";

const object = { a: 1, b: "2", c: 3 };
test("object pick [a] is {a: 1}", () => {
  expect(pick(object, ["a"])).toStrictEqual({ a: 1 });
});
