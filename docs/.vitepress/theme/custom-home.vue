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
      <div class="user">
        <img src="../../public/images/avatar.jpg" alt="Avatar" class="avatar" />
        <h2>Jonathan Doe</h2>
        <p>Canada</p>
        <p>
          Hello! My name is Jonathan Doe! Actively writing articles for this
          website. I really like tutorials and illustrations, so stay alert for
          my next tutorials.
        </p>
      </div>
      <div class="tag-cloud">
        <h3>Tag Cloud</h3>
        <ul>
          <li>Inspiration</li>
          <li>Lifestyle</li>
          <li>Music</li>
          <li>News</li>
          <li>Technology</li>
          <li>Travel</li>
        </ul>
      </div>
      <div class="latest-articles">
        <h3>Latest Articles</h3>
        <div class="latest-article">
          <!-- <img src="path/to/article-image.jpg" alt="Article Image" /> -->
          <p>Far far away, behind the word mountains</p>
          <span>Mar 19, 2023</span>
        </div>
      </div>
    </div>
    <div class="custom-home-right">
      <div class="posts">
        <div class="post">
          <!-- <img src="path/to/image1.jpg" alt="Post Image" class="post-image" /> -->
          <div class="post-content">
            <h2>Far far away, behind the word mountains</h2>
            <p>
              Hey there, welcome to your new home on the web! Unlike social
              networks, this one is all yours. Publish your...
            </p>
            <div class="post-meta">
              <span>Mar 19, 2023</span>
              <span>2 min read</span>
              <span>Rating: ★★★</span>
              <span>Jonathan Doe</span>
            </div>
          </div>
        </div>
        <div class="post">
          <!-- <img src="path/to/image2.jpg" alt="Post Image" class="post-image" /> -->
          <div class="post-content">
            <h2>Building your audience with subscriber signups</h2>
            <p>
              How Ghost allows you to turn anonymous readers into an audience of
              active subscribers, so you know what's working and what isn't...
            </p>
            <div class="post-meta">
              <span>Jul 25, 2022</span>
              <span>3 min read</span>
              <span>Rating: ★★★★</span>
              <span>Jonathan Doe</span>
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
      text-align: center;
      .avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-bottom: 10px;
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
