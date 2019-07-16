# dropRightWhile

> 从右边开始裁剪数组，起点从 predicate 返回假值开始。

> [baseWhile](/lodash/baseWhile.md)

### example ⭐️

```js
var users = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "pebbles", active: false }
];

_.dropRightWhile(users, function(o) {
  return !o.active;
});
// => objects for ['barney']

// 下面的例子如何实现 ⭐️
// The `_.matches` iteratee shorthand.
_.dropRightWhile(users, { user: "pebbles", active: false });
// => objects for ['barney', 'fred']

// The `_.matchesProperty` iteratee shorthand.
_.dropRightWhile(users, ["active", false]);
// => objects for ['barney']

// The `_.property` iteratee shorthand.
_.dropRightWhile(users, "active");
// => objects for ['barney', 'fred', 'pebbles']
```

```js
import baseWhile form './baseWhile'

function dropRightWhile(array, predicate) {
  return array != null && array.length
    ? baseWhile(array, predicate, true, true)
    : [];
}
```

::: tip

- 返回值为被移除的元素的数组

:::
