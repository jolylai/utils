import get from "./get";

/**
 * 创建一个数组，值来自 object 的paths路径相应的值。
 *
 * @param {Object} object
 * @param {string[]} paths
 * @returns Array
 */

const at = (object, paths) => {
  return paths.map(path => get(object, path));
};

export default at;
