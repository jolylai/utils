function curry(func, arity) {
  const { length } = func;

  let args = [];

  return function curried(...partial) {
    args.push(...partial);

    if (args.length >= length) {
      const result = func.apply(this, args);
      args = [];

      return result;
    } else {
      return curried;
    }
  };
}

export default curry;
