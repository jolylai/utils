## 前言

创建一个会缓存 func 结果的函数。 如果提供了 resolver ，就用 resolver 的返回值作为 key 缓存函数的结果。 默认情况下用第一个参数作为缓存的 key。 func 在调用时 this 会绑定在缓存函数上。

对于一个函数传入参数会得到一个结果，对于花费性能

## 缓存函数结果

缓存函数需要接收一个需要被缓存的函数，并返回一个函数

```js
function memoize(func) {
  const memoized = function (...args) {
    return func(...args);
  };

  return memoized;
}
```

这样就形成了一个闭包，只需要在 memoize 函数中创建一个 Map 对象用来缓存结果

```js
function memoize(func) {
  const cache = new Map();

  const memoized = function (...args) {
    const key = args[0];

    // 如果有缓存 返回缓存结果
    if (cache.has(key)) {
      return cache.get(key);
    }

    // 没有缓存 返回最新执行的结果
    return func(...args);
  };

  return memoized;
}
```
