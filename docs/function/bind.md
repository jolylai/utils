## 基础使用

```js
let obj = {
  x: 0,
  y: 0,
  dx: 5,
  dy: 7,
};

var step = function () {
  this.x += this.dx;
  this.y += this.dy;
};

// create an obj.step with _.bind
obj.step = _.bind(step, obj);

// I can now call step, and this will refer to obj
obj.step();

console.log(obj.x, obj.y); // 5,7
```

## 实现

bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

<<< lib/bind.js

## Function.prototype.bind

```js
//  Function.prototype.bind 创建 obj.step 方法
obj.step = step.bind(obj);

// 调用step 方法， step 中的this 会指向obj
obj.step();

console.log(obj.x, obj.y); // 5,7
```

较于 `_.bind()` 只需要调用函数的 bind 方法只需要传入 this 指向的对象和调用函数所需的参数

## setTimeout

```js
let user = {
  name: "Jake",
  say: function () {
    console.log("Hello " + this.name + "!");
  },
};

user.say(); // Hello, Jake!
setTimeout(user.say, 100); // Hello, undefined!
setTimeout(user.say.bind(user), 1000); // Hello, Jake!
```

## prototype

```js
let _ = require("lodash");

let obj = {
  0: "hi",
  1: "how",
  2: "are",
  3: "you",
  4: "doing",
  5: "today",
  length: 6,
};

obj.slice = _.bind(Array.prototype.slice, obj);

console.log(obj.slice(1, 4)); // [ 'how', 'are', 'you' ]
```
