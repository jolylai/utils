# slice

计算 start 和 length，创建新的结果数组并返回

```js
function slice(array, start, end) {
  let length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }

  // undefined == null  -> true
  start = start == null ? 0 : start;
  end = end === undefined ? length : end;

  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  // end >= 0
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  // ???
  length = start > end ? 0 : (end - start) >>> 0;
  start >>>= 0;

  // 创建新数组
  let index = -1;
  const result = new Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}
```

::: tip

- `undefined == null`-> true
- 函数中的如果没传入值的话则为 `undefined`

:::
