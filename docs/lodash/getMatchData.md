# getMatchData

> [isStrictComparable](/lodash/isStrictComparable.md)

```js
function getMatchData(object) {
  const result = keys(object);
  let length = result.length;

  while (length--) {
    const key = result[length];
    const value = object[key];
    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}
```
