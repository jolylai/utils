import bind from "../src/bind";

describe("bind", () => {
  test("should bind work", () => {
    const obj = { a: 1 };

    function foo() {
      return this;
    }

    const bindFoo = bind(foo, obj);

    expect(bindFoo()).toBe(obj);
  });
});
