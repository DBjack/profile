<script setup>
import Header from "../components/Header.vue";
import { ref } from "vue";

const navLinks = ref([
  { name: "首页", path: "/" },
  { name: "关于我", path: "/about" },
  { name: "作品集", path: "/portfolio" },
  { name: "技能", path: "/skills" },
  { name: "经历", path: "/experience" },
  { name: "推荐", path: "/testimonials" },
  { name: "联系", path: "/contact" },
]);

const skills = ref({
  frontend: [
    { name: "HTML5/CSS3", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Vue.js", level: 88 },
    { name: "React", level: 80 },
    { name: "TypeScript", level: 75 },
  ],
  design: [
    { name: "Figma", level: 85 },
    { name: "Adobe XD", level: 80 },
    { name: "Photoshop", level: 75 },
  ],
  other: [
    { name: "Git", level: 85 },
    { name: "Node.js", level: 70 },
    { name: "MongoDB", level: 65 },
  ],
});
</script>

<template>
  <div class="container">
    <Header :navLinks="navLinks" />

    <main class="skills">
      <h1 class="title">技能专长</h1>

      <div class="skills-container">
        <section class="skill-section">
          <h2>前端开发</h2>
          <div class="skill-bars">
            <div
              v-for="skill in skills.frontend"
              :key="skill.name"
              class="skill-item"
            >
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-percentage">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar">
                <div
                  class="skill-level"
                  :style="{ width: `${skill.level}%` }"
                ></div>
              </div>
            </div>
          </div>
        </section>

        <section class="skill-section">
          <h2>设计工具</h2>
          <div class="skill-bars">
            <div
              v-for="skill in skills.design"
              :key="skill.name"
              class="skill-item"
            >
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-percentage">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar">
                <div
                  class="skill-level"
                  :style="{ width: `${skill.level}%` }"
                ></div>
              </div>
            </div>
          </div>
        </section>

        <section class="skill-section">
          <h2>其他技能</h2>
          <div class="skill-bars">
            <div
              v-for="skill in skills.other"
              :key="skill.name"
              class="skill-item"
            >
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-percentage">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar">
                <div
                  class="skill-level"
                  :style="{ width: `${skill.level}%` }"
                ></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<style scoped>
.container {
  width: 90vw;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem max(2vw, 15px);
  min-height: 100vh;
}

.skills {
  margin-top: 6rem;
  padding: 2rem;
}

.title {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  color: var(--theme-text);
}

.skills-container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.skill-section {
  background: var(--theme-card-bg);
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid var(--theme-border);
}

h2 {
  margin-bottom: 2rem;
  color: var(--theme-text);
}

.skill-item {
  margin-bottom: 1.5rem;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: var(--theme-text);
}

.skill-bar {
  height: 8px;
  background: var(--theme-border);
  border-radius: 4px;
  overflow: hidden;
}

.skill-level {
  height: 100%;
  background: linear-gradient(90deg, #64ffda 0%, #00dc82 100%);
  border-radius: 4px;
  transition: width 1s ease-in-out;
}

@media (max-width: 768px) {
  .skills {
    margin-top: 4rem;
    padding: 1rem;
  }

  .title {
    font-size: 2rem;
  }

  .skill-section {
    padding: 1.5rem;
  }
}
</style>
