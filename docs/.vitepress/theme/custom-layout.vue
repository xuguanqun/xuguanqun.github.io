<script setup>
import DefaultTheme from 'vitepress/theme';
const { Layout } = DefaultTheme;
import wx from '../../public/images/wx.jpg';
</script>

<template>
  <Layout>
    <template #aside-ads-before>
      <div class="wx-title">项目开发需求、技术交流群、新手指南群、个人咨询</div>
      <img :src="wx" />
    </template>
  </Layout>
</template>

<style>
.wx-title {
  margin-bottom: 10px;
}
</style>
