<style>
.stackblitz {
  width: 100%;
  height: 500px;
  border: 1px solid #ccc;
}
</style>

# Office Word

前端关于 Word 的需求，一般分几种情况：

## 1. 已经有了 Word 文件，只是在页面上做个展示

### `docx-preview`

::: code-group

```bash [npm]
npm install docx-preview
```

```bash [pnpm]
pnpm install docx-preview
```

```bash [yarn]
yarn add docx-preview
```

```bash [bun]
bun add docx-preview
```

:::

```ts
import { renderAsync } from 'docx-preview';
import docx from './xgq.docx';
```

```html
<div id="preview"></div>
```

```ts
const docxData = await fetch(docx); // 这里展示的情况是word文件在本地
const arrayBuffer = await docxData.arrayBuffer();
renderAsync(arrayBuffer, document.getElementById('preview') as any, undefined, {
  inWrapper: false,
  ignoreWidth: true,
});
```

### `mammoth`

::: code-group

```bash [npm]
npm install mammoth
```

```bash [pnpm]
pnpm install mammoth
```

```bash [yarn]
yarn add mammoth
```

```bash [bun]
bun add mammoth
```

:::

```ts
import mammoth from 'mammoth';
import docx from './xgq.docx';
```

```html
<div id="preview"></div>
```

```ts
const docxData = await fetch(docx); // 这里展示的情况是word文件在本地
const arrayBuffer = await docxData.arrayBuffer();
const html = await mammoth.convertToHtml({ arrayBuffer });
document.getElementById('preview').innerHTML = html.value;
```

## 2. 没有 Word 文件，需要前端动态生成 Word 文件

### 通过一个模板 Word 文件，通过填入模板中的变量，生成 Word 文件

### `docxtemplater` `pizzip`

::: code-group

```bash [npm]
npm install docxtemplater pizzip
```

```bash [pnpm]
pnpm install docxtemplater pizzip
```

```bash [yarn]
yarn add docxtemplater pizzip
```

```bash [bun]
bun add docxtemplater pizzip
```

:::

**首先需要一个 docx 文件作为模板：`xgq.docx`**

![xgq.docx](../../public/images/20240529171535.jpg)

`{}`语法代表变量

```ts
import docxtemplater from 'docxtemplater';
import pizzip from 'pizzip'; // 必须
import docx from './xgq.docx';
import { saveAs } from 'file-saver';
```

```ts
const docxData = await fetch(docx); // 这里展示的情况是word文件在本地
const arrayBuffer = await docxData.arrayBuffer();
const zip = new pizzip(arrayBuffer); // 必须用pizzip生成zip
const doc = new docxtemplater(zip, {
  paragraphLoop: true,
  linebreaks: true,
});
doc.render({
  name: 'xgq',
});
const blob = doc.getZip().generate({
  type: 'blob',
  mimeType:
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
});
saveAs(blob, 'download.docx');
```

**代码示例**

<iframe class="stackblitz" src="https://stackblitz.com/edit/vitejs-vite-adh4as?embed=1&file=src%2Fmain.tsx&hideNavigation=1" />

### 通过某个页面转换成 Word 文件

### `html-docx-js`
