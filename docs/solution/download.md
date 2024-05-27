<style>
.stackblitz {
  width: 100%;
  height: 500px;
  border: 1px solid #ccc;
}
</style>

# 下载

## file-saver

`FileSaver.js` 是一个 JavaScript 库，用于在客户端保存文件。它允许你通过 JavaScript 生成数据，并将其保存为文件，而无需与服务器进行交互。这个库提供了一个简单的 API，可以方便地将数据保存到本地文件系统中。

使用 `FileSaver.js`，你可以在客户端生成数据（比如从 Canvas 元素、表单输入或其他来源），然后将其保存为文本文件、图片文件或其他类型的文件。这对于创建 Web 应用程序中的下载功能非常有用，例如保存用户生成的图表、报告或其他数据。

### 安装

::: code-group

```bash [npm]
npm install file-saver
```

```bash [pnpm]
pnpm install file-saver
```

```bash [yarn]
yarn add file-saver
```

```bash [bun]
bun add file-saver
```

:::

### 使用

```ts
saveAs('https://avatars.githubusercontent.com/u/33191843', 'image.jpg');
```

**示例**

<iframe class="stackblitz" src="https://stackblitz.com/edit/vitejs-vite-nzcniz?embed=1&file=src%2Fmain.tsx&hideNavigation=1" />
