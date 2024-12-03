<script setup>
import { ref, onMounted } from "vue";
import Header from "./Header.vue";
import lottie from "lottie-web";

const navLinks = ref([
  { name: "首页", path: "/" },
  { name: "关于我", path: "/about" },
  { name: "作品集", path: "/portfolio" },
]);

const lottieContainer = ref(null);
const currentSection = ref(0);
const sections = ref([]);

// 技能数据
const skills = ref([
  {
    category: "前端开发",
    items: [
      { name: "Vue.js", level: 90 },
      { name: "React", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "CSS/SCSS", level: 90 },
    ],
  },
  {
    category: "后端开发",
    items: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "MongoDB", level: 75 },
      { name: "MySQL", level: 70 },
    ],
  },
]);

onMounted(() => {
  sections.value = document.querySelectorAll(".section");

  // 初始化 Lottie 动画
  if (lottieContainer.value) {
    lottie.loadAnimation({
      container: lottieContainer.value,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/animation.json",
    });
  }

  // 监听滚动
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(sections.value).indexOf(entry.target);
          currentSection.value = index;
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.value.forEach((section) => observer.observe(section));
});

const scrollToSection = (index) => {
  sections.value[index].scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <div class="container">
    <Header :navLinks="navLinks" />

    <!-- 导航指示器 -->
    <div class="section-nav">
      <div
        v-for="(_, index) in sections"
        :key="index"
        class="nav-dot"
        :class="{ active: currentSection === index }"
        @click="scrollToSection(index)"
      ></div>
    </div>

    <!-- 英雄区域 -->
    <section class="section hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="title">
            <span class="greeting">你好，我是</span>
            <span class="name">前端开发工程师</span>
          </h1>
          <p class="subtitle">专注于创建优雅的用户界面和流畅的交互体验</p>
          <div class="tags">
            <span class="tag">Vue.js</span>
            <span class="tag">React</span>
            <span class="tag">TypeScript</span>
            <span class="tag">Node.js</span>
          </div>
        </div>
        <div ref="lottieContainer" class="lottie-animation"></div>
      </div>
      <div class="scroll-hint">
        <span class="mouse">
          <span class="wheel"></span>
        </span>
        <p>向下滚动探索更多</p>
      </div>
    </section>

    <!-- 技能展示 -->
    <section class="section skills-section">
      <div class="skills-content">
        <h2 class="section-title">技能专长</h2>
        <div class="skills-grid">
          <div
            v-for="(category, index) in skills"
            :key="index"
            class="skill-category"
          >
            <h3>{{ category.category }}</h3>
            <div class="skill-bars">
              <div
                v-for="(skill, skillIndex) in category.items"
                :key="skillIndex"
                class="skill-item"
              >
                <div class="skill-info">
                  <span>{{ skill.name }}</span>
                  <span>{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div
                    class="skill-level"
                    :style="{ width: `${skill.level}%` }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 经验展示 -->
    <section class="section experience-section">
      <div class="experience-content">
        <h2 class="section-title">工作经验</h2>
        <div class="experience-timeline">
          <div
            v-for="(exp, index) in experiences"
            :key="index"
            class="experience-item"
            :class="{ right: index % 2 === 1 }"
          >
            <div class="experience-card">
              <div class="period">{{ exp.period }}</div>
              <h3 class="company">{{ exp.company }}</h3>
              <div class="position">{{ exp.position }}</div>
              <p class="description">{{ exp.description }}</p>
              <ul class="highlights">
                <li v-for="(highlight, hIndex) in exp.highlights" :key="hIndex">
                  {{ highlight }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@use "../styles/home";
</style>
