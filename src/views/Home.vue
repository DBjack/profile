<script setup>
import { ref, onMounted } from "vue";
import Header from "../components/Header.vue";
import lottie from "lottie-web";
import {
  profileData,
  skillsData,
  projectsData,
  navLinksData,
} from "../data/home";
import VueFullPage from "vue-fullpage.js";
import "vue-fullpage.js/dist/style.css";

const navLinks = ref(navLinksData);
const profile = ref(profileData);
const skills = ref(skillsData);
const projects = ref(projectsData);

const isScrolling = ref(false);
let scrollTimer = null;

const options = {
  licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
  scrollingSpeed: 1000,
  navigation: true,
  navigationPosition: "right",
  navigationTooltips: ["首页", "技能", "项目"],
  showActiveTooltip: false,
  anchors: ["home", "skills", "projects"],
  onLeave: (origin, destination, direction) => {
    // 开始滚动时触发动画
    isScrolling.value = true;

    // 清除之前的定时器
    if (scrollTimer) clearTimeout(scrollTimer);

    // 滚动结束后1.5秒停止动画
    scrollTimer = setTimeout(() => {
      isScrolling.value = false;
    }, 1500);
  },
};

onMounted(() => {
  lottie.loadAnimation({
    container: document.getElementById("lottie-container"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "https://assets2.lottiefiles.com/packages/lf20_w51pcehl.json",
  });
});
</script>

<template>
  <div class="home" :class="{ 'is-scrolling': isScrolling }">
    <Header :navLinks="navLinks" />

    <full-page ref="fullpage" :options="options">
      <!-- 首页部分 -->
      <div class="section">
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
      </div>

      <!-- 技能部分 -->
      <div class="section">
        <div class="skills">
          <h2>技能专长</h2>
          <p class="section-desc">全栈开发能力，持续学习新技术</p>
          <div class="skills-container">
            <div v-for="skill in skills" :key="skill.name" class="skill-card">
              <div class="skill-header">
                <div class="skill-icon">{{ skill.icon }}</div>
                <h3>{{ skill.name }}</h3>
              </div>
              <p class="skill-desc">{{ skill.description }}</p>
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

      <!-- 项目部分 -->
      <div class="section">
        <div class="featured-projects">
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
        </div>
      </div>
    </full-page>
  </div>
</template>

<style lang="scss" scoped>
.home {
  height: 100vh;
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: fixed;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    background: radial-gradient(
        circle at 0% 0%,
        rgba(52, 152, 219, 0.15) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 100% 0%,
        rgba(155, 89, 182, 0.15) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 100% 100%,
        rgba(46, 204, 113, 0.15) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 0% 100%,
        rgba(241, 196, 15, 0.15) 0%,
        transparent 50%
      );
    pointer-events: none;
    z-index: 0;
    opacity: 0.8;
    transform: translate(0, 0) rotate(0deg);
    transition: transform 0.3s ease-out;
  }

  &::after {
    content: "";
    position: fixed;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.05) 25%,
      transparent 100%
    );
    pointer-events: none;
    z-index: 0;
    transform: translate(0, 0) scale(1);
    transition: transform 0.3s ease-out;
  }

  &.is-scrolling {
    &::before {
      transform: translate(5%, 5%) rotate(1deg);
      transition: transform 1s ease-out;
    }

    &::after {
      transform: translate(-3%, -3%) scale(1.05);
      transition: transform 1s ease-out;
    }
  }
}

/* 暗色模式下的背景 */
:root[class="dark"] .home::before {
  background: radial-gradient(
      circle at 0% 0%,
      rgba(52, 152, 219, 0.2) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 100% 0%,
      rgba(155, 89, 182, 0.2) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 100% 100%,
      rgba(46, 204, 113, 0.2) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 0% 100%,
      rgba(241, 196, 15, 0.2) 0%,
      transparent 50%
    );
}

:deep(.section) {
  position: relative;
  z-index: 1;
}

.section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
}

.hero-content,
.skills,
.featured-projects {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  text-align: center;
  padding: 0 40px;

  h2 {
    font-size: 2.8rem;
    color: var(--theme-text);
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .section-desc {
    color: var(--theme-textSecondary);
    font-size: 1.2rem;
    margin-bottom: 3rem;
  }
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.skill-card {
  background: var(--theme-card);
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: var(--theme-shadow);
  transition: all 0.3s ease;
  border: 1px solid var(--theme-hover);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    border-color: var(--theme-primary);

    .skill-icon {
      transform: scale(1.1);
    }
  }
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  .skill-icon {
    font-size: 2rem;
    transition: transform 0.3s ease;
    background: var(--theme-hover);
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
  }

  h3 {
    color: var(--theme-text);
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0;
  }
}

.skill-desc {
  color: var(--theme-textSecondary);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1.2rem;
  height: 2.7em;
  overflow: hidden;
  text-align: left;
}

.skill-bar {
  height: 6px;
  background: var(--theme-hover);
  border-radius: 3px;
  overflow: hidden;

  .skill-progress {
    height: 100%;
    background: linear-gradient(90deg, var(--theme-primary), #66b1ff);
    border-radius: 3px;
    position: relative;
    transition: width 1s ease-in-out;

    .skill-percentage {
      position: absolute;
      right: 0;
      top: -20px;
      font-size: 0.8rem;
      color: var(--theme-primary);
      font-weight: 500;
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

@media (max-width: 1400px) {
  .skills-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1024px) {
  .skills-container {
    grid-template-columns: repeat(2, 1fr);
  }

  .skills {
    h2 {
      font-size: 2.4rem;
    }
  }
}

@media (max-width: 640px) {
  .skills-container {
    grid-template-columns: 1fr;
  }

  .skills {
    padding: 0 20px;

    h2 {
      font-size: 2rem;
    }

    .section-desc {
      font-size: 1rem;
    }
  }

  .skill-card {
    padding: 1.2rem;
  }
}

/* 自定义导航点样式 */
:deep(#fp-nav ul li a span) {
  background: var(--theme-primary);
}

:deep(#fp-nav ul li .fp-tooltip) {
  color: var(--theme-text);
  background: var(--theme-background);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  opacity: 0;
  transition: opacity 0.3s;
}

:deep(#fp-nav ul li:hover .fp-tooltip) {
  opacity: 1;
}

/* fullpage 容器样式 */
:deep(.fp-overflow) {
  height: 100%;
}

:deep(.section) {
  height: 100vh;
  overflow: hidden;
}
</style>
