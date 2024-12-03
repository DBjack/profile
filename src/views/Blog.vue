<script setup>
import { ref } from "vue";
import Header from "../components/Header.vue";
import { Card, Tag, Pagination } from "ant-design-vue";

const navLinks = ref([
  { name: "首页", path: "/" },
  { name: "关于我", path: "/about" },
  { name: "作品集", path: "/portfolio" },
  { name: "博客", path: "/blog" },
]);

const blogPosts = ref([
  {
    id: 1,
    title: "深入理解 Vue3 Composition API",
    date: "2024-03-15",
    summary: "本文详细介绍了 Vue3 Composition API 的使用方法和最佳实践...",
    tags: ["Vue3", "JavaScript", "前端开发"],
    coverImage:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "TypeScript 高级特性详解",
    date: "2024-03-10",
    summary: "探索 TypeScript 的高级类型系统，包括泛型、映射类型和条件类型...",
    tags: ["TypeScript", "前端开发"],
    coverImage:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500",
    readTime: "8 min",
  },
  {
    id: 3,
    title: "现代 CSS 布局技巧",
    date: "2024-03-05",
    summary: "介绍 Grid 和 Flexbox 的高级用法，以及响应式设计的最佳实践...",
    tags: ["CSS", "响应式设计"],
    coverImage:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=500",
    readTime: "6 min",
  },
  {
    id: 4,
    title: "React vs Vue：深度对比",
    date: "2024-02-28",
    summary: "对比两大前端框架的优缺点，帮助开发者做出选择...",
    tags: ["React", "Vue", "框架对比"],
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500",
    readTime: "10 min",
  },
  {
    id: 5,
    title: "Web 性能优化实战指南",
    date: "2024-02-20",
    summary: "从实际项目出发，分享前端性能优化的经验和技巧...",
    tags: ["性能优化", "前端开发"],
    coverImage:
      "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=500",
    readTime: "7 min",
  },
]);

const currentPage = ref(1);
const pageSize = ref(6);

const handlePageChange = (page) => {
  currentPage.value = page;
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <div class="blog-container">
    <Header :navLinks="navLinks" />

    <main class="blog-content">
      <h1 class="blog-title">技术博客</h1>

      <div class="blog-grid">
        <a-card
          v-for="post in blogPosts"
          :key="post.id"
          class="blog-card"
          :bodyStyle="{ padding: '20px' }"
        >
          <template #cover>
            <div class="card-image-container">
              <img :src="post.coverImage" :alt="post.title" />
              <div class="image-overlay">
                <span class="read-time">
                  <i class="far fa-clock"></i>
                  {{ post.readTime }}
                </span>
              </div>
            </div>
          </template>

          <div class="post-meta">
            <span class="post-date">
              <i class="far fa-calendar-alt"></i>
              {{ post.date }}
            </span>
          </div>

          <a-card-meta :title="post.title">
            <template #description>
              <p class="post-summary">{{ post.summary }}</p>
              <div class="post-tags">
                <a-tag
                  v-for="tag in post.tags"
                  :key="tag"
                  color="var(--theme-primary)"
                >
                  {{ tag }}
                </a-tag>
              </div>
            </template>
          </a-card-meta>

          <div class="card-footer">
            <a href="#" class="read-more">
              阅读全文
              <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </a-card>
      </div>

      <div class="pagination-container">
        <a-pagination
          v-model:current="currentPage"
          :total="50"
          :pageSize="pageSize"
          @change="handlePageChange"
        />
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.blog-container {
  min-height: 100vh;
  padding: 80px 20px 40px;
  max-width: 1400px;
  margin: 0 auto;
}

.blog-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--theme-text);
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

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.blog-card {
  background: var(--theme-card);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--theme-shadow);

    .card-image-container img {
      transform: scale(1.1);
    }
  }
}

.card-image-container {
  position: relative;
  overflow: hidden;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.7) 100%
    );
    display: flex;
    align-items: flex-end;
    padding: 1rem;

    .read-time {
      color: white;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      i {
        font-size: 1rem;
      }
    }
  }
}

.post-meta {
  margin-bottom: 1rem;

  .post-date {
    color: var(--theme-textSecondary);
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
}

:deep(.ant-card-meta-title) {
  color: var(--theme-text);
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.post-summary {
  color: var(--theme-textSecondary);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.card-footer {
  margin-top: 1.5rem;
  text-align: right;

  .read-more {
    color: var(--theme-primary);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;

    &:hover {
      gap: 0.8rem;

      i {
        transform: translateX(3px);
      }
    }

    i {
      font-size: 0.9rem;
      transition: transform 0.3s ease;
    }
  }
}

.pagination-container {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}

@media (max-width: 768px) {
  .blog-container {
    padding: 80px 10px 20px;
  }

  .blog-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .blog-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
