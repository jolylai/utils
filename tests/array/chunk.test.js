import chunk from "../../src/array/chunk";

const array = ["a", "b", "c", "d"];
test("should chunk 2", () => {
  const chunk2 = chunk(array, 2);
  const result = [["a", "b"], ["c", "d"]];
  expect(chunk2).toStrictEqual(result);
});

test("should chunk 3", () => {
  const chunk3 = chunk(array, 3);
  const result = [["a", "b", "c"], ["d"]];
  expect(chunk3).toStrictEqual(result);
});
