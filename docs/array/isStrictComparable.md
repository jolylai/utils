# isStrictComparable

> 值是否严格相等

> [isObject](/lodash/isObject.md)

```js
import isObject from "../isObject.js";

function isStrictComparable(value) {
  return value === value && !isObject(value);
}
```
