---
layout: post
title: '重学JavaScript-深入理解instanceof'
author: 'xuguanqun'
tags: 重学JavaScript
---

## 作用

`instanceof` 的作用是检测某个对象是否属于某个构造函数。利用这个特性，我们能进行对象类型的判断。比如：`[] instanceof Array` ，我们通过判断一个数组是否属于 `Array` 这个对象，就能判断出它是否是个数组。

```js
//基本用法
[] instanceof Array; //true
({} instanceof Object); //true
```

判断实例与原型的关系

```js
var Person = function () {};
var student = new Person();
console.log(student instanceof Person); //true
```

也可以检测父类型

```js
function Person() {}
function Student() {}
var p = new Person();
Student.prototype = p; //继承原型
var xgq = new Student();
console.log(xgq instanceof Student); //true
console.log(xgq instanceof Person); //true
```

## 改写

`instanceof` 可以进行改写，通过修改该方法的判断逻辑，我们可以得到我们想要的判断结果。

> `Symbol.hasInstance` 用于判断某对象是否为某构造器的实例。因此你可以用它自定义 `instanceof` 操作符在某个类上的行为。—— MDN

以下为 `MDN` 示例代码

```js
class MyArray {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}
console.log([] instanceof MyArray); // true
```

通过修改 `Symbol.hasInstance` 属性就可以修改 `instanceof` 的判断逻辑。我们可以自己新建一个构造函数，自己写里面的判断逻辑，得到我们想要得到的判断结果。

```js
class isXGQ {
  static [Symbol.hasInstance](str) {
    return str === 'xgq';
  }
}
console.log('xgq' instanceof isXGQ); // true
```

## 原理

我们不难看出， `instanceof` 实际上就是通过原型链向上进行查找，遍历整个原型链来查找出他们之间的关联。而判断实例与原型的关系，我们就要用到这两个属性： `__proto__` 与 `prototype` ，通过 `proto` 这个属性不断的向上进行查找，和 `prototype` 进行比对来实现。

## 实现

```js
function myInstanceof(left, right) {
  left = left.__proto__;
  right = right.prototype;
  while (true) {
    if (left === null || left === undefined) return false;
    if (right === left) return true;
    left = left.__proto__;
  }
}
```
