# dropWhile

> 裁剪数组，起点从 predicate 返回假值开始

> [baseWhile](/lodash/baseWhile.md)

```js
import baseWhile form './baseWhile'

function dropRightWhile(array, predicate) {
  return array != null && array.length
    ? baseWhile(array, predicate, true, false)
    : [];
}
```
