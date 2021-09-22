import before from "../src/before";

describe("before", () => {
  test("should before work", () => {
    const fn = jest.fn();

    const once = before(1, fn);

    expect(fn).toBeCalledTimes(0);

    once();
    expect(fn).toBeCalledTimes(1);

    once();
    expect(fn).toBeCalledTimes(1);
  });
});
