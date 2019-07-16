import omit from "../../src/object/omit";

const object = { a: 1, b: "2", c: 3 };

test("should omit", () => {
  expect(omit(object, ["a", "c"])).toStrictEqual({ b: "2" });
});
