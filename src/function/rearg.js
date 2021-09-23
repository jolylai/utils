/**
 *
 * @param {Function} func 待调用的参数
 * @param {Array} [indexes] 排列参数的位置
 * @returns
 */
function rearg(func, indexes = []) {
  return function (...args) {
    for (let i = 0; i < Math.min(args.length, indexes.length); i++) {
      args;
    }

    return func.apply(this, args);
  };
}

export default rearg;
