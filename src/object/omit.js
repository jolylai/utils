/**
 * Returns a copy of the object, filtered to omit the keys specified.
 *
 * @param {Object} object
 * @param {String[]} paths
 * @returns
 */
const omit = (object, paths) => {
  const keys = Object.keys(object);
  const exclude = keys.filter(key => !paths.includes(key));

  const cb = (result, path) => Object.assign(result, { [path]: object[path] });
  return exclude.reduce(cb, {});
};

export default omit;
