# isObject

> 检查 value 是否是 Object 的 language type。

> [typeof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof)

```js
function isObject(value) {
  const type = typeof value;
  return value != null && (type == "object" || type == "function");
}
```

### 类型

对象是 JavaScript 的基础。在 JavaScript 中一共有六种主要类型（术语是“语言类型”）：

- string
- number
- boolean
- null
- undefined
- object

注意，简单基本类型（string、boolean、number、null 和 undefined）本身并不是对象。
null 有时会被当作一种对象类型，但是这其实只是语言本身的一个 bug，即对 null 执行
typeof null 时会返回字符串 "object"。实际上，null 本身是基本类型。

### typeof 可能返回的值

- 'string'
- 'number'
- 'boolean'
- 'undefined'
- 'object'
- 'function'
- "symbol" (es6 新增)
