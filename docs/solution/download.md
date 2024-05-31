<style>
.stackblitz {
  width: 100%;
  height: 500px;
  border: 1px solid #ccc;
}
</style>

# 下载

推荐：`file-saver`

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
