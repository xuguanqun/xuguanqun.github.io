<style >
.pdf-iframe {
  width: 100%;
  height: 500px;
  border: 1px solid #ccc;
}
</style>

# PDF

前端关于 PDF 的需求，一般分几种情况：

## 1. 已经有了 PDF 文件，只是在页面上做个展示

不论是用户上传的，还是后端生成的，即文件已经存在于服务器上，有文件地址：`http://xxx.pdf`，通常这种情况，浏览器可以直接对其进行展示。

```html
<a target="_blank" href="http://xxx.pdf">跳转到 pdf</a>
```

```ts
window.open('http://xxx.pdf');
```

<a target="_blank" href="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf">点击直接打开 pdf</a>

**不想跳转，可使用 iframe 嵌套，直接在当前页显示**

```html
<iframe src="http://xxx.pdf" />
```

<iframe class="pdf-iframe" src="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf" />

## 2. 已经有了 PDF 文件，但不仅要在网页上进行展示，还需要二次编辑，比如说在原本的 PDF 上添加文字、图片、甚至盖个章等等

**这种情况你需要一个 js 库来帮你完成：**

### `PDF.js`

## 3. 没有 PDF 文件，需要前端动态生成 PDF 文件

**推荐 js 库：**

### `jspdf`

::: code-group

```bash [npm]
npm install jspdf
```

```bash [pnpm]
pnpm install jspdf
```

```bash [yarn]
yarn add jspdf
```

```bash [bun]
bun add jspdf
```

:::
**生成一个 PDF 文件并下载**

```ts
const doc = new jspdf('p', 'pt', 'a4'); // 首先初始化一个pdf文档
doc.text('Hello 1111', 10, 10); // 添加文字 10,10 是坐标
doc.addPage('a4', 'l'); // 添加页面
doc.text('Hello 2222', 10, 10); // 添加文字
doc.addImage(
  'https://imgproc.airliners.net/photos/airliners/7/0/0/1184007.jpg?v=v40',
  'JPEG',
  10,
  10,
  200,
  100
);
doc.save('example.pdf'); // 下载pdf
```

详细使用说明参考文档

- [jspdf 文档 1](https://raw.githack.com/MrRio/jsPDF/master/docs/index.html)
- [jspdf 文档 2](https://parallax.github.io/jsPDF/docs/index.html)
