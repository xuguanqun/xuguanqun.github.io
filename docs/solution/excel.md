<style>
.stackblitz {
  width: 100%;
  height: 500px;
  border: 1px solid #ccc;
}
</style>

# Office Excel

推荐：`xlsx` 或 `exceljs`

简单需求选`xlsx`，有样式、公式、图表等需求，选 `exceljs`。

::: code-group

```bash [npm]
npm install xlsx exceljs
```

```bash [pnpm]
pnpm install xlsx exceljs
```

```bash [yarn]
yarn add xlsx exceljs
```

```bash [bun]
bun add xlsx exceljs
```

:::

前端关于 Excel 的需求，一般分两种情况：

1. 读取

一般就是读取一个 Excel 文件，把它解析成一个数组数据，在页面上展示、保存到服务器等等。

- [通过 xlsx 读取 实现](#t1)
- [通过 exceljs 读取 实现](#t3)

2. 生成

通常是将一个数组数据转换成 Excel 文件，然后下载。比如说将页面上的表格数据导出成 Excel 文件。

- [通过 xlsx 生成 实现](#t2)
- [通过 exceljs 生成 实现](#t4)

## xlsx 读取 Excel{#t1}

```ts
import * as xlsx from 'xlsx';
import xgqxlsx from './xgq.xlsx';
```

```ts
const docxData = await fetch(xgqxlsx);
const arrayBuffer = await docxData.arrayBuffer();
const workbook = xlsx.read(arrayBuffer, { type: 'buffer' });
workbook.SheetNames.map((sheet) => {
  const sheetData = workbook.Sheets[sheet];
  const json = xlsx.utils.sheet_to_json(sheetData, { header: 1 });
  console.log(sheet, json);
});
```

## xlsx 生成 Excel{#t2}

```ts
import * as xlsx from 'xlsx';
```

```ts
const array = [
  ['A1', 'B1', 'C1'],
  ['A2', 'B2', 'C2'],
  ['A3', 'B3', 'C3'],
];
const workbook = xlsx.utils.book_new();
const worksheet = xlsx.utils.aoa_to_sheet(array);
xlsx.utils.book_append_sheet(workbook, worksheet, 'sheet1');
xlsx.writeFile(workbook, 'download.xlsx');
```

## xlsx 代码示例

<iframe class="stackblitz" src="https://stackblitz.com/edit/vitejs-vite-mydqkf?embed=1&file=src%2Fmain.tsx&hideNavigation=1" />

## exceljs 读取 Excel{#t3}

```ts
import exceljs from 'exceljs';
import xgqxlsx from './xgq.xlsx';
```

```ts
const xlsxData = await fetch(xgqxlsx);
const arrayBuffer = await xlsxData.arrayBuffer();
const workbook = new exceljs.Workbook();
await workbook.xlsx.load(arrayBuffer);
workbook.worksheets.map((v) => {
  const worksheet = workbook.getWorksheet(v.name);
  const data = [];
  worksheet.eachRow((row, rowNumber) => {
    const rowData = [];
    row.eachCell((cell, colNumber) => {
      rowData.push(cell.value);
    });
    data.push(rowData);
  });
  console.log(v.name, data);
});
```

## exceljs 生成 Excel{#t4}

```ts
import exceljs from 'exceljs';
import xgqxlsx from './xgq.xlsx';
import { saveAs } from 'file-saver';
```

```ts
const workbook = new exceljs.Workbook();
const worksheet = workbook.addWorksheet('Sheet 1');
worksheet.columns = [
  { header: 'Name', key: 'name', width: 20 },
  { header: 'Age', key: 'age', width: 10 },
  { header: 'Gender', key: 'gender', width: 10 },
];
worksheet.addRow({ name: 'John Doe', age: 30, gender: 'Male' });
worksheet.addRow({ name: 'Jane Smith', age: 25, gender: 'Female' });
const buffer = await workbook.xlsx.writeBuffer();
const blob = new Blob([buffer], {
  type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
});
saveAs(blob, 'download.xlsx');
```

## exceljs 代码示例

<iframe class="stackblitz" src="https://stackblitz.com/edit/vitejs-vite-26r2b2?embed=1&file=src%2Fmain.tsx&hideNavigation=1" />
