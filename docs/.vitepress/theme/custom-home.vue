<script setup>
import { useData } from 'vitepress';
import { toRaw } from 'vue';
const { site } = useData();
const { themeConfig } = site.getter() || {};
const { sidebar } = themeConfig || {};
const postsToRaw = toRaw(sidebar['/posts/'] || {});
const posts = postsToRaw?.[0]?.items || [];
console.log('posts', posts);
</script>

<template>
  <div class="custom-home">customhome</div>
</template>
