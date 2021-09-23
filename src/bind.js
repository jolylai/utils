/**
 *
 * @param {Function} func 绑定的函数
 * @param {*} thisArg func 绑定的this对象。
 * @returns
 */
function bind(func, thisArg) {
  return function (...args) {
    return func.apply(thisArg, args);
  };
}

export default bind;
