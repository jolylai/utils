import flatten from "./flatten";

/**
 *
 *
 * @param {Array} array The array to inspect.
 * @param {...Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @returns Returns the new array of filtered values.
 */
const differenceBy = (array, ...values) => {
  let iteratee;
  let _values = flatten(values);
  let last = _values.slice(-1)[0];

  if (typeof last === "function") {
    iteratee = last;
    _values.pop();
    _values = _values.map(value => iteratee(value));
  }

  return array.filter(value => {
    const _value = iteratee ? iteratee(value) : value;
    return !_values.includes(_value);
  });
};

export default differenceBy;
