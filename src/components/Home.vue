<script setup>
import { ref } from 'vue'

const navLinks = ref([
  { name: '首页', path: '#' },
  { name: '关于我', path: '#' },
  { name: '作品集', path: '#' },
  { name: '技能', path: '#' },
  { name: '经历', path: '#' },
  { name: '推荐', path: '#' },
  { name: '联系', path: '#' }
])

const experienceCards = ref([
  {
    icon: 'code-icon',
    years: '3年',
    title: '前端开发'
  },
  {
    icon: 'work-icon',
    years: '7年',
    title: '工作经验'
  },
  {
    icon: 'design-icon',
    years: '4年',
    title: '设计经验'
  }
])
</script>

<template>
  <div class="container">
    <!-- 导航栏 -->
    <header class="header">
      <div class="logo">HS</div>
      <nav class="nav">
        <a 
          v-for="link in navLinks" 
          :key="link.name"
          :href="link.path"
          class="nav-link"
        >
          {{ link.name }}
        </a>
      </nav>
    </header>

    <!-- 主要内容区 -->
    <main class="hero">
      <div class="hero-content">
        <span class="greeting">👋 你好！</span>
        <h1 class="title">我是亨利</h1>
        <p class="subtitle">前端开发工程师 · UI设计师</p>
        
        <div class="social-links">
          <a href="#" class="social-link">领英</a>
          <a href="#" class="social-link">GitHub</a>
          <a href="#" class="social-link">作品集</a>
        </div>
      </div>

      <div class="avatar">
        <!-- Avatar image will go here -->
      </div>
    </main>

    <!-- 经验卡片 -->
    <section class="experience">
      <div 
        v-for="card in experienceCards"
        :key="card.title"
        class="card"
      >
        <div :class="card.icon"></div>
        <p class="card-years">{{ card.years }}</p>
        <h3 class="card-title">{{ card.title }}</h3>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* 基础样式 */
:root {
  font-size: calc(14px + 0.4vw);
}

.container {
  width: 90vw;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem max(2vw, 15px);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(8px);
  z-index: 1000;
}

.nav {
  width: 90%;
  max-width: 1400px;
  display: flex;
  justify-content: flex-end;
  gap: clamp(1rem, 2vw, 2rem);
  flex-wrap: wrap;
}

.hero {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 8rem);
  width: 100%;
  text-align: center;
}

.hero-content {
  width: 90%;
  max-width: 800px;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.experience {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
  gap: clamp(1rem, 3vw, 3rem);
  width: 100%;
  padding: 2rem 0;
}

.card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  padding: clamp(1.5rem, 3vw, 3rem);
  border-radius: clamp(0.5rem, 1vw, 1rem);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .header {
    padding: 0.5rem 0;
  }

  .nav {
    justify-content: center;
  }

  .hero {
    margin-top: 3rem;
  }

  .hero-content {
    padding: 1rem;
  }
}
</style>
