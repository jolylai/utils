function baseFindIndex(array, predicate, fromIndex, fromRigth) {
  const { length } = array;
  let index = fromIndex + (fromRigth ? 1 : -1);

  while (fromRigth ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }

  return -1;
}

test("baseFindIndex", () => {
  expect(
    baseFindIndex(
      [1, 2, 3, 4, 5],
      function(x) {
        return x > 2;
      },
      1
    )
  ).toBe(2);
});
