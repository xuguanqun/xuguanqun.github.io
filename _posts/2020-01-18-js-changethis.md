---
layout: post
title: '重学JavaScript-apply、call、bind'
author: 'xuguanqun'
tags: 重学JavaScript
---

通过使用 `apply`、`​call`、`bind` ，我们可以改变 `this` 的指向。

## apply

**apply()** 方法调用一个具有给定 `this` 值的函数，以及作为一个数组（或类似数组对象）提供的参数。

> tip 语法
> func.apply(thisArg, [argsArray])

```js
var name = 'xgq';
var obj = {
  name: 'obj'
};
function a() {
  console.log(this.name, arguments[0]); // arguments 是一个对应于传递给函数的参数的类数组对象
}
a(); // xgq undefined
a.apply(obj, [123, 321]); // obj 123
```

直接执行函数 a，是在全局作用域中。而使用 `apply` 函数可以改变函数执行时 `this` 的指向，将 `this` 指向绑定到 `obj` 这个对象。

## call

**call()** 方法使用一个指定的 `this` 值和单独给出的一个或多个参数来调用一个函数。

> tip 语法
> function.call(thisArg, arg1, arg2, ...)

```js
var name = 'xgq';
var obj = {
  name: 'obj'
};
function a() {
  console.log(this.name, arguments[0]);
}
a(); // xgq undefined
a.call(obj, [123, 321]); // obj [123,321]
```

`call` 的用法和 `apply` 相似。

## bind

**bind()** 方法创建一个新的函数，在 **bind()** 被调用时，这个新函数的 `this` 被指定为 **bind()** 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

> tip 语法
> function.bind(thisArg[, arg1[, arg2[, ...]]])

```js
var name = 'xgq';
var obj = {
  name: 'obj'
};
function a() {
  console.log(this.name, arguments[0]);
}
a(); // xgq undefined
a.bind(obj, [123, 321])(); // obj [123,321]
```

`bind` 同样可以完成 `this` 指向的变更。

## apply、​call、bind 的区别

- apply 和 call

`apply` 和 `call` 的用法相似，不同之处在于 `apply` 接收的是一个数组，数组中包含多个参数；而 `call` 则是直接接收若干个参数。

```js
func.apply(obj, [1, 2, 3, 4, 5]);
func.call(obj, 1, 2, 3, 4, 5);
```

- bind

而 `bind` 则与 `apply` 和 `call` 不同，`bind` 不会马上调用这个函数，而是返回一个新的函数，需要手动执行这个新的函数。

```js
func.bind(obj, 1, 2, 3, 4, 5)();
```
