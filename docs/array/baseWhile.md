# baseWhile

```js
function baseWhile(array, predicate, isDrop, fromRight) {
  const { length } = array;
  let index = fromRight ? length : -1;

  // 当predicate返回false后不再执行predicate
  while (
    (fromRight ? index-- : ++index < length) &&
    predicate(array[index], index, array)
  ) {}

  // isDrop 返回剩余的元素还是移除的元素
  return isDrop
    ? slice(array, fromRight ? 0 : index, fromRight ? index + 1 : length)
    : slice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
}
```
