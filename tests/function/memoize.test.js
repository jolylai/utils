import memoize from "../../src/memoize";

describe("memoize", () => {
  test("should memoize the result", () => {
    const fn = jest.fn((a) => {
      return a;
    });

    const memoized = memoize(fn);

    expect(memoized(1)).toBe(1);
    expect(fn).toBeCalledTimes(1);

    expect(memoized(1)).toBe(1);
    expect(fn).toBeCalledTimes(1);

    expect(memoized(2)).toBe(2);
    expect(fn).toBeCalledTimes(2);
  });

  test("should modify the cache", () => {
    const fn = jest.fn((a) => {
      return a;
    });

    const memoized = memoize(fn);

    expect(memoized(1)).toBe(1);
    expect(fn).toBeCalledTimes(1);

    expect(memoized.cache.has(1)).toBe(true);
  });

  test("should resolver the cache key", () => {
    const fn = jest.fn((a) => {
      return a;
    });

    const memoized = memoize(fn, (a) => {
      return a * 2;
    });

    expect(memoized(1)).toBe(1);
    expect(fn).toBeCalledTimes(1);

    expect(memoized.cache.has(2)).toBe(true);
  });
});
