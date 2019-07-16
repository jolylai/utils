import flatten from "./flatten";

/**
 *Creates an array of array values not included in the other given arrays
 *
 * @param {Array} array The array to inspect.
 * @param {...Array} values
 * @returns Returns the new array of filtered values.
 */
const difference = (array, ...values) => {
  const _values = flatten(values);
  return array.filter(value => !_values.includes(value));
};

export default difference;
