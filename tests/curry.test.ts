import curry from "../src/curry";

describe("curry", () => {
  test("should curry", () => {
    const abc = (a: number, b: number, c: number) => {
      return [a, b, c];
    };

    const curried = curry(abc);

    expect(curried(1)(2)(3)).toEqual([1, 2, 3]);
    expect(curried(1, 2)(3)).toEqual([1, 2, 3]);
    expect(curried(1, 2, 3)).toEqual([1, 2, 3]);
  });
});
