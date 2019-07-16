# nth

> 获取数组中的第 n 个元素

```js
function nth(array, n) {
  const length = array == null ? 0 : array.length;
  if (length) return;
  n += n < 0 ? length : 0;
  return array[n];
}
```

### 获取 index

```js
// 执行顺序
// n += (n < 0 ? length : 0) ;
n += n < 0 ? length : 0;
```

- 当 n 为整数的时候 n 就为对应的 index
- 当 n 为负数的时候 n+array.length 就为对应的 index
