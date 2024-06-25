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
  <div class="custom-home">
    <div class="custom-home-left">
      <div class="user">user</div>
    </div>
    <div class="custom-home-right">
      <div class="posts">
        <div class="post">post1</div>
        <div class="post">post2</div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.custom-home {
  display: flex;
  justify-content: center;
  gap: 50px;
  width: 100vw;
  > .custom-home-left {
    width: 30%;
    > .user {
      padding: 10px;
      background-color: var(--vp-c-bg-soft);
    }
  }
  > .custom-home-right {
    width: 40%;
    > .posts {
      padding: 10px;
    }
  }
}
</style>
