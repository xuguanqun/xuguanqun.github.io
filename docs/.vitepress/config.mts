import { defineConfig } from 'vitepress';

// https://vitepress.dev/zh/guide/what-is-vitepress
export default defineConfig({
  title: '前端 xgq',
  description: 'A Blog',
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
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '前端自学指南', link: '/self-study/index.md' },
    ],
    sidebar: {
      // 前端自学指南
      '/self-study/': [
        {
          text: '前端自学指南',
          items: [
            { text: '介绍', link: '/self-study/intrduce.md' },
            { text: 'HTML', link: '/self-study/html.md' },
            { text: 'CSS', link: '/self-study/css.md' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xuguanqun' },
      {
        icon: {
          svg: `<svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z" fill="#1E80FF"/>
        </svg>`,
        },
        link: 'https://juejin.cn/user/4476867078790382',
      },
      {
        icon: {
          svg: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">  <image id="image0" width="32" height="32" x="0" y="0"
          xlink:href="data:image/png;base64,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" />
      </svg>
      `,
        },
        link: 'https://www.zhihu.com/people/thisthings',
      },
      //   {
      //     icon: {
      //       svg: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">  <image id="image0" width="32" height="32" x="0" y="0"
      //     xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAIGNIUk0AAHomAACAhAAA+gAAAIDo
      // AAB1MAAA6mAAADqYAAAXcJy6UTwAAAEyUExURfxVMfx0V/2lkv3Et/7Rx/7Ow/25qvySe/xePPyD
      // af7b0/////729f2unPxbOPxaN/2+sP7+/v7i3PxlRfxdO/7Xzv7n4v2wn/3Asv7t6v28rvxWM/3O
      // xP7r5/yIb/xXNP2ZhP718/7Pxf2kkP7h2/xkQ/xvUf7r5vyOdvxmRf749/708fxpSvxfPfxwUv2y
      // ov2diP7y7/7v7PxZNvx/ZP21pfyHbf2/sfxnR/7OxP79/f7Syf77+/3Lv/22pvx5XP2rmvxhQP77
      // +vxjQvxsTfyJcfxWMv7WzvxhP/yAZf708vxmRv7z8P2bhvxiQPxYNf3Dtv729PyEav76+v7o4/7Z
      // 0f7Uy/7g2v759/7v6/x+Y/2woP7z8f7u6v2qmf2qmP3Ctv7Mwf27rf2hjfx6XvxXM5v88O4AAAAB
      // YktHRAsf18TAAAAAB3RJTUUH6AUPDjAIfUM/ogAAAQBJREFUOMtjYBh0gJGJmYWVjZ0DhzQnFzcE
      // 8PDyYZHmFxDkhgMhYQx5EVGQhJiAuIQkiCGFLi8tAxSVlQMx5RUUubmV0BUoA+VVVKEcNXVBDTR5
      // TS1ubm0dOFdXD90AfaABBnj8L2/IzW1kjEeBCdAAU3whyARUYIZPgTlQgQU+BZbc3FbS+BRYc3Pb
      // 4JNnsAVaIYJPgR1QgT0+BexABQ74FDg6cXMbOiMJuLi6oaoQABrh7gHnenpxi6Mq8PYBxbavH4jt
      // bxJgxc0diGZJUDAomQiGhIaFR4DTVAi6MzwjuZGBURSGQz2iY+DSsXG62PzCHxSfoGSdmJScksow
      // mAAAr2Ab+wezZ1oAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjQtMDUtMTVUMTQ6NDg6MDgrMDA6MDBe
      // H5jsAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDI0LTA1LTE1VDE0OjQ4OjA4KzAwOjAwL0IgUAAAACh0
      // RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyNC0wNS0xNVQxNDo0ODowOCswMDowMHhXAY8AAAAASUVORK5C
      // YII=" />
      // </svg>
      // `,
      //     },
      //     link: 'https://blog.csdn.net/weixin_44488811',
      //   },
      //   {
      //     icon: {
      //       svg: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">  <image id="image0" width="32" height="32" x="0" y="0"
      //       xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAIGNIUk0AAHomAACAhAAA+gAAAIDo
      //   AAB1MAAA6mAAADqYAAAXcJy6UTwAAAE+UExURQAAAO1kSeZhSOZgSOVhSOVgSOVhSu6bjP///++f
      //   keyQf/GqnvfTzOl8afXDuu6YiOyOffGpnOh0X/77+v3z8eqAbf329Pnc1/Cnmf339vnd2O+dj++i
      //   lPCjlul6Zvri3fri3vS8suyLevGvo/jUzuZmT/329eVlTuh1Yfzw7uduWeVkTf349/O4rf79/OZq
      //   VPvr6Prl4edyXOuHdfXFvOZoUffSy/bLxPGtoPO2q/bIwPfRyvCjlfjVz/XGveh1YPClmOl8aOyM
      //   evS+tPKyp+VhSfbKwv79/e2Vhfvo5fKxpfS/tfCom+2RgfTAtvTAt/rk4PbNxvTBt/XBuO+hk+6X
      //   h/XCue+gke+gkvfQyfKxpvzw7fzx7+hyXe6djv7+/ul4ZOdsVul9afGtofjX0eVjS+6ZivCnmul9
      //   auuJeB5uZMcAAAAFdFJOUwAcpubt084F6wAAAAFiS0dECIbelXoAAAAHdElNRQfoBQ8OMgaozXAn
      //   AAABQUlEQVQ4y4WT51bCQBBGN4HFT1SkG0FFQGOhiSJiULGBvffYK/r+L2CQhGyOWXJ/zey5Z2Z3
      //   zwwhguiiHFyiQIjgpl1wC0SkXRGJTX2Ph+lC9KAH6NVDL9BnGobQDwzooQ8Y/Cf4YRAIhowwbAqR
      //   KIakYcTiI6NjCYxLSSApSamOkA5hYlIrLU/R6RkkZmkmixzbIi/nChnqnSvO0wWUFrWTcnaJFSoF
      //   L/J+uqwoSrWoGKxYXlGCHFyFhTWLUANKkXUTySpspDa3qtvsb9atQgM7lO7uddi3FeJm+wOecNhK
      //   joBjJ+GEJ5yeacSAc6c7XPCEy7rGFXDNE25ayW1rYDjCnaqquXs8PNoKT89two0X+5+08Ar4+MLb
      //   e/pDv1BHiLLC34SWPxnhq/nNCplmJfBT1yeKu5htXM6r57i8Tuv/C8pTRgKcfki8AAAAJXRFWHRk
      //   YXRlOmNyZWF0ZQAyMDI0LTA1LTE1VDE0OjUwOjA2KzAwOjAw3Hl8hQAAACV0RVh0ZGF0ZTptb2Rp
      //   ZnkAMjAyNC0wNS0xNVQxNDo1MDowNiswMDowMK0kxDkAAAAodEVYdGRhdGU6dGltZXN0YW1wADIw
      //   MjQtMDUtMTVUMTQ6NTA6MDYrMDA6MDD6MeXmAAAAAElFTkSuQmCC" />
      //   </svg>`,
      //     },
      //     link: 'https://www.jianshu.com/u/ab9963651912',
      //   },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024',
    },
  },
});
