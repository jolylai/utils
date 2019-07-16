import pickBy from "../../src/object/pickBy";

const object = { a: 1, b: null, c: 3, d: false, e: undefined };

test("pickBy default", () => {
  expect(pickBy(object)).toStrictEqual({ a: 1, c: 3 });
});

test("should pickBy falsy value", () => {
  expect(pickBy(object, value => !value)).toStrictEqual({
    b: null,
    d: false,
    e: undefined
  });
});
