function once(func) {
  let result;
  let called = false;
  console.log("this: ", this);

  return function (...args) {
    if (called) return result;

    called = true;
    return (result = func.apply(this, args));
  };
}

export default once;
