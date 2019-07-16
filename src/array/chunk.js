/**
 * Creates an array of elements split into groups the length of size.
 * If array can't be split evenly, the final chunk will be the remaining elements.
 *
 * @param {Array} array The array to process.
 * @param {number} [size=1]  The length of each chunk
 * @returns
 */

const chunk = (array, size = 1) => {
  if (array == null) return [];
  const resultLength = Math.ceil(array.length / size);
  return Array.from({ length: resultLength }).map((_, index) =>
    array.slice(index * size, (index + 1) * size)
  );
};

export default chunk;
