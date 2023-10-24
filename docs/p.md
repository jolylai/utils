# p

用于管理多个 Promise 的实用程序。

```js
const items = [1, 2, 3, 4, 5]

await p(items)
  .map(async (i) => await multiply(i, 3))
  .filter(async (i) => await isEven(i))
// [6, 12]
```

## 并发控制
