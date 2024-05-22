# HTML 标签集

- `<a>`：用于创建超链接。

  ```html
  <a href="https://example.com">Visit Example</a>
  ```

- `<abbr>`：用于表示缩写或首字母缩写。

  ```html
  <p><abbr title="World Wide Web">WWW</abbr></p>
  ```

- `<address>`：用于包含联系信息。

  ```html
  <address>
    <p>Written by John Doe.</p>
    <p>Visit us at:</p>
    <p>Example.com</p>
  </address>
  ```

- `<area>`：用于创建图像地图区域。

  ```html
  <img src="planets.jpg" alt="Planets" usemap="#planetmap" />
  <map name="planetmap">
    <area shape="rect" coords="0,0,82,126" alt="Sun" href="sun.htm" />
    <area shape="circle" coords="90,58,3" alt="Mercury" href="mercur.htm" />
  </map>
  ```

- `<article>`：用于表示页面中独立的内容区域。

  ```html
  <article>
    <h2>Article Title</h2>
    <p>Article content goes here.</p>
  </article>
  ```

- `<aside>`：用于表示页面的附属内容，通常用于侧边栏或类似的内容。

  ```html
  <aside>
    <h4>Related Links</h4>
    <ul>
      <li><a href="#">Link 1</a></li>
      <li><a href="#">Link 2</a></li>
    </ul>
  </aside>
  ```

- `<audio>`：用于嵌入音频内容。

  ```html
  <audio controls>
    <source src="music.mp3" type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>
  ```

- `<b>`：用于粗体文本（不推荐使用，推荐使用 CSS 控制样式）。

  ```html
  <p><b>Bold text</b></p>
  ```

- `<base>`：用于设置页面中所有相对链接的基本 URL。

  ```html
  <base href="https://example.com/" />
  ```

- `<bdi>`：用于与周围文本隔离的文本，以便它们能够被独立地格式化。

```html
<p>Here is some <bdi>text</bdi>.</p>
```

- `<bdo>`：用于覆盖默认文本方向。

```html
<p><bdo dir="rtl">This text will be displayed right-to-left.</bdo></p>
```

- `<blockquote>`：用于引用长篇文字的块引用。

```html
<blockquote>
  <p>Quoted text goes here.</p>
</blockquote>
```

- `<body>`：用于表示 HTML 文档的主体内容。

```html
<body>
  <p>This is the main content of the document.</p>
</body>
```

- `<br>`：用于插入换行。

```html
<p>This is a line.<br />This is another line.</p>
```

- `<button>`：用于创建按钮。

```html
<button>Click me</button>
```

- `<canvas>`：用于绘制图形。

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

- `<caption>`：用于表格标题。

```html
<table>
  <caption>
    Table Caption
  </caption>
  ...
</table>
```

- `<cite>`：用于表示作品的标题（书籍、电影、歌曲等）。

```html
<p><cite>The Catcher in the Rye</cite> by J.D. Salinger</p>
```

- `<code>`：用于表示计算机代码。

```html
<code>function myFunction() { return true; }</code>
```

- `<col>` 和 `<colgroup>`：用于定义表格列的属性。

```html
<table>
  <colgroup>
    <col span="2" style="background-color:red" />
    <col style="background-color:yellow" />
  </colgroup>
  ...
</table>
```

- `<data>`：用于包含数据。

```html
<p><data value="12345">12,345</data></p>
```

- `<datalist>`：用于定义输入框的预定义选项列表。

```html
<input list="browsers" />
<datalist id="browsers">
  <option value="Chrome"></option>
  <option value="Firefox"></option>
  <option value="Internet Explorer"></option>
  <option value="Opera"></option>
  <option value="Safari"></option>
</datalist>
```

- `<dd>` 和 `<dt>`：分别用于定义描述列表中的项目和项目的描述。

```html
<dl>
  <dt>Term</dt>
  <dd>Description of the term.</dd>
</dl>
```

- `<del>`：用于表示被删除的文本。

```html
<p><del>Deleted text</del></p>
```

- `<details>` 和 `<summary>`：用于创建可展开的详细信息部分。

```html
<details>
  <summary>Click to expand</summary>
  <p>Additional details go here.</p>
</details>
```

- `<dfn>`：用于表示定义项目。

```html
<p>
  The <dfn>World Wide Web</dfn> is an information space where documents and
  other web resources are identified by URLs.
</p>
```

- `<dialog>`：用于创建对话框或模态窗口。

```html
<dialog open>
  <p>This is a dialog window.</p>
</dialog>
```

- `<div>`：用于创建一个容器，通常用于组织和布局内容。

```html
<div>
  <p>This is a paragraph inside a div.</p>
  <img src="image.jpg" alt="An image" />
</div>
```

- `<dl>`、`<dt>` 和 `<dd>`：用于创建描述列表。

```html
<dl>
  <dt>Term 1</dt>
  <dd>Description 1</dd>
  <dt>Term 2</dt>
  <dd>Description 2</dd>
</dl>
```

