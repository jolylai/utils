/**
 *
 * @param n The number of calls before func is invoked
 * @param func The function to restrict
 * @return The function to restricted
 */
function before(n: number = 0, func: () => any): () => any {
  let result: any;

  return function () {
    if (n-- > 0) {
      // @ts-ignore
      result = func.apply(this, arguments);
    }
    return result;
  };
}

export default before;
