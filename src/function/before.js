/**
 *
 * @param {Number} n The number of calls before func is invoked
 * @param {Function} func The function to restrict
 * @return The function to restricted
 */
function before(n = 0, func) {
  let result;

  return function () {
    if (n-- > 0) {
      result = func.apply(this, arguments);
    }

    return result;
  };
}

export default before;
