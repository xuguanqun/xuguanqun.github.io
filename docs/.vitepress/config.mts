import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'xgq space',
  description: 'A Blog',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'frontend-road', link: '/frontend-road/index' },
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
  },
});
