function curry(func: (...all: any[]) => any, arity?: number) {
  const { length } = func;

  let args: any[] = [];

  return function curried(...partial: any[]) {
    args.push(...partial);

    if (args.length >= length) {
      // @ts-ignore
      const result = func.apply(this, args);
      args = [];

      return result;
    } else {
      return curried;
    }
  };
}

export default curry;
