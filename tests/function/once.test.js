import once from "../../src/once";

describe("once", () => {
  test("should once work", () => {
    const fn = jest.fn((a, b) => {
      return a + b;
    });

    const only = once(fn);

    expect(fn).not.toBeCalled();

    expect(only(1, 2)).toBe(3);
    expect(fn).toBeCalledTimes(1);

    expect(only(2, 3)).toBe(3);
    expect(fn).toBeCalledTimes(1);
  });
});
