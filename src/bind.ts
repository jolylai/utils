function bind(func: () => any, thisArg: any) {
  return function (...args: []) {
    return func.apply(thisArg, args);
  };
}

export default bind;
