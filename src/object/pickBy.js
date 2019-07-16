/**
 * Creates an object composed of the object properties predicate returns truthy for.
 * The predicate is invoked with two arguments: (value, key).
 *
 * @param {Object} object
 * @param {Function} [predicate=Boolean]
 * @returns Return the new Object
 */
const pickBy = (object, predicate = Boolean) => {
  const keys = Object.keys(object);
  return keys.reduce((result, key) => {
    const value = object[key];
    if (!predicate(value, key)) return result;
    return Object.assign(result, { [key]: value });
  }, {});
};

export default pickBy;
