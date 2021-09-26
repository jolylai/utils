## 前言

迭代对象和数组经常用到，而对于迭代对象和迭代数组却有不同的方法，需要有一个方法同时可以迭代对象和数组

## 迭代数组

for 循环

```js
function forEach(collection, iteratee) {
  for (let i = 0; i < collection.length; i++) {
    if (iteratee(collection[i], i, collection) === false) break;
  }
}
```

while 循环

```js
function arrayEach(collection, iteratee) {
  let index = -1;
  const length = array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) break;
  }

  return array;
}
```

`Object.entries()`

```js
function forEach(collection, iteratee) {
  for (let [key, value] of Object.entries(collection)) {
    if (iteratee(value, key, collection) === false) break;
  }
}
```

`Object.entries()` 数组下标 key 是一个字符串

## 迭代类数组

判断类数组

```js
function isLength (value){
  return typeof value === 'number' && value > -1 && value % 1 = 0 && value < Number.MAX_SAFE_INTEGER
}

function isArrayLike (value){
  return value != null &&  typeof value !== 'function' && isLength(value)
}
```

## 迭代对象

for...in

```js
function forEach(collection, iteratee) {
  for (let key in collection) {
    if (iteratee(collection[key], key, collection) === false) break;
  }
}
```

for...in, 会枚举原型链中的属性

```js
const proto = {
  a: 1,
  b: 2,
};

const obj = Object.create(proto);
```

## 总结
