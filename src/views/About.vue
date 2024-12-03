<script setup>
import { ref, onMounted } from "vue";
import Header from "../components/Header.vue";
import { Timeline } from "ant-design-vue";

const navLinks = ref([
  { name: "首页", path: "/" },
  { name: "关于我", path: "/about" },
  { name: "作品集", path: "/portfolio" },
  { name: "博客", path: "/blog" },
]);

const experiences = ref([
  {
    title: "高级前端开发工程师",
    company: "XX科技有限公司",
    period: "2021 - 至今",
    description:
      "负责公司核心产品的前端架构设计和开发，带领团队完成多个重要项目。",
    achievements: [
      "优化前端性能，提升页面加载速度50%",
      "建立前端开发规范和组件库",
      "指导初级开发者，提升团队整体技术水平",
    ],
  },
  {
    title: "前端开发工程师",
    company: "XX网络科技公司",
    period: "2019 - 2021",
    description: "参与电商平台的开发和维护，负责多个核心功能模块。",
    achievements: [
      "实现复杂的商品展示和购物车功能",
      "开发通用组件库，提高开发效率",
      "解决跨浏览器兼容性问题",
    ],
  },
]);

const skills = ref([
  {
    name: "前端开发",
    items: ["Vue.js", "React", "TypeScript", "Webpack", "Sass/Less"],
  },
  {
    name: "后端技术",
    items: ["Node.js", "Express", "MongoDB", "RESTful API"],
  },
  {
    name: "开发工具",
    items: ["Git", "VS Code", "Docker", "Nginx"],
  },
  {
    name: "软技能",
    items: ["团队协作", "项目管理", "技术分享", "问题解决"],
  },
]);

const interests = ref([
  {
    icon: "🎮",
    name: "游戏开发",
    description: "业余时间学习游戏开发，热衷于创造有趣的交互体验",
  },
  {
    icon: "📚",
    name: "技术写作",
    description: "经常在技术社区分享开发经验和心得",
  },
  {
    icon: "🎨",
    name: "UI 设计",
    description: "对界面设计有浓厚兴趣，追求极致的用户体验",
  },
  {
    icon: "🌱",
    name: "开源贡献",
    description: "积极参与开源项目，为社区贡献代码",
  },
]);

// 动画相关
const sections = ref([]);
const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
};

onMounted(() => {
  sections.value = document.querySelectorAll(".animate-section");
  const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.2,
  });

  sections.value.forEach((section) => {
    observer.observe(section);
  });
});
</script>

<template>
  <div class="about-container">
    <Header :navLinks="navLinks" />

    <!-- 个人简介 -->
    <section class="hero-section animate-section">
      <div class="profile-card">
        <div class="profile-image">
          <!-- 这里可以放置你的头像 -->
          <div class="avatar-placeholder">
            <span>YH</span>
          </div>
        </div>
        <div class="profile-info">
          <h1>前端开发工程师</h1>
          <p class="bio">热爱技术，追求创新，致力于创造优秀的用户体验</p>
          <div class="contact-info">
            <a href="mailto:example@email.com" class="contact-item">
              <i class="fas fa-envelope"></i>
              example@email.com
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              class="contact-item"
            >
              <i class="fab fa-github"></i>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 工作经历 -->
    <section class="experience-section animate-section">
      <h2>工作经历</h2>
      <a-timeline mode="alternate">
        <a-timeline-item v-for="(exp, index) in experiences" :key="index">
          <div class="experience-card">
            <h3>{{ exp.title }}</h3>
            <h4>{{ exp.company }}</h4>
            <p class="period">{{ exp.period }}</p>
            <p class="description">{{ exp.description }}</p>
            <ul class="achievements">
              <li v-for="(achievement, i) in exp.achievements" :key="i">
                {{ achievement }}
              </li>
            </ul>
          </div>
        </a-timeline-item>
      </a-timeline>
    </section>

    <!-- 技能展示 -->
    <section class="skills-section animate-section">
      <h2>专业技能</h2>
      <div class="skills-grid">
        <div
          v-for="(category, index) in skills"
          :key="index"
          class="skill-card"
        >
          <h3>{{ category.name }}</h3>
          <div class="skill-tags">
            <span
              v-for="(item, i) in category.items"
              :key="i"
              class="skill-tag"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- 兴趣爱好 -->
    <section class="interests-section animate-section">
      <h2>兴趣爱好</h2>
      <div class="interests-grid">
        <div
          v-for="(interest, index) in interests"
          :key="index"
          class="interest-card"
        >
          <div class="interest-icon">{{ interest.icon }}</div>
          <h3>{{ interest.name }}</h3>
          <p>{{ interest.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.about-container {
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

section {
  margin-bottom: 100px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
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

/* 个人简介卡片 */
.profile-card {
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 2rem;
  background: var(--theme-card);
  border-radius: 16px;
  box-shadow: var(--theme-shadow);
  margin-top: 2rem;

  .profile-image {
    flex-shrink: 0;

    .avatar-placeholder {
      width: 200px;
      height: 200px;
      background: var(--theme-primary);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 4rem;
      color: white;
    }
  }

  .profile-info {
    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: var(--theme-text);
    }

    .bio {
      font-size: 1.2rem;
      color: var(--theme-textSecondary);
      margin-bottom: 1.5rem;
    }

    .contact-info {
      display: flex;
      gap: 1.5rem;

      .contact-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--theme-text);
        text-decoration: none;
        transition: all 0.3s ease;

        &:hover {
          color: var(--theme-primary);
        }
      }
    }
  }
}

/* 工作经历时间线 */
.experience-card {
  padding: 1.5rem;
  background: var(--theme-card);
  border-radius: 1rem;
  border: 1px solid var(--theme-border);

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--theme-text);
  }

  h4 {
    font-size: 1.2rem;
    color: var(--theme-textSecondary);
    margin-bottom: 0.5rem;
  }

  .period,
  .description {
    margin-bottom: 1rem;
    color: var(--theme-text);
  }

  .achievements {
    list-style: none;
    padding-left: 0;

    li {
      margin-bottom: 0.5rem;
      color: var(--theme-textSecondary);
    }
  }
}
</style>
