import forEach from "../../src/collection/forEach";

describe("forEach", () => {
  test("should forEach an object", () => {
    const fn = jest.fn();

    const obj = { a: 1, b: 2 };

    forEach(obj, fn);

    expect(fn).toBeCalledTimes(2);

    expect(fn).toBeCalledWith(1, "a", obj);
    expect(fn).toBeCalledWith(2, "b", obj);
  });

  test("should break when iteratee return false", () => {
    const fn = jest.fn((value) => value !== 1);

    const obj = { a: 1, b: 2 };

    forEach(obj, fn);

    expect(fn).toBeCalledTimes(1);
    expect(fn).toBeCalledWith(1, "a", obj);
  });

  test("should not iteratee prototype", () => {
    const fn = jest.fn((value) => value !== 1);

    const obj = { a: 1, b: 2 };

    forEach(Object.create(obj), fn);

    expect(fn).toBeCalledTimes(0);
  });

  test("should forEach an Array", () => {
    const arr = [1, 2];

    const fn = jest.fn();

    forEach(arr, fn);

    expect(fn).toBeCalledWith(1, "0", arr);

    expect(fn).toBeCalledWith(2, "1", arr);
  });
});
