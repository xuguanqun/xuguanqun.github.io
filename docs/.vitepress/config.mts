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
          items: [
            { text: 'a1', link: '/markdown-examples' },
            { text: 'a2', link: '/api-examples' },
          ],
        },
      ],
      '/css/': [
        {
          text: 'css',
          items: [
            { text: 'b1', link: '/markdown-examples' },
            { text: 'b2', link: '/api-examples' },
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
