import at from "../../src/object/at";

const object = { a: [{ b: { c: 3 } }, 4] };

test("at", () => {
  const path = "a[0].b.c";
  expect(at(object, ["a[0].b.c", "a[1]"])).toStrictEqual([3, 4]);
});
