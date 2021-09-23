/**
 *  推迟调用func，直到当前堆栈清理完毕。 调用时，任何附加的参数会传给func。
 * @param {Function} func 要延时的函数
 * @param  {...any} args 传递给延时函数的参数
 * @returns 计时器 id
 */
function defer(func, ...args) {
  return setTimeout(func, 1, ...args);
}

export default defer;
