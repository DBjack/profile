<script setup>
import { ref } from "vue";
import Header from "../components/Header.vue";
import { Card, Tag } from "ant-design-vue";

const navLinks = ref([
  { name: "首页", path: "/" },
  { name: "关于我", path: "/about" },
  { name: "作品集", path: "/portfolio" },
  { name: "博客", path: "/blog" },
]);

const projects = ref([
  {
    title: "电商管理系统",
    description: "基于 Vue3 + TypeScript 的现代电商管理平台",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=500",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    tags: ["Vue3", "TypeScript", "Ant Design Vue"],
    features: ["响应式数据看板", "实时订单管理", "用户行为分析"],
  },
  {
    title: "在线教育平台",
    description: "使用 Next.js 构建的在线学习系统",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    tags: ["React", "Next.js", "TailwindCSS"],
    features: ["直播课程系统", "在线作业批改", "学习进度追踪"],
  },
  {
    title: "社交媒体应用",
    description: "Vue3 + Express 打造的社交平台",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=500",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    tags: ["Vue3", "Express", "MongoDB"],
    features: ["实时聊天功能", "动态信息流", "用户关系网络"],
  },
  {
    title: "博客系统",
    description: "使用 Nuxt.js 构建的个人博客平台",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    tags: ["Nuxt.js", "Vuex", "Markdown"],
    features: ["支持 Markdown 编辑", "SEO 优化", "多语言支持"],
  },
  {
    title: "项目管理工具",
    description: "基于 React 和 Redux 的项目管理应用",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=500",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    tags: ["React", "Redux", "Material-UI"],
    features: ["任务看板", "团队协作", "时间跟踪"],
  },
  {
    title: "天气预报应用",
    description: "使用 Vue3 和 OpenWeather API 构建的天气应用",
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=500",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    tags: ["Vue3", "API", "PWA"],
    features: ["实时天气更新", "未来7天天气预报", "离线访问支持"],
  },
  {
    title: "音乐播放器",
    description: "基于 React 和 Spotify API 的音乐播放器",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=500",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    tags: ["React", "Spotify API", "Styled Components"],
    features: ["播放列表管理", "歌词同步", "个性化推荐"],
  },
  {
    title: "在线聊天室",
    description: "使用 Socket.io 和 Node.js 构建的实时聊天应用",
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=500",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    tags: ["Node.js", "Socket.io", "Express"],
    features: ["实时消息传递", "群组聊天", "消息加密"],
  },
  {
    title: "任务管理器",
    description: "使用 Angular 和 Firebase 构建的任务管理应用",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=500",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    tags: ["Angular", "Firebase", "Bootstrap"],
    features: ["任务优先级设置", "日历视图", "通知提醒"],
  },
  {
    title: "在线商店",
    description: "基于 Shopify 的在线商店解决方案",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=500",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    tags: ["Shopify", "Liquid", "E-commerce"],
    features: ["产品管理", "订单处理", "客户关系管理"],
  },
  {
    title: "健身追踪器",
    description: "使用 Flutter 构建的健身追踪应用",
    image:
      "https://images.unsplash.com/photo-1514516870926-2b66b1a2b8a3?q=80&w=500",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    tags: ["Flutter", "Dart", "Health"],
    features: ["运动记录", "健康数据分析", "目标设定"],
  },
]);
</script>

