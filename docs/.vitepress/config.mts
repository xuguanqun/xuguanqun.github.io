import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'xgq Space',
  description: 'A Blog',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '前端进阶之路', link: '/frontend-road/index.md' },
    ],
    sidebar: {
      '/html/': [
        {
          text: 'html',
          items: [],
        },
      ],
      '/css/': [
        {
          text: 'css',
          items: [],
        },
      ],
      '/js/': [
        {
          text: 'javascript',
          items: [
            { text: '介绍', link: '/js/index.md' },
            { text: '变量声明 var let const', link: '/js/var.md' },
            { text: '数据类型', link: '/js/type.md' },
            { text: '字符串', link: '/js/string.md' },
            { text: '数字', link: '/js/number.md' },
            { text: '循环遍历', link: '/js/map.md' },
          ],
        },
      ],
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/xuguanqun' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024',
    },
  },
});
