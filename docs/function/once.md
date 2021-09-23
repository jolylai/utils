## 前言

创建一个只能调用 func 一次的函数。 重复调用返回第一次调用的结果。 func 调用时， this 绑定到创建的函数，并传入对应参数。

## 使用

```js
var initialize = _.once(createApplication);
initialize();
initialize();
```

## 实现

<<< src/once.js