<template>
  <div class="portfolio-container">
    <Header :navLinks="navLinks" />

    <main class="portfolio-content">
      <h1 class="portfolio-title">作品集</h1>
      <div class="projects-grid">
        <a-card
          v-for="project in projects"
          :key="project.title"
          :bordered="false"
          class="project-card"
          :bodyStyle="{ padding: '20px' }"
        >
          <template #cover>
            <div class="image-container">
              <img :src="project.image" :alt="project.title" />
              <div class="image-overlay">
                <div class="overlay-content">
                  <a :href="project.demoUrl" target="_blank" class="demo-link">
                    在线演示
                  </a>
                  <a
                    :href="project.githubUrl"
                    target="_blank"
                    class="github-link"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </template>

          <a-card-meta :title="project.title">
            <template #description>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-tags">
                <a-tag
                  v-for="tag in project.tags"
                  :key="tag"
                  color="var(--theme-primary)"
                >
                  {{ tag }}
                </a-tag>
              </div>
              <ul class="feature-list">
                <li v-for="feature in project.features" :key="feature">
                  {{ feature }}
                </li>
              </ul>
            </template>
          </a-card-meta>
        </a-card>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.portfolio-container {
  min-height: 100vh;
  padding: 80px 20px 40px;
  max-width: 1400px;
  margin: 0 auto;
}

.portfolio-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--theme-primary);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: var(--theme-primary);
    border-radius: 2px;
  }
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 1rem;
}

@media (max-width: 1400px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .portfolio-container {
    padding: 80px 10px 20px;
  }

  .portfolio-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

.project-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  [data-theme="dark"] & {
    background: rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 12px;
    padding: 2px;
    background: linear-gradient(
      135deg,
      transparent 0%,
      rgba(var(--theme-primary-rgb), 0.1) 50%,
      transparent 100%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1),
      0 0 100px rgba(var(--theme-primary-rgb), 0.1);

    [data-theme="dark"] & {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3), 0 6px 6px rgba(0, 0, 0, 0.2),
        0 0 100px rgba(var(--theme-primary-rgb), 0.15);
    }
  }
}

.image-container {
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  [data-theme="dark"] & {
    background: rgba(0, 0, 0, 0.8);
  }
}

.overlay-content {
  display: flex;
  gap: 1rem;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  a {
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.1);
      transform: translateX(-100%) rotate(45deg);
      transition: transform 0.5s ease;
    }

    &:hover::before {
      transform: translateX(100%) rotate(45deg);
    }

    &.demo-link {
      background: var(--theme-primary);

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(var(--theme-primary-rgb), 0.4);
      }
    }

    &.github-link {
      background: #333;

      [data-theme="dark"] & {
        background: #222;
      }

      &:hover {
        [data-theme="dark"] & {
          background: #444;
        }
      }
    }
  }
}

.project-tags {
  margin: 1rem 0;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;

  :deep(.ant-tag) {
    transition: all 0.3s ease;
    cursor: default;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 2px 8px rgba(var(--theme-primary-rgb), 0.2);
    }
  }
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    color: var(--theme-text);
    opacity: 0.8;
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    position: relative;
    transition: all 0.3s ease;

    &::before {
      content: "•";
      color: var(--theme-primary);
      position: absolute;
      left: 0;
      transition: all 0.3s ease;
    }

    &:hover {
      opacity: 1;
      transform: translateX(5px);

      &::before {
        transform: scale(1.5);
      }
    }
  }
}

@keyframes shine {
  to {
    background-position: 200% center;
  }
}

.project-description {
  margin: 0 0 1rem 0;
  color: var(--theme-text);
  opacity: 0.8;

  [data-theme="dark"] & {
    opacity: 0.9;
  }
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-list li {
  margin-bottom: 0.5rem;
  color: var(--theme-text);
  opacity: 0.8;

  [data-theme="dark"] & {
    opacity: 0.9;
  }

  &:hover {
    [data-theme="dark"] & {
      color: var(--theme-primary);
    }
  }
}

:deep(.ant-card-meta-title) {
  color: var(--theme-text) !important;
}

:deep(.ant-card-meta-description) {
  color: var(--theme-text) !important;
  opacity: 0.8;
}

:deep(.ant-tag) {
  [data-theme="dark"] & {
    border-color: rgba(var(--theme-primary-rgb), 0.3);
    background: rgba(var(--theme-primary-rgb), 0.1);
  }
}
</style>