- `<DOCTYPE>`：用于定义文档类型和版本。

```html
<!DOCTYPE html>
```

- `<em>`：用于表示强调的文本。

```html
<p><em>Emphasized text</em></p>
```

- `<embed>`：用于嵌入外部资源（如多媒体文件）。

```html
<embed src="movie.swf" width="300" height="120" />
```

- `<fieldset>` 和 `<legend>`：用于创建表单元素的组。

```html
<fieldset>
  <legend>Group Legend</legend>
  <input type="text" />
  <input type="text" />
</fieldset>
```

- `<figcaption>` 和 `<figure>`：用于定义图像的标题和内容。

```html
<figure>
  <img src="image.jpg" alt="An image" />
  <figcaption>Image caption</figcaption>
</figure>
```

- `<footer>`：用于表示页面或节的页脚部分。

```html
<footer>
  <p>&copy; 2024 Example Company</p>
</footer>
```

- `<form>`、`<input>`、`<textarea>`：用于创建表单和输入字段。

```html
<form action="/submit" method="post">
  <input type="text" name="username" placeholder="Enter your username" />
  <textarea name="message" placeholder="Enter your message"></textarea>
  <input type="submit" value="Submit" />
</form>
```

- `<h1>` 到 `<h6>`：用于创建标题，级别从最重要的 `<h1>` 到最不重要的 `<h6>`。

```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
```

- `<head>`：用于表示文档的元数据。

```html
<head>
  <title>Document Title</title>
  <meta charset="UTF-8" />
</head>
```

- `<header>`：用于表示页面或节的页眉部分。

```html
<header>
  <h1>Page Title</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
```

- `<hr>`：用于插入水平线。

```html
<p>Text above<hr>Text below</p>
```

- `<html>`：用于表示 HTML 文档的根元素。

```html
<!DOCTYPE html>
<html lang="en">
  ...
</html>
```

- `<i>`：用于斜体文本（不推荐使用，推荐使用 CSS 控制样式）。

```html
<p><i>Italic text</i></p>
```

- `<iframe>`：用于嵌入另一个 HTML 页面。

```html
<iframe src="https://example.com"></iframe>
```

- `<img>`：用于插入图像。

```html
<img src="image.jpg" alt="An image" />
```

- `<input>`：用于创建各种类型的输入字段。

```html
<input type="text" name="username" />
<input type="checkbox" name="agree" value="yes" />
```

- `<ins>`：用于表示插入的文本。

```html
<p><ins>Inserted text</ins></p>
```

- `<kbd>`：用于表示键盘文本。

```html
<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.</p>
```

- `<label>`：用于表单元素的标签。

```html
<label for="username">Username:</label>
<input type="text" id="username" name="username" />
```

- `<legend>`：用于表单字段组的标题。

```html
<fieldset>
  <legend>Group Legend</legend>
  <input type="text" />
  <input type="text" />
</fieldset>
```

- `<li>`：用于表示列表项。

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

- `<link>`：用于定义文档与外部资源之间的关系。

```html
<link rel="stylesheet" href="styles.css" />
```

- `<main>`：用于表示文档的主要内容部分。

```html
<main>
  <p>Main content goes here.</p>
</main>
```

- `<map>`、`<area>`：用于创建图像地图。

```html
<img src="worldmap.jpg" alt="World Map" usemap="#worldmap" />
<map name="worldmap">
  <area
    shape="rect"
    coords="0,0,82,126"
    alt="North America"
    href="northamerica.htm"
  />
</map>
```

- `<mark>`：用于表示突出显示的文本。

```html
<p>You need to <mark>pay attention</mark> to this.</p>
```

- `<meta>`：用于设置 HTML 文档的元数据。

```html
<meta charset="UTF-8" />
```

- `<meter>`：用于表示已知范围内的标量度量。

```html
<meter value="2" min="0" max="10">2 out of 10</meter>
```

- `<nav>`：用于表示导航链接。

```html
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

- `<noscript>`：用于在脚本不可用时显示备用内容。

```html
<noscript>Your browser does not support JavaScript!</noscript>
```

- `<object>`：用于嵌入多媒体资源。

```html
<object data="flash.swf" width="550" height="400"></object>
```

- `<ol>` 和 `<li>`：分别用于创建有序列表和列表项。

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>
```

- `<optgroup>` 和 `<option>`：用于创建选择框的选项组和选项。

```html
<select>
  <optgroup label="Group 1">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </optgroup>
</select>
```

- `<output>`：用于表示计算的输出。

```html
<output for="x y">Result: <span id="result">42</span></output>
```

- `<p>`：用于定义段落。

```html
<p>This is a paragraph.</p>
```

- `<param>`：用于设置包含在 `<object>` 元素中的嵌入资源的参数。

```html
<object data="movie.swf">
  <param name="autoplay" value="true" />
</object>
```

- `<picture>` 和 `<source>`：用于提供多种图像资源，以供浏览器根据屏幕尺寸或其他条件选择。

