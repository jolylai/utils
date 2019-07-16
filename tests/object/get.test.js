import get from "../../src/object/get";

const object = { a: [{ b: { c: 3 } }] };
test("object.a[0].b.c is 3", () => {
  const path = "a[0].b.c";
  expect(get(object, path)).toBe(3);
});

test("object.a[0].b.d is undefined", () => {
  expect(get(object, "a[0].b.d")).toBe(undefined);
});
