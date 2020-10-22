---
layout: post
title: '重学JavaScript-变量类型的判断与转换'
author: 'xuguanqun'
tags: 重学JavaScript
---

### 类型判断

- typeof

```js
//用法
var a = 10;
typeof a; //'number'
typeof a; //'number'
```

typeof 判断原始类型时，有一种数据类型是个例外：`null`。

```js
typeof null; //'object'
```

而用 `typeof` 去判断对象类型，除了函数其余都会判断为 `object`，所以 `typeof` 并不能准确判断出变量究竟是什么类型。

```js
typeof []; //'object'
typeof {}; //'object'
typeof console.log; //'function'
```

- instanceof

如果我们想判断一个对象的正确类型，这时候可以考虑使用 `instanceof` ，因为内部机制是通过原型链来判断的.

```js
const Person = function () {};
const p1 = new Person();
p1 instanceof Person; // true

var str = 'hello world';
str instanceof String; // false

var str1 = new String('hello world');
str1 instanceof String; // true
```

但是直接通过 `instanceof` 来判断原始类型却是不行的，但是我们可以通过改写 `Symbol.hasInstance` 来让 `instanceof` 能够判断原始类型。

```js
class PrimitiveString {
  static [Symbol.hasInstance](x) {
    return typeof x === 'string';
  }
}
console.log('hello world' instanceof PrimitiveString); // true
```

通过 `Symbol.hasInstance` 我们能自定义 `instanceof` 的内部判断逻辑，我们将代码改为用 `typeof` 进行原始类型的判断，所以能正确判断类型

### 类型转换

首先我们要知道，在 JS 中类型转换只有三种情况，分别是：

- 转换为布尔值
- 转换为数字
- 转换为字符串

  |        原始值         | 转换目标 |                         结果                         |
  | :-------------------: | :------: | :--------------------------------------------------: |
  |        number         |  布尔值  |              除了 0、-0、NaN，都为 true              |
  |        string         |  布尔值  |               除了空字符串，都为 true                |
  |    undefined、null    |  布尔值  |                        false                         |
  |       引用类型        |  布尔值  |                         true                         |
  |        number         |  字符串  |                        1=>'1'                        |
  | Boolean、函数、Symbol |  字符串  |                        'true'                        |
  |         数组          |  字符串  |                     [1,2]=>'1,2'                     |
  |         对象          |  字符串  |                  '[object Object]'                   |
  |        string         |   数字   |                   '1'=>1，'a'=>NaN                   |
  |         数组          |   数字   | 空数字为 0，存在一个元素且为数组转数字，其他情况 NaN |
  |         null          |   数字   |                          0                           |
  |  除了数组的引用类型   |   数字   |                         NaN                          |
  |        Symbol         |   数字   |                         抛错                         |

#### 转 Boolean

在条件判断时，除了 `undefined，` `null`， `false`， `NaN`， `''`， `0`， `-0`，其他所有值都转为 `true`，包括所有对象。

#### 对象转原始类型

对象在转换类型的时候，会调用内置的 `[[ToPrimitive]]` 函数，对于该函数来说，算法逻辑一般来说如下：

首先判断是否为原始类型，如果已经是原始类型了，那就不需要转换了
如果不是，则会调用 `x.toString()`，转换为基础类型的话就返回转换的值。不是字符串类型的话就先调用 `valueOf`，结果不是基础类型的话再调用 `toString`
调用 `x.valueOf()`，如果转换为基础类型，就返回转换的值
如果都没有返回原始类型，就会报错

当然你也可以重写 `Symbol.toPrimitive` ，该方法在转原始类型时调用优先级最高。

```js
let a = {
  valueOf() {
    return 0;
  },
  toString() {
    return '1';
  },
  [Symbol.toPrimitive]() {
    return 2;
  }
};
1 + a; // => 3
```
