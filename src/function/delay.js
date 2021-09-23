function delay(func, wait = 0, ...args) {
  if (typeof func !== "function") {
    throw new TypeError("Expected function");
  }

  return setTimeout(func, +wait, ...args);
}

export default delay;
