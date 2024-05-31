<style>
.stackblitz {
  width: 100%;
  height: 500px;
  border: 1px solid #ccc;
}
</style>

# 截图

推荐：`html2canvas`

::: code-group

```bash [npm]
npm install html2canvas
```

```bash [pnpm]
pnpm install html2canvas
```

```bash [yarn]
yarn add html2canvas
```

```bash [bun]
bun add html2canvas
```

:::

### 使用

```ts
html2canvas(document.body, { useCORS: true }).then(function (canvas) {
  // canvas
});
```

**options**

| 名称                   | 默认值                  | 描述                                                                               |
| ---------------------- | ----------------------- | ---------------------------------------------------------------------------------- |
| allowTaint             | false                   | 是否允许跨域图像污染画布                                                           |
| backgroundColor        | #ffffff                 | 画布背景颜色，如果在 DOM 中未指定，则为 null 以设置透明                            |
| canvas                 | null                    | 用作绘制基础的现有画布元素                                                         |
| foreignObjectRendering | false                   | 如果浏览器支持，是否使用 ForeignObject 渲染                                        |
| imageTimeout           | 15000                   | 加载图像的超时时间（毫秒）。设置为 0 以禁用超时                                    |
| ignoreElements         | (element) => false      | 从渲染中删除匹配元素的谓词函数                                                     |
| logging                | true                    | 启用用于调试目的的日志                                                             |
| onclone                | null                    | 在文档被克隆以进行渲染时调用的回调函数，可用于修改将被渲染但不影响原始源文档的内容 |
| proxy                  | null                    | 用于加载跨域图像的代理的 URL。如果留空，将不会加载跨域图像                         |
| removeContainer        | true                    | 是否清理 html2canvas 临时创建的克隆 DOM 元素                                       |
| scale                  | window.devicePixelRatio | 用于渲染的比例。默认为浏览器的设备像素比率                                         |
| useCORS                | false                   | 是否尝试使用 CORS 从服务器加载图像                                                 |
| width                  | 元素宽度                | 画布宽度                                                                           |
| height                 | 元素高度                | 画布高度                                                                           |
| x                      | 元素 x 偏移             | 裁剪画布的 x 坐标                                                                  |
| y                      | 元素 y 偏移             | 裁剪画布的 y 坐标                                                                  |
| scrollX                | 元素 scrollX            | 在渲染元素时要使用的 x 滚动位置（例如，如果元素使用 position: fixed）              |
| scrollY                | 元素 scrollY            | 在渲染元素时要使用的 y 滚动位置（例如，如果元素使用 position: fixed）              |
| windowWidth            | Window.innerWidth       | 渲染元素时要使用的窗口宽度，可能会影响诸如媒体查询之类的内容                       |
| windowHeight           | Window.innerHeight      | 渲染元素时要使用的窗口高度，可能会影响诸如媒体查询之类的内容                       |

### 示例

```html
<div id="screenshot">
  <h1>标题</h1>
  <p>段落</p>
  <img src="https://avatars.githubusercontent.com/u/33191843" />
</div>
```

```ts
const div = document.getElementById('screenshot');
html2canvas(div).then(function (canvas) {
  const dataURL = canvas.toDataURL('image/png', 1);
  saveAs(dataURL, 'screenshot.png'); // 可以配合file-saver直接下载
  // 或者展示到页面
  const img = new Image();
  img.src = dataURL;
  document.body.appendChild(img);
});
```

**代码示例**

<iframe class="stackblitz" src="https://stackblitz.com/edit/vitejs-vite-5yfjac?embed=1&file=src%2Fmain.tsx&hideNavigation=1" />

### 不支持的 CSS 样式

- background-blend-mode
- border-image
- box-decoration-break
- box-shadow
- filter
- font-variant-ligatures
- mix-blend-mode
- object-fit
- repeating-linear-gradient()
- writing-mode
- zoom
