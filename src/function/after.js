/**
 * 当 func 被调用n或更多次之后将马上触发func 。
 * @param {Number} n The number of calls before func is invoked
 * @param {Function} func The function to restrict
 * @return The function to restricted
 */
function after(n = 0, func) {
  return function (...args) {
    if (--n < 1) {
      return func.apply(this, args);
    }
  };
}

export default after;
