import flip from "../../src/flip";

describe("flip", () => {
  test("should flip work", () => {
    const flipped = flip((...args) => {
      return args;
    });

    expect(flipped(1, 2, 3)).toEqual([3, 2, 1]);
  });
});
