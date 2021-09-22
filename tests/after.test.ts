import after from "../src/after";

describe("after", () => {
  test("should call after 2", () => {
    const fn = jest.fn();

    const done = after(2, fn);

    done();
    expect(fn).toBeCalledTimes(0);

    done();
    expect(fn).toBeCalledTimes(1);
  });
});
