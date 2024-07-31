import { defineConfig } from 'vitepress';
import configSidebarSolution from './config-sidebar-solution';
import configSidebarSelfStudy from './config-sidebar-self-study';
import zh from './zh';

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
    ...(zh as any),
    logo: '../public/images/avatar.jpg',
    nav: [
      { text: '主页', link: '/' },
      {
        text: '前端解决方案',
        link: '/solution/download',
        activeMatch: '/solution/',
      },
      // {
      //   text: '前端自学指南',
      //   link: '/self-study/intrduce',
      //   activeMatch: '/self-study/',
      // },
    ],
    sidebar: {
      // 前端解决方案
      '/solution/': configSidebarSolution,
      // 前端自学指南
      '/self-study/': configSidebarSelfStudy,
    },
    outline: [2, 3, 4, 5],
    socialLinks: [{ icon: 'github', link: 'https://github.com/xuguanqun' }],
    footer: {
      message:
        '项目开发需求、技术交流群、新手指南群、个人咨询，微信：flechazo150503',
      copyright: 'Copyright © 2024',
    },
  },
});
