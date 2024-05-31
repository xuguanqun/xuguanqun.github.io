<script setup>
import { useData } from 'vitepress';
const { site } = useData();
const { themeConfig } = site.getter() || {};
const { sidebar } = themeConfig || {};
console.log(sidebar['/posts/']);
console.log(sidebar['/posts/'].get());
// for (let key in sidebar) {
//   console.log(sidebar[key]);
// }
</script>

<template>
  <div class="custom-home">customhome</div>
</template>
