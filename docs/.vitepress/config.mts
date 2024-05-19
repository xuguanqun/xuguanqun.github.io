import { defineConfig } from 'vitepress';

// https://vitepress.dev/zh/guide/what-is-vitepress
export default defineConfig({
  title: '前端 xgq',
  description: 'A Blog',
  lang: 'zh-CN',
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
            { text: '介绍', link: '/self-study/index.md' },
            { text: 'HTML', link: '/self-study/html.md' },
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
        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAIGNIUk0AAHomAACAhAAA+gAAAIDo
    AAB1MAAA6mAAADqYAAAXcJy6UTwAAAEyUExURfxVMfx0V/2lkv3Et/7Rx/7Ow/25qvySe/xePPyD
    af7b0/////729f2unPxbOPxaN/2+sP7+/v7i3PxlRfxdO/7Xzv7n4v2wn/3Asv7t6v28rvxWM/3O
    xP7r5/yIb/xXNP2ZhP718/7Pxf2kkP7h2/xkQ/xvUf7r5vyOdvxmRf749/708fxpSvxfPfxwUv2y
    ov2diP7y7/7v7PxZNvx/ZP21pfyHbf2/sfxnR/7OxP79/f7Syf77+/3Lv/22pvx5XP2rmvxhQP77
    +vxjQvxsTfyJcfxWMv7WzvxhP/yAZf708vxmRv7z8P2bhvxiQPxYNf3Dtv729PyEav76+v7o4/7Z
    0f7Uy/7g2v759/7v6/x+Y/2woP7z8f7u6v2qmf2qmP3Ctv7Mwf27rf2hjfx6XvxXM5v88O4AAAAB
    YktHRAsf18TAAAAAB3RJTUUH6AUPDjAIfUM/ogAAAQBJREFUOMtjYBh0gJGJmYWVjZ0DhzQnFzcE
    8PDyYZHmFxDkhgMhYQx5EVGQhJiAuIQkiCGFLi8tAxSVlQMx5RUUubmV0BUoA+VVVKEcNXVBDTR5
    TS1ubm0dOFdXD90AfaABBnj8L2/IzW1kjEeBCdAAU3whyARUYIZPgTlQgQU+BZbc3FbS+BRYc3Pb
    4JNnsAVaIYJPgR1QgT0+BexABQ74FDg6cXMbOiMJuLi6oaoQABrh7gHnenpxi6Mq8PYBxbavH4jt
    bxJgxc0diGZJUDAomQiGhIaFR4DTVAi6MzwjuZGBURSGQz2iY+DSsXG62PzCHxSfoGSdmJScksow
    mAAAr2Ab+wezZ1oAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjQtMDUtMTVUMTQ6NDg6MDgrMDA6MDBe
    H5jsAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDI0LTA1LTE1VDE0OjQ4OjA4KzAwOjAwL0IgUAAAACh0
    RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyNC0wNS0xNVQxNDo0ODowOCswMDowMHhXAY8AAAAASUVORK5C
    YII=" />
    </svg>
    `,
        },
        link: 'https://blog.csdn.net/weixin_44488811',
      },
      {
        icon: {
          svg: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">  <image id="image0" width="32" height="32" x="0" y="0"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAIGNIUk0AAHomAACAhAAA+gAAAIDo
      AAB1MAAA6mAAADqYAAAXcJy6UTwAAAE+UExURQAAAO1kSeZhSOZgSOVhSOVgSOVhSu6bjP///++f
      keyQf/GqnvfTzOl8afXDuu6YiOyOffGpnOh0X/77+v3z8eqAbf329Pnc1/Cnmf339vnd2O+dj++i
      lPCjlul6Zvri3fri3vS8suyLevGvo/jUzuZmT/329eVlTuh1Yfzw7uduWeVkTf349/O4rf79/OZq
      VPvr6Prl4edyXOuHdfXFvOZoUffSy/bLxPGtoPO2q/bIwPfRyvCjlfjVz/XGveh1YPClmOl8aOyM
      evS+tPKyp+VhSfbKwv79/e2Vhfvo5fKxpfS/tfCom+2RgfTAtvTAt/rk4PbNxvTBt/XBuO+hk+6X
      h/XCue+gke+gkvfQyfKxpvzw7fzx7+hyXe6djv7+/ul4ZOdsVul9afGtofjX0eVjS+6ZivCnmul9
      auuJeB5uZMcAAAAFdFJOUwAcpubt084F6wAAAAFiS0dECIbelXoAAAAHdElNRQfoBQ8OMgaozXAn
      AAABQUlEQVQ4y4WT51bCQBBGN4HFT1SkG0FFQGOhiSJiULGBvffYK/r+L2CQhGyOWXJ/zey5Z2Z3
      zwwhguiiHFyiQIjgpl1wC0SkXRGJTX2Ph+lC9KAH6NVDL9BnGobQDwzooQ8Y/Cf4YRAIhowwbAqR
      KIakYcTiI6NjCYxLSSApSamOkA5hYlIrLU/R6RkkZmkmixzbIi/nChnqnSvO0wWUFrWTcnaJFSoF
      L/J+uqwoSrWoGKxYXlGCHFyFhTWLUANKkXUTySpspDa3qtvsb9atQgM7lO7uddi3FeJm+wOecNhK
      joBjJ+GEJ5yeacSAc6c7XPCEy7rGFXDNE25ayW1rYDjCnaqquXs8PNoKT89two0X+5+08Ar4+MLb
      e/pDv1BHiLLC34SWPxnhq/nNCplmJfBT1yeKu5htXM6r57i8Tuv/C8pTRgKcfki8AAAAJXRFWHRk
      YXRlOmNyZWF0ZQAyMDI0LTA1LTE1VDE0OjUwOjA2KzAwOjAw3Hl8hQAAACV0RVh0ZGF0ZTptb2Rp
      ZnkAMjAyNC0wNS0xNVQxNDo1MDowNiswMDowMK0kxDkAAAAodEVYdGRhdGU6dGltZXN0YW1wADIw
      MjQtMDUtMTVUMTQ6NTA6MDYrMDA6MDD6MeXmAAAAAElFTkSuQmCC" />
      </svg>`,
        },
        link: 'https://www.jianshu.com/u/ab9963651912',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024',
    },
  },
});
