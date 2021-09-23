## 前言

创建一个函数，调用 func 时参数为相对应的 transforms 的返回值。

## 实现

为了更高的自定义程度，为每个参数提供一个转换参数，所以 transforms 是一个函数数组

```js
function overArgs(func, transforms = []) {
  return function (...args) {
    // 在这对参数做转换

    return func.apply(this, args);
  };
}
```

在函数参个数和提供的转换函数的个数一致的时候能很容易对参数做出如下转换

```js
function overArgs(func, transforms = []) {
  return function (...args) {
    for (let i = 0; i < transforms.length; i++) {
      args[i] = transforms[i](args[i]);
    }

    return func.apply(this, args);
  };
}
```

可以在函数参个数和提供的转换函数的个数不一致的时候又该如何转换

```js
function overArgs(func, transforms = []) {
  return function (...args) {
    for (let i = 0; i < Math.min(args.length, transforms.length); i++) {
      args[i] = transforms[i](args[i]);
    }

    return func.apply(this, args);
  };
}
```

最终实现

<<< src/overArgs.js
