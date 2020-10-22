---
layout: post
title: '重学JavaScript-继承'
author: 'xuguanqun'
tags: 重学JavaScript
---

## 原型链的问题

原型链并不是完美的，它包含以下两个问题：

- 当原型链中包含引用类型值的原型时，该引用类型值会被所有的实例共享
- 在创建子类型时，不能向超类型的构造函数中传递参数

为了解决上述问题，我们很少会单独使用原型链，而使用继承则能弥补原型链的不足。

## 什么是继承

让一个普通的对象获得原本不属于它的属性和方法。

那么如何让一个对象获得原本不属于它的东西呢？有三种途径：

1.因为对象都是由 `constructor` 生成的，所以我们可以通过改变 `constructor` 来实现  
2.`constructor` 有一个关键的属性：`constructor.prototype`，所以改变原型也能达到目的。  
3.改变对象的属性，将要添加的内容复制过来。

### 借用构造函数

借用构造函数也叫经典继承

> 即在子类型构造函数的内部调用超类型构造函数

```js
function World() {
  this.color = ['red', 'green', 'blue'];
}

function Flower() {
  Word.call(this);
}

var f1 = new Flower();
f1.color.push('grey');
var f2 = new Flower();
console.log(f1.color); // ["red", "green", "blue", "grey"]
console.log(f2.color); // ["red", "green", "blue"]
// 可见引用类型值是独立的
```

借用构造函数，我们解决了原型链的两大问题

- 保证了原型链中引用类型值的独立
- 子类型创建时也能向父类型传参

这个方法的不足之处在于：构造函数的方法都是在函数中定义，函数无法复用，而超类型中定义的方法，对子类型而言是不可见的。

### 组合继承

组合继承也叫伪经典继承

> 使用原型链实现对原型属性和方法的继承，通过借用构造函数来实现对实例属性的继承

```js
function World(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}
World.prototype.getName = function () {
  console.log(this.name);
};
function Flower(name, type) {
  World.call(this, name); //继承实例属性，第一次调用World()
  this.type = type;
}
Flower.prototype = new World(); //继承父类方法,第二次调用World()
Flower.prototype.getType = function () {
  console.log(this.type);
};
var rose = new Flower('rose', 'flower');
rose.colors.push('yellow');
console.log(rose.colors); // ["red", "blue", "green", "yellow"]
console.log(rose.getName()); // rose
console.log(rose.getType()); // flower
```

组合继承避免了原型链和借用构造函数的缺点，而且 `instansof` 和 `isPrototypeOf()` 也能识别基于组合继承创建的对象，所以它成为了 `JavaScript` 中最常用的继承方式。

### 原型继承

待补充

### 寄生继承

待补充
