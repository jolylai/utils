import overArgs from "../../src/overArgs";

describe("overArgs", () => {
  const double = (n) => n * 2;
  const square = (n) => n * n;

  test("should overArgs work", () => {
    const fn = jest.fn();
    const func = overArgs(fn, [double, square]);

    func(1, 2);

    expect(fn).toBeCalledWith(2, 4);
  });

  test("should overArgs work when arguments length not equal transforms length", () => {
    const fn = jest.fn();
    const func = overArgs(fn, [double]);

    func(1, 2);

    expect(fn).toBeCalledWith(2, 2);
  });
});
