import { defineConfig } from 'vitepress';

export default defineConfig({
  title: '前端 xgq',
  description:
    '前端 xgq，前端自学指南：更简单的自学方式、前端解决方案，前端面试经验，HTML、CSS、JavaScript、React、Vue、Svelte、Bootstrap、Tailwind CSS、Webpack、Vite、Word、Excel、PowerPoint',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '../public/favicon.ico' }],
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-T44GZGJWXV',
      },
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-T44GZGJWXV');`,
    ],
  ],
  cleanUrls: true,
  themeConfig: {
    logo: '../public/images/avatar.jpg',
    search: {
      provider: 'local',
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '前端解决方案', link: '/solution/download' },
      { text: '前端自学指南', link: '/self-study/intrduce' },
    ],
    sidebar: {
      // 前端解决方案
      '/solution/': [
        {
          text: '前端解决方案',
          items: [
            { text: '下载', link: '/solution/download' },
            { text: '截图', link: '/solution/screenshot' },
            { text: 'PDF', link: '/solution/pdf' },
            {
              text: '压缩/解压缩',
              link: '/solution/compress',
            },
            {
              text: 'Office Word',
              link: '/solution/word',
            },
            {
              text: 'Office Excel',
              link: '/solution/excel',
            },
            {
              text: 'Office PowerPoint',
              link: '/solution/ppt',
            },
          ],
        },
      ],
      // 前端自学指南
      '/self-study/': [
        {
          text: '前端自学指南',
          items: [
            { text: '介绍', link: '/self-study/intrduce' },
            { text: 'HTML', link: '/self-study/html' },
            { text: 'CSS', link: '/self-study/css' },
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
