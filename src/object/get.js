/**
 * Gets the value at `path` of `object`. If the resolved value is
 *
 * @param {Object} object The object to query
 * @param {String} path The path of the property to get
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 */

const get = (object, path, defaultValue) =>
  String.prototype.split
    .call(path, /[,[\].]+?/)
    .filter(Boolean)
    .reduce((cur, key) => (cur[key] ? cur[key] : defaultValue), object);

export default get;
