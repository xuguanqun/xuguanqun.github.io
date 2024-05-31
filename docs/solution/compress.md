<style>
.stackblitz {
  width: 100%;
  height: 500px;
  border: 1px solid #ccc;
}
</style>

# 压缩/解压缩

推荐：`jszip`

::: code-group

```bash [npm]
npm install jszip
```

```bash [pnpm]
pnpm install jszip
```

```bash [yarn]
yarn add jszip
```

```bash [bun]
bun add jszip
```

:::

1. 解析 zip 压缩包

- [jszip 解析 zip](#t1)

2. 生成 zip 压缩包

- [jszip 生成 zip](#t2)

3. 解析一个 zip 压缩包，修改内容，生成新 zip 压缩包

- [jszip 解析并重新生成 zip](#t3)

## jszip 解析 zip{#t1}

```ts
import jszip from 'jszip';
import compress from './compress.zip';
```

```ts
const zipData = await fetch(compress);
const arrayBuffer = await zipData.arrayBuffer();
const zip = new jszip();
const load = await zip.loadAsync(arrayBuffer);
console.log(load.files);
```

## jszip 生成 zip{#t2}

```ts
import jszip from 'jszip';
import { saveAs } from 'file-saver';
import compress from './compress.zip';
```

```ts
const zip = new jszip();
zip.file('hello.txt', 'Hello World!'); // 添加一个文本文件
const blob = await zip.generateAsync({ type: 'blob' });
saveAs(blob, 'example.zip');
```

## jszip 解析并重新生成 zip{#t3}

```ts
import jszip from 'jszip';
import { saveAs } from 'file-saver';
import compress from './compress.zip';
```

```ts
const zipData = await fetch(compress);
const arrayBuffer = await zipData.arrayBuffer();
const zip = new jszip();
const load = await zip.loadAsync(arrayBuffer);
const newZip = new jszip();
newZip.file('wx.jpg', load.files['compress/wx.jpg']._data);
const blob = await newZip.generateAsync({ type: 'blob' });
saveAs(blob, 'example.zip');
```

## jszip 代码示例

<iframe class="stackblitz" src="https://stackblitz.com/edit/vitejs-vite-etfzak?embed=1&file=src%2Fmain.tsx&hideNavigation=1" />
