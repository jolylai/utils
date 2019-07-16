# drop

> 从数组中删除前 n 个元素，并返回该剩余元素的数组。

```js
import slice from "./slice";

function drop(arr, n = 1) {
  const length = arr == null ? 0 : arr.length;
  // n是否小于0
  return length ? slice(arr, n < 0 ? 0 : n, length) : [];
}
```

::: tip

- 功能如同 [Array.prototype.shift()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)，但`Array.prototype.shift()`会更改数组的长度

:::
