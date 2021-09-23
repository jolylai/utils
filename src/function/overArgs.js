/**
 *  创建一个函数，调用func时参数为相对应的transforms的返回值。
 * @param {Function} func 要包裹的函数
 * @param {Function[]} [transforms] 转换参数的函数
 * @returns 新函数
 */
function overArgs(func, transforms = []) {
  return function (...args) {
    for (let i = 0; i < Math.min(args.length, transforms.length); i++) {
      args[i] = transforms[i].call(this, args[i]);
    }

    return func.apply(this, args);
  };
}

export default overArgs;
