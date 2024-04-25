# 数据类型

JavaScript 是一种灵活的编程语言，支持多种数据类型。理解这些数据类型对于编写高效、可靠的代码至关重要。本文将深入探讨 JavaScript 中的各种数据类型及其特点，并提供代码示例帮助读者更好地理解。

## 1. 原始数据类型（Primitive Types）

原始数据类型是不可改变的，它们的值在被赋值给变量时被直接存储在内存中。

- **字符串（String）**：表示文本数据，用单引号（`'`）或双引号（`"`）括起来。

  ```javascript
  let message = 'Hello, world!';
  ```

- **数字（Number）**：表示数值。JavaScript 中的所有数字都是浮点型。

  ```javascript
  let count = 10;
  let price = 19.99;
  ```

  JavaScript 中的数字是不准确的，这是因为 JavaScript 采用 IEEE 754 标准来表示数字，它使用二进制系统来表示浮点数，而二进制系统无法精确地表示一些十进制小数，比如 `0.1` 和 `0.2`。这导致了一些意外的行为，例如：

  ```javascript
  console.log(0.1 + 0.2); // 0.30000000000000004
  ```

  这些特点从 ECMAScript 1（1997 年）开始就存在

  JavaScript 中还引入了一种特殊的数值类型，即 **BigInt**。BigInt 用于表示任意精度的整数，不受标准 JavaScript 数字类型的限制。

  ```javascript
  const bigNumber = 1234567890123456789012345678901234567890n;
  console.log(bigNumber);
  ```

  BigInt 是在 ECMAScript 2020 中引入的新特性。

- **布尔值（Boolean）**：表示真（`true`）或假（`false`）。

  ```javascript
  let isLogged = true;
  ```

  布尔值是 JavaScript 语言的基本数据类型之一，

- **空值（Null）**：表示一个空值或不存在的对象。

  ```javascript
  let data = null;
  ```

  空值是 JavaScript 语言的基本数据类型之一，

- **未定义（Undefined）**：表示一个未初始化的变量或一个不存在的属性。

  ```javascript
  let undefinedVariable;
  ```

  未定义也是 JavaScript 语言的基本数据类型之一，

- **符号（Symbol）**（ES6 新增）：表示唯一的标识符。

  ```javascript
  const uniqueID = Symbol('id');
  ```

  符号是 ECMAScript 6（2015 年）中新增的一种基本数据类型，用于表示独一无二的值。

## 2. 引用数据类型（Reference Types）

引用数据类型存储在堆内存中，变量中存储的是对该值的引用，而不是值本身。

- **对象（Object）**：用于存储各种数据和功能。

  ```javascript
  let person = {
    name: 'John',
    age: 30,
  };
  ```

  对象是 JavaScript 中最常用的引用数据类型之一，

- **数组（Array）**：用于按顺序存储数据。

  ```javascript
  let numbers = [1, 2, 3, 4, 5];
  ```

  数组也是 JavaScript 中常用的引用数据类型之一，

- **函数（Function）**：可重复使用的代码块。

  ```javascript
  function greet(name) {
    return 'Hello, ' + name + '!';
  }

  // 箭头函数示例
  const greetArrow = (name) => `Hello, ${name}!`;
  ```

  函数是 JavaScript 中的一等公民，箭头函数是 ECMAScript 6（2015 年）中新增的一种函数定义语法。

- **日期（Date）**：表示日期和时间。

  ```javascript
  let today = new Date();
  ```

  日期是 JavaScript 中的内置对象之一，用于处理日期和时间。

- **正则表达式（RegExp）**：用于匹配字符串的模式。

  ```javascript
  let pattern = /[a-z]+/;
  ```

  正则表达式是 JavaScript 中用于匹配字符串模式的一种强大工具。它的特性从 ECMAScript 3（1999 年）开始就存在

## 3. 特殊数据类型

JavaScript 还有一些特殊的数据类型，用于表示特定的值。

- **NaN**：表示一个非数字值。

  ```javascript
  let result = 10 / 'abc';
  console.log(result); // NaN
  ```

  NaN 是 JavaScript 中的特殊值之一，用于表示非数字。

- **Infinity**：表示一个无穷大的值

  ```javascript
  let maxNumber = Infinity;
  console.log(maxNumber); // Infinity
  ```

  Infinity 也是 JavaScript 中的特殊值之一，表示一个无穷大的数。

- **-Infinity**：表示一个无穷小的值

  ```javascript
  let minNumber = -Infinity;
  console.log(minNumber); // -Infinity
  ```

  -Infinity 也是 JavaScript 中的特殊值之一，表示一个无穷小的数。
