function memoize(func, resolver) {
  const memoized = function (...args) {
    const key = typeof resolver === "function" ? resolver(...args) : args[0];

    console.log("this", this);
    if (memoized.cache.has(key)) {
      return memoized.cache.get(key);
    }

    const result = func(...args);

    memoized.cache.set(key, result);

    return result;
  };

  memoized.cache = new Map();

  return memoized;
}

export default memoize;
