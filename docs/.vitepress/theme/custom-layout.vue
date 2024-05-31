<script setup>
import { ref, onMounted } from 'vue';
import DefaultTheme from 'vitepress/theme';
const { Layout } = DefaultTheme;
import { getLightOrDark, createWX } from '../utils';
import Arrow from './arrow.vue';

// 创建一个响应式属性 wxBase64
const wxBase64 = ref('');
onMounted(async () => {
  renderWx();
  listenMode();
});
const listenMode = () => {
  // 监听documentElement的变化
  const observer = new MutationObserver(async (mutationsList) => {
    const hasClassChange =
      mutationsList.filter((fil) => fil.attributeName === 'class')?.length > 0;
    if (hasClassChange) {
      renderWx();
    }
  });
  observer.observe(document.documentElement, { attributes: true });
};
const renderWx = async () => {
  const mode = getLightOrDark();
  const wxurl = await createWX(mode);
  wxBase64.value = wxurl;
};
</script>

<template>
  <Layout>
    <template #aside-ads-before>
      <div class="wx-title">项目开发需求、技术交流群、新手指南群、个人咨询</div>
      <Arrow class="arrow" />
      <img :src="wxBase64" />
    </template>
  </Layout>
</template>

<style>
.wx-title {
  margin-bottom: 10px;
}
.arrow {
  margin: 0 auto;
  fill: #3c3c43;
}
.dark .arrow {
  fill: #fffff5db !important;
}
</style>
