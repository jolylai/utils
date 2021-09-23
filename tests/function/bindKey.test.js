import bindKey from "../../src/bindKey";

describe("bindKey", () => {
  test("should binKey work", () => {
    const object = {
      user: "fred",
      greet: function (greeting) {
        return greeting + " " + this.user;
      },
    };

    const bindKeyFunc = bindKey(object, "greet");

    expect(bindKeyFunc("hi")).toBe("hi fred");
  });
});
