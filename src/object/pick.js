/**
 * Creates an object composed of the picked object properties.
 *
 * @param {Object} object
 * @param {String []} paths
 * @returns {Object} Return the new Object
 */
const pick = (object, paths) =>
  paths.reduce((result, path) => {
    const value = object[path];
    if (!value) return result;
    return Object.assign(result, { [path]: value });
  }, {});

export default pick;
