# dropRight

> 从数组中删除后 n 个元素，并返回该剩余元素的数组。

```js
import slice from "./slice";

function dropRight(arr, n = 1) {
  const length = arr == null ? 0 : arr.length;
  return length ? slice(arr, 0, n < 0 ? 0 : -n) : [];
}
```

::: tip

- 如果`n <= 0` 则为返回原数组

:::
