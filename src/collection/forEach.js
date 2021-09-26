/**
 *
 * @param {Array | Object} collection 一个用来迭代的集合
 * @param {Function} iteratee 迭代器
 */
function forEach(collection, iteratee) {
  for (let [key, value] of Object.entries(collection)) {
    if (iteratee(value, key, collection) === false) break;
  }
}

export default forEach;
