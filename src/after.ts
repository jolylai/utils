/**
 *
 * @param n The number of calls before func is invoked
 * @param func The function to restrict
 * @return The function to restricted
 */
function after(n: number = 0, func: () => any): () => any {
  return function () {
    if (--n < 1) {
      // @ts-ignore
      return func.apply(this, arguments);
    }
  };
}

export default after;