```html
<picture>
  <source media="(max-width: 600px)" srcset="small.jpg" />
  <source media="(max-width: 1200px)" srcset="medium.jpg" />
  <img src="large.jpg" alt="A picture" />
</picture>
```

- `<pre>`：用于表示预格式化的文本。

```html
<pre>
    This text
    is preformatted.
</pre>
```

- `<progress>`：用于表示任务的完成进度。

```html
<progress value="70" max="100">70%</progress>
```

- `<q>`：用于表示短的行内引用。

```html
<p><q>Quoted text</q></p>
```

- `<rp>` 和 `<rt>`：用于定义 Ruby 注释的回退内容和实际文本。

```html
<ruby> 漢 <rp>(</rp><rt>kan</rt><rp>)</rp> </ruby>
```

- `<ruby>`、`<rt>`、`<rp>`：用于定义 Ruby 注释（用于东亚文字的音译或注释）。

```html
<ruby> 漢 <rp>(</rp><rt>kan</rt><rp>)</rp> </ruby>
```

- `<s>` 和 `<strike>`：用于表示删除的文本（不推荐使用，推荐使用 CSS 控制样式）。

```html
<p><s>Strikethrough text</s></p>
```

- `<samp>`：用于表示计算机程序的样本输出。

```html
<p>User input: <samp>ls -l</samp></p>
```

- `<script>`：用于嵌入客户端脚本。

```html
<script>
  document.getElementById('demo').innerHTML = 'Hello JavaScript!';
</script>
```

- `<section>`：用于表示页面中的区块，通常包含相关内容。

```html
<section>
  <h2>Section Title</h2>
  <p>Section content goes here.</p>
</section>
```

- `<select>` 和 `<option>`：用于创建下拉列表。

```html
<select>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
</select>
```

- `<small>`：用于表示较小的文本。

```html
<p><small>Small text</small></p>
```

- `<source>`：用于定义 `<audio>`、`<video>` 或 `<picture>` 元素的多媒体资源。

```html
<audio controls>
  <source src="music.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
```

- `<span>`：用于对文档中的行内元素进行分组。

```html
<p>This is <span style="color:red;">red</span> text.</p>
```

- `<strong>`：用于表示强调的重要文本。

```html
<p><strong>Strong text</strong></p>
```

- `<style>`：用于嵌入 CSS 样式规则。

```html
<style>
  p {
    color: blue;
  }
</style>
```

- `<sub>` 和 `<sup>`：分别用于下标和上标。

```html
<p>H<sub>2</sub>O</p>
<p>x<sup>2</sup></p>
```

- `<summary>` 和 `<details>`：用于创建可展开的详细信息部分。

```html
<details>
  <summary>Click to expand</summary>
  <p>Additional details go here.</p>
</details>
```

- `<svg>`：用于嵌入可缩放的矢量图形。

```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>
```

- `<table>`、`<tr>`、`<td>` 和 `<th>`：分别用于创建表格、表格行、表格数据和表头。

```html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>30</td>
  </tr>
</table>
```

- `<template>`：用

于定义 HTML 片段，这些片段在页面加载时不会呈现。

```html
<template>
  <p>Template content goes here.</p>
</template>
```

- `<textarea>`：用于创建多行文本输入字段。

```html
<textarea rows="4" cols="50">
    Enter text here.
</textarea>
```

- `<tfoot>`：用于表示表格的页脚部分。

```html
<table>
  <thead>
    ...
  </thead>
  <tbody>
    ...
  </tbody>
  <tfoot>
    ...
  </tfoot>
</table>
```

- `<time>`：用于表示日期和时间。

```html
<p>Meeting time: <time datetime="2024-05-21T12:00">12:00 PM</time></p>
```

- `<title>`：用于定义文档标题。

```html
<title>Document Title</title>
```

- `<tr>`：用于表示表格行。

```html
<table>
  <tr>
    <td>Column 1</td>
    <td>Column 2</td>
  </tr>
</table>
```

- `<track>`：用于定义 `<audio>` 或 `<video>` 元素的文本轨道。

```html
<video controls>
  <source src="movie.mp4" type="video/mp4" />
  <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English" />
</video>
```

- `<u>`：用于表示下划线文本（不推荐使用，推荐使用 CSS 控制样式）。

```html
<p><u>Underlined text</u></p>
```

- `<ul>` 和 `<li>`：分别用于创建无序列表和列表项。

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

- `<var>`：用于表示变量。

```html
<p>The result is <var>x</var>.</p>
```

- `<video>`：用于嵌入视频内容。

```html
<video controls>
  <source src="movie.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

- `<wbr>`：用于指示浏览器在该位置插入换行符（软换行）。

```html
<p>Longwordwithnowhitespace<wbr />anotherlongword</p>
```

当然，继续补充：

- `<webview>`：用于在 Web 内容中显示原生窗口。

```html
<webview src="https://example.com"></webview>
```
