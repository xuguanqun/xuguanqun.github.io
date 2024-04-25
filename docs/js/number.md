# 数字

## 基本概念

JavaScript 的数字类型是基于 IEEE 754 标准的 64 位浮点数表示。这意味着所有数字都以 64 位的二进制格式存储，其中一部分用于表示整数部分，另一部分用于表示小数部分和指数部分。除了常规的整数和浮点数外，JavaScript 还有一些特殊的数字值，如 NaN（Not a Number）、Infinity 和-Infinity，它们用于表示非数值和无穷大的情况。

## 创建数字

在 JavaScript 中，可以使用字面量直接创建数字：

```javascript
let num1 = 42; // 整数
let num2 = 3.14; // 浮点数
```

## 常用方法

### 1. 数字转字符串

```javascript
let num = 123;
let str = num.toString(); // 将数字转换为字符串
```

### 2. 四舍五入

```javascript
let num = 3.56;
let rounded = Math.round(num); // 四舍五入
```

### 3. 取整

```javascript
let num = 5.67;
let integerPart = Math.floor(num); // 向下取整
```

### 4. 最大值和最小值

```javascript
let max = Math.max(10, 20, 30); // 找出最大值
let min = Math.min(10, 20, 30); // 找出最小值
```

### 5. `Number.prototype.toFixed()`

将数字转换为指定小数位数的字符串表示形式，并返回结果。

```javascript
let num = 3.14159;
let fixedStr = num.toFixed(2); // 返回: "3.14"
```

### 6. `Number.prototype.toPrecision()`

以指定的精度返回该数值对象的字符串表示。

```javascript
let num = 1234.5678;
let precisionStr = num.toPrecision(4); // 返回: "1235"
```

### 7. `Number.prototype.valueOf()`

返回指定对象的原始值。通常由 JavaScript 在内部调用，并作为该对象的默认转换值。

```javascript
let num = new Number(42);
let value = num.valueOf(); // 返回: 42
```

## ES6 新特性

### 1. 二进制和八进制字面量

ES6 引入了二进制和八进制字面量的支持：

```javascript
let binaryNum = 0b1010; // 二进制字面量
let octalNum = 0o755; // 八进制字面量
```

### 2. `Number.isInteger()` 方法

判断一个值是否为整数：

```javascript
Number.isInteger(42); // true
Number.isInteger(3.14); // false
```

### 3. `Number.isNaN()` 方法

判断一个值是否为 NaN：

```javascript
Number.isNaN(NaN); // true
Number.isNaN('hello'); // false
```

### 4. `Number.parseFloat()` 和 `Number.parseInt()` 方法

用于解析字符串为浮点数或整数：

```javascript
Number.parseFloat('3.14'); // 3.14
Number.parseInt('42'); // 42
```

## 注意事项

1. **精度问题**：由于浮点数采用二进制表示，可能存在精度丢失的问题，例如 `0.1 + 0.2 !== 0.3`。
2. **NaN**：表示不是一个数字的特殊值，注意使用 `isNaN()` 进行判断。
3. **Infinity**：表示无穷大，可以通过 `isFinite()` 判断一个值是否有限。

## 新增内容

4. **数字运算符**：JavaScript 支持各种数字运算符，包括加法 `+`、减法 `-`、乘法 `*`、除法 `/`、求余 `%` 等。此外，ES6 还引入了指数运算符 `**`，用于计算一个数的乘方。

```javascript
let sum = 10 + 5; // 加法
let difference = 10 - 5; // 减法
let product = 10 * 5; // 乘法
let quotient = 10 / 5; // 除法
let remainder = 10 % 3; // 求余
let exponentiation = 2 ** 3; // 指数运算
```

5. **安全整数**：JavaScript 中有最大安全整数 `Number.MAX_SAFE_INTEGER` 和最小安全整数 `Number.MIN_SAFE_INTEGER`，超出这个范围的整数会丢失精度。

```javascript
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
```

6. **数值比较**：由于浮点数精度问题，比较两个浮点数是否相等时应该使用误差范围。

```javascript
function areEqual(num1, num2) {
  return Math.abs(num1 - num2) < Number.EPSILON;
}

console.log(areEqual(0.1 + 0.2, 0.3)); // true
```

以上是关于 JavaScript 中数字类型的详细介绍。希望这篇文章能够帮助你更好地理解和应用 JavaScript 中的数字。如果有任何疑问或建议，欢迎留言讨论！
