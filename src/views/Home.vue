<script setup>
import { ref, onMounted } from "vue";
import Header from "../components/Header.vue";
import lottie from "lottie-web";

const navLinks = ref([
  { name: "首页", path: "/" },
  { name: "关于我", path: "/about" },
  { name: "作品集", path: "/portfolio" },
  { name: "博客", path: "/blog" },
]);

const profile = ref({
  name: "你的名字",
  title: "前端开发工程师",
  description:
    "热爱编程，专注前端开发，擅长 Vue.js、React、TypeScript 等技术栈。",
  highlights: [
    { number: "3+", label: "年工作经验" },
    { number: "50+", label: "项目经验" },
    { number: "10+", label: "技术文章" },
  ],
});

const skills = ref([
  {
    category: "前端开发",
    items: [
      { name: "Vue.js", level: 90, icon: "🎯" },
      { name: "React", level: 85, icon: "⚛️" },
      { name: "TypeScript", level: 80, icon: "📘" },
      { name: "Webpack/Vite", level: 75, icon: "📦" },
    ],
  },
  {
    category: "后端技术",
    items: [
      { name: "Node.js", level: 75, icon: "🚀" },
      { name: "Express", level: 70, icon: "🛤️" },
      { name: "MongoDB", level: 65, icon: "🗄️" },
      { name: "Docker", level: 60, icon: "🐳" },
    ],
  },
  {
    category: "其他技能",
    items: [
      { name: "UI 设计", level: 70, icon: "🎨" },
      { name: "项目管理", level: 75, icon: "📊" },
      { name: "技术分享", level: 80, icon: "🎤" },
      { name: "团队协作", level: 85, icon: "🤝" },
    ],
  },
]);

const projects = ref([
  {
    title: "企业管理系统",
    description: "基于 Vue3 + TypeScript 的现代化企业管理系统",
    tech: ["Vue3", "TypeScript", "Element Plus"],
    link: "#",
  },
  {
    title: "电商平台",
    description: "响应式设计的电商平台，支持多端适配",
    tech: ["React", "Next.js", "TailwindCSS"],
    link: "#",
  },
  {
    title: "数据可视化",
    description: "大数据分析和可视化展示平台",
    tech: ["D3.js", "ECharts", "Canvas"],
    link: "#",
  },
]);

onMounted(() => {
  // 加载 Lottie 动画
  lottie.loadAnimation({
    container: document.getElementById("lottie-container"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    // 这里使用一个开发者动画的 JSON
    path: "https://assets2.lottiefiles.com/packages/lf20_w51pcehl.json",
  });
});
</script>

<template>
  <div class="home">
    <Header :navLinks="navLinks" />

    <main class="main-content">
      <section class="hero">
        <div class="hero-content">
          <div class="profile-info">
            <h1>{{ profile.name }}</h1>
            <h2>{{ profile.title }}</h2>
            <p>{{ profile.description }}</p>

            <div class="highlights">
              <div
                v-for="highlight in profile.highlights"
                :key="highlight.label"
                class="highlight-item"
              >
                <span class="number">{{ highlight.number }}</span>
                <span class="label">{{ highlight.label }}</span>
              </div>
            </div>

            <div class="cta-buttons">
              <router-link to="/portfolio" class="btn primary"
                >查看作品</router-link
              >
              <router-link to="/about" class="btn secondary"
                >了解更多</router-link
              >
            </div>
          </div>

          <div id="lottie-container" class="lottie-animation"></div>
        </div>
      </section>

      <section class="skills">
        <h2>技能专长</h2>
        <div class="skills-container">
          <div
            v-for="category in skills"
            :key="category.category"
            class="skill-category"
          >
            <h3>{{ category.category }}</h3>
            <div class="skills-grid">
              <div
                v-for="skill in category.items"
                :key="skill.name"
                class="skill-card"
              >
                <div class="skill-header">
                  <span class="skill-icon">{{ skill.icon }}</span>
                  <h4>{{ skill.name }}</h4>
                </div>
                <div class="skill-bar">
                  <div
                    class="skill-progress"
                    :style="{ width: `${skill.level}%` }"
                  >
                    <span class="skill-percentage">{{ skill.level }}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="featured-projects">
        <h2>精选项目</h2>
        <div class="projects-grid">
          <div
            v-for="project in projects"
            :key="project.title"
            class="project-card"
          >
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="tech-stack">
              <span v-for="tech in project.tech" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
            <a :href="project.link" class="project-link">了解更多</a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  background: var(--theme-background);
}

.main-content {
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.profile-info {
  h1 {
    font-size: 3.5rem;
    color: var(--theme-text);
    margin-bottom: 1rem;
    background: linear-gradient(45deg, var(--theme-primary), #6c5ce7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h2 {
    font-size: 1.8rem;
    color: var(--theme-primary);
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    color: var(--theme-textSecondary);
    line-height: 1.8;
    margin-bottom: 2rem;
  }
}

.highlights {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
}

.highlight-item {
  text-align: center;

  .number {
    display: block;
    font-size: 2rem;
    font-weight: bold;
    color: var(--theme-primary);
    margin-bottom: 0.5rem;
  }

  .label {
    color: var(--theme-textSecondary);
    font-size: 0.9rem;
  }
}

.lottie-animation {
  width: 100%;
  height: 400px;
}

.cta-buttons {
  display: flex;
  gap: 1rem;

  .btn {
    padding: 1rem 2rem;
    border-radius: 8px;
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.3s ease;

    &.primary {
      background: var(--theme-primary);
      color: white;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
    }

    &.secondary {
      border: 2px solid var(--theme-primary);
      color: var(--theme-primary);

      &:hover {
        background: var(--theme-primary);
        color: white;
      }
    }
  }
}

.skills {
  padding: 6rem 0;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    color: var(--theme-text);
    margin-bottom: 4rem;
  }
}

.skills-container {
  display: grid;
  gap: 4rem;
}

.skill-category {
  h3 {
    font-size: 1.8rem;
    color: var(--theme-text);
    margin-bottom: 2rem;
    text-align: center;
  }
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-card {
  background: var(--theme-card);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: var(--theme-shadow);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  .skill-icon {
    font-size: 1.5rem;
  }

  h4 {
    color: var(--theme-text);
    font-size: 1.1rem;
    margin: 0;
  }
}

.skill-bar {
  height: 10px;
  background: var(--theme-hover);
  border-radius: 5px;
  overflow: hidden;

  .skill-progress {
    height: 100%;
    background: linear-gradient(90deg, var(--theme-primary), #6c5ce7);
    border-radius: 5px;
    transition: width 1s ease-in-out;
    position: relative;

    .skill-percentage {
      position: absolute;
      right: 0;
      top: -25px;
      font-size: 0.8rem;
      color: var(--theme-textSecondary);
    }
  }
}

.featured-projects {
  padding: 6rem 0;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    color: var(--theme-text);
    margin-bottom: 4rem;
  }
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--theme-card);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: var(--theme-shadow);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: var(--theme-text);
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  p {
    color: var(--theme-textSecondary);
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  padding: 0.3rem 0.8rem;
  background: var(--theme-hover);
  color: var(--theme-primary);
  border-radius: 20px;
  font-size: 0.9rem;
}

.project-link {
  display: inline-block;
  color: var(--theme-primary);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
}

@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }

  .highlights {
    justify-content: center;
  }

  .cta-buttons {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .profile-info {
    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 1.4rem;
    }
  }

  .highlights {
    flex-wrap: wrap;
  }

  .cta-buttons {
    flex-direction: column;

    .btn {
      width: 100%;
    }
  }
}
</style>
