import defer from "../../src/defer";

describe("defer", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("should call func after 1 millisecond", () => {
    const func = jest.fn();

    defer(func);

    expect(func).not.toBeCalled();

    jest.runAllTimers();

    expect(func).toHaveBeenCalledTimes(1);
  });

  // test("should defer work", () => {});
});
