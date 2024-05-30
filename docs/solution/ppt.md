<style>
.stackblitz {
  width: 100%;
  height: 500px;
  border: 1px solid #ccc;
}
</style>

# Office PowerPoint

1. 预览 PPT

2. 生成 PPT

- [通过 pptxgenjs 生成 PPT](#t2)

## pptxgenjs{#t2}

```ts
import pptxgenjs from 'pptxgenjs';
```

```ts
const pptx = new pptxgenjs();
const slide1 = pptx.addSlide();
slide1.addText('Welcome to Our Presentation', {
  x: 1,
  y: 1,
  fontSize: 28,
  color: '363636',
});
slide1.addText('This is the first slide.', {
  x: 1,
  y: 2,
  fontSize: 18,
  color: '363636',
});
const slide2 = pptx.addSlide();
slide2.addText('Our Team', { x: 1, y: 1, fontSize: 28, color: '363636' });
slide2.addText('Meet our amazing team members:', {
  x: 1,
  y: 2,
  fontSize: 18,
  color: '363636',
});
slide2.addImage({
  path: 'https://avatars.githubusercontent.com/u/33191843',
  x: 1,
  y: 3,
});
const slide3 = pptx.addSlide();
slide3.addText('Our Services', {
  x: 1,
  y: 1,
  fontSize: 28,
  color: '363636',
});
slide3.addText('We offer the following services:', {
  x: 1,
  y: 2,
  fontSize: 18,
  color: '363636',
});
slide3.addText('1. Web Development', {
  x: 1,
  y: 3,
  fontSize: 16,
  color: '363636',
});
slide3.addText('2. Mobile App Development', {
  x: 1,
  y: 4,
  fontSize: 16,
  color: '363636',
});
slide3.addText('3. UI/UX Design', {
  x: 1,
  y: 5,
  fontSize: 16,
  color: '363636',
});
pptx.writeFile('download.pptx');
```
