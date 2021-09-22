function bindKey(object: { [key: string]: any }, key: string) {
  const func = object[key];

  if (typeof func !== "function") {
    throw new Error("must be function");
  }

  return func.bind(object);

  // return function (...args: any[]) {
  //   return func.apply(object, args);
  // };
}

export default bindKey;
