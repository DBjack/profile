<script setup>
import { ref } from "vue";
import Header from "../components/Header.vue";

const navLinks = ref([
  { name: "首页", path: "/" },
  { name: "关于我", path: "/about" },
  { name: "作品集", path: "/portfolio" },
  { name: "博客", path: "/blog" },
]);

// 左侧目录
const categories = ref([
  {
    title: "开篇词",
    path: "/blog#intro",
  },
  {
    title: "极简部署",
    children: [
      { title: "一: 手写最简静态资源服务器", path: "/blog#static-server" },
      { title: "二: 基于docker部署极简版", path: "/blog#docker-deploy" },
      { title: "三: 基于nginx镜像部署及学习", path: "/blog#nginx-deploy" },
    ],
  },
  {
    title: "单页部署",
    children: [
      {
        title: "四: docker镜像优化及多阶段构建",
        path: "/blog#docker-optimize",
      },
      { title: "五: nginx 配置及长期缓存优化", path: "/blog#nginx-cache" },
    ],
  },
  {
    title: "对象存储",
    children: [
      { title: "六: 将静态资源部署在OSS/CDN", path: "/blog#oss-cdn" },
      {
        title: "七: 静态资源上传时间与空间优化",
        path: "/blog#static-optimize",
      },
    ],
  },
  {
    title: "服务编排",
    children: [
      { title: "八: 服务网关 traefik 搭建", path: "/blog#traefik" },
      { title: "九: 前端应用域名配置", path: "/blog#domain-config" },
    ],
  },
]);

// 右侧导航
const onThisPage = ref([
  { title: "文字与视频内容", path: "#content" },
  { title: "前置知识", path: "#prerequisites" },
  { title: "你会学到什么", path: "#learning" },
  { title: "适合人群", path: "#audience" },
  { title: "作者简介", path: "#author" },
]);

const activeSection = ref("intro");

const setActiveSection = (section) => {
  activeSection.value = section;
};
</script>

<template>
  <div class="blog-container">
    <Header :navLinks="navLinks" />

    <div class="content-wrapper">
      <!-- 左侧目录 -->
      <aside class="sidebar left-sidebar">
        <nav class="sidebar-nav">
          <div
            v-for="category in categories"
            :key="category.title"
            class="nav-group"
          >
            <h3 class="nav-group-title">{{ category.title }}</h3>
            <ul v-if="category.children" class="nav-group-items">
              <li
                v-for="item in category.children"
                :key="item.title"
                class="nav-item"
              >
                <a
                  :href="item.path"
                  :class="{ active: activeSection === item.path.split('#')[1] }"
                  @click="setActiveSection(item.path.split('#')[1])"
                >
                  {{ item.title }}
                </a>
              </li>
            </ul>
            <a
              v-else
              :href="category.path"
              :class="{ active: activeSection === category.path.split('#')[1] }"
              @click="setActiveSection(category.path.split('#')[1])"
              class="nav-item"
            >
              {{ category.title }}
            </a>
          </div>
        </nav>
      </aside>

      <!-- 主要内容区 -->
      <main class="main-content">
        <article class="article">
          <h1>专栏介绍</h1>

          <div class="content-block">
            <blockquote>
              为了更深入理解前端部署，我们将从最原始的部署方案过渡到 Docker 与
              Kubernetes，逐步进行优化，并使用 CICD 完善工程质量及部署效率。
            </blockquote>

            <p>你们公司的前端是如何进行部署的？很多人对前端部署感觉到陌生。</p>

            <p>
              一方面，这些事情与业务无关，也很少有人注意到。另一方面，即使注意到，前端部署一般交给前端负责人或运维同学来负责，也很少有机会接触到相关事项。即使身在其中，前端部署复杂度较高，仅需点点点即可完成部署，很多人对其中原理也难以捕捉。
            </p>

            <p>
              实际上我们对于前端的部署，就是对其静态资源的服务。本专栏通过使用
              nodejs
              写一个简单的静态服务器，来简单解释前端部署。接下来本专栏将引导你使用
              Docker 部署，并优化镜像、优化
              Pipeline，一步一步探索前端部署优化及发展，并以单页应用为例进行实践部署。
            </p>

            <!-- 暂时注释掉图片，直到有正确的图片资源 -->
            <!-- <img src="@/assets/images/deployment-flow.png" alt="前端部署流程简介" class="flow-diagram"> -->
          </div>
        </article>
      </main>

      <!-- 右侧导航 -->
      <aside class="sidebar right-sidebar">
        <div class="on-this-page">
          <h3>On This Page</h3>
          <nav>
            <ul>
              <li v-for="item in onThisPage" :key="item.title" class="nav-item">
                <a :href="item.path">{{ item.title }}</a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blog-container {
  min-height: 100vh;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr) 240px;
  gap: 2rem;
  max-width: 1440px;
  margin: 80px auto 0;
  padding: 0 2rem;
}

.sidebar {
  position: sticky;
  top: 80px;
  height: calc(100vh - 80px);
  overflow-y: auto;
  padding: 1rem 0;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--theme-border);
    border-radius: 3px;
  }
}

.nav-group {
  margin-bottom: 1.5rem;
}

.nav-group-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--theme-text);
  margin-bottom: 0.5rem;
  padding: 0.35rem 1rem;
}

.nav-group-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  font-size: 0.875rem;

  a {
    display: block;
    padding: 0.35rem 1rem;
    color: var(--theme-textSecondary);
    text-decoration: none;
    transition: all 0.3s ease;
    border-left: 2px solid transparent;

    &:hover {
      color: var(--theme-primary);
      background: var(--theme-hover);
    }

    &.active {
      color: var(--theme-primary);
      border-left-color: var(--theme-primary);
      background: var(--theme-hover);
    }
  }
}

.main-content {
  padding: 1rem 2rem;
  max-width: 100%;
}

.article {
  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: var(--theme-text);
  }

  blockquote {
    margin: 1rem 0;
    padding: 1rem;
    border-left: 4px solid var(--theme-primary);
    background: var(--theme-card);
    color: var(--theme-textSecondary);
  }

  p {
    line-height: 1.7;
    margin: 1rem 0;
    color: var(--theme-text);
  }
}

.flow-diagram {
  width: 100%;
  max-width: 800px;
  margin: 2rem 0;
  border-radius: 8px;
}

.on-this-page {
  padding: 0 1rem;

  h3 {
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--theme-text);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
}

@media (max-width: 1280px) {
  .content-wrapper {
    grid-template-columns: 280px minmax(0, 1fr);
  }

  .right-sidebar {
    display: none;
  }
}

@media (max-width: 768px) {
  .content-wrapper {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }

  .left-sidebar {
    display: none;
  }

  .main-content {
    padding: 1rem;
  }
}
</style>
