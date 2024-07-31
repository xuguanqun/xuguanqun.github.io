<script setup>
import { data as posts } from '../../posts/list.data.ts';
</script>

<template>
  <div class="custom-home">
    <div class="custom-home-left">
      <div class="user">
        <img class="avatar" src="../../public/images/avatar.jpg" alt="Avatar" />
        <div class="content">
          <div class="name">xgq</div>
          <div class="desc">desc</div>
        </div>
      </div>
      <!-- <div class="tag-cloud">
        <h3>Tag Cloud</h3>
        <ul>
          <li>Inspiration</li>
          <li>Lifestyle</li>
          <li>Music</li>
          <li>News</li>
          <li>Technology</li>
          <li>Travel</li>
        </ul>
      </div> -->
    </div>
    <div class="custom-home-right">
      <div class="posts">
        <div class="post" v-for="(post, index) in posts" :key="index">
          <!-- <img src="path/to/image1.jpg" alt="Post Image" class="post-image" /> -->
          <div class="post-content">
            <h2>{{ post.frontmatter.title }}</h2>
            <p>{{ post.frontmatter.description }}</p>
            <div class="post-meta">
              <span>{{ post.date }}</span>
            </div>
          </div>
        </div>
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
  padding: 20px;
  box-sizing: border-box;
  > .custom-home-left {
    width: 30%;
    > .user {
      padding: 20px;
      background-color: var(--vp-c-bg-soft);
      border-radius: 8px;
      display: flex;
      gap: 20px;
      > .avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-bottom: 10px;
      }
      > .content {
        > .name {
          font-size: 20px;
          font-weight: 600;
        }
        > .desc {
          margin-top: 10px;
          font-size: 14px;
        }
      }
      h2 {
        margin: 10px 0;
      }
      p {
        margin: 5px 0;
      }
    }
    .tag-cloud {
      margin-top: 20px;
      h3 {
        margin-bottom: 10px;
      }
      ul {
        list-style: none;
        padding: 0;
        li {
          display: inline-block;
          background-color: var(--vp-c-bg-soft);
          padding: 5px 10px;
          border-radius: 15px;
          margin: 5px;
          font-size: 14px;
        }
      }
    }
    .latest-articles {
      margin-top: 20px;
      h3 {
        margin-bottom: 10px;
      }
      .latest-article {
        display: flex;
        align-items: center;
        img {
          width: 50px;
          height: 50px;
          border-radius: 8px;
          margin-right: 10px;
        }
        p {
          margin-right: 10px;
          font-size: 14px;
        }
        span {
          display: block;
          font-size: 12px;
          color: #666;
        }
      }
    }
  }
  > .custom-home-right {
    width: 40%;
    > .posts {
      .post {
        display: flex;
        flex-direction: column;
        background-color: var(--vp-c-bg-soft);
        border-radius: 8px;
        margin-bottom: 20px;
        padding: 20px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        .post-image {
          width: 100%;
          border-radius: 8px;
          margin-bottom: 15px;
        }
        .post-content {
          h2 {
            margin: 10px 0;
          }
          p {
            margin: 10px 0;
          }
          .post-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            font-size: 12px;
            color: #666;
            span {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
