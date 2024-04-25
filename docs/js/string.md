# 字符串

JavaScript 中的字符串是一种基本的数据类型，用于存储和操作文本数据。本文将深入探讨 JavaScript 中常用的字符串方法，包括 ES6 及其以后版本引入的新语法，以及 String.prototype 对象的方法。

## 1. 创建字符串

在 JavaScript 中，可以使用单引号、双引号或模板字符串（反引号）来创建字符串。

```javascript
let singleQuotes = '单引号字符串';
let doubleQuotes = '双引号字符串';
let templateString = `模板字符串`;
```

## 2. 获取字符串长度

使用 `length` 属性获取字符串的长度。

```javascript
let str = 'Hello, World!';
console.log(str.length); // 输出： 13
```

## 3. 访问字符串中的字符

可以使用索引访问字符串中的单个字符。

```javascript
let str = 'JavaScript';
console.log(str[0]); // 输出： "J"
```

## 4. 字符串连接

可以使用 `+` 运算符或模板字符串进行字符串连接。

```javascript
let str1 = 'Hello';
let str2 = 'World';
console.log(str1 + ', ' + str2 + '!'); // 输出： "Hello, World!"
console.log(`${str1}, ${str2}!`); // 输出： "Hello, World!"
```

## 5. 查找字符串

- `indexOf()` 和 `lastIndexOf()` 方法用于查找字符串首次和最后一次出现的位置。

```javascript
let str = 'Hello, World!';
console.log(str.indexOf('World')); // 输出： 7
console.log(str.lastIndexOf('o')); // 输出： 8
```

## 6. 切片字符串

- 使用 `slice(start, end)`、`substring(start, end)` 和 `substr(start, length)` 方法从字符串中提取子串。

```javascript
let str = 'JavaScript';
console.log(str.slice(0, 4)); // 输出： "Java"
console.log(str.substring(4, 10)); // 输出： "Script"
console.log(str.substr(4, 6)); // 输出： "Script"
```

## 7. 替换字符串

使用 `replace(oldValue, newValue)` 方法替换字符串中的子串。

```javascript
let str = 'Hello, World!';
console.log(str.replace('World', 'JavaScript')); // 输出： "Hello, JavaScript!"
```

## 8. 大小写转换

使用 `toUpperCase()` 和 `toLowerCase()` 方法将字符串转换为大写或小写。

```javascript
let str = 'JavaScript';
console.log(str.toUpperCase()); // 输出： "JAVASCRIPT"
console.log(str.toLowerCase()); // 输出： "javascript"
```

## 9. 拆分与连接字符串

使用 `split(separator)` 方法将字符串拆分为子串数组，使用指定的分隔符。

```javascript
let str = 'apple, banana, orange';
console.log(str.split(', ')); // 输出： ["apple", "banana", "orange"]
```

## String.prototype 对象的方法

除了上述方法外，JavaScript 还提供了一些 String.prototype 对象的方法，例如：

- `charAt(index)`：返回指定索引位置的字符。

```javascript
let str = 'JavaScript';
console.log(str.charAt(4)); // 输出： "S"
```

- `charCodeAt(index)`：返回指定索引位置的字符的 Unicode 编码。

```javascript
let str = 'JavaScript';
console.log(str.charCodeAt(4)); // 输出： 83
```

- `startsWith(searchString, position)`、`endsWith(searchString, length)` 和 `includes(searchString, position)` 方法用于检查字符串的开头、结尾和包含关系。

```javascript
let str = 'JavaScript';
console.log(str.startsWith('Java')); // 输出： true
console.log(str.endsWith('Script')); // 输出： true
console.log(str.includes('Script')); // 输出： true
```

- `repeat(count)` 方法用于重复字符串指定次数。

```javascript
let str = 'JavaScript ';
console.log(str.repeat(3)); // 输出： "JavaScript JavaScript JavaScript "
```
