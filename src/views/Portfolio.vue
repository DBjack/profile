<script setup>
import { ref } from "vue";
import { portfolioData } from "../data/portfolio";

const projects = ref(portfolioData);
const activeProject = ref(null);

const showProjectDetails = (project) => {
  activeProject.value = project;
};

const closeProjectDetails = () => {
  activeProject.value = null;
};
</script>

<template>
  <div class="portfolio">
    <div class="portfolio-header">
      <h1>作品集</h1>
      <p>这里展示了我的一些代表性项目</p>
    </div>

    <div class="projects-grid">
      <div
        v-for="project in projects"
        :key="project.id"
        class="project-card"
        @click="showProjectDetails(project)"
      >
        <div class="project-image">
          <img :src="project.image" :alt="project.title" />
        </div>
        <div class="project-info">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="tech-stack">
            <span v-for="tech in project.tech" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- 项目详情模态框 -->
    <div
      v-if="activeProject"
      class="project-modal"
      @click.self="closeProjectDetails"
    >
      <div class="modal-content">
        <button class="close-btn" @click="closeProjectDetails">×</button>

        <div class="modal-header">
          <h2>{{ activeProject.title }}</h2>
        </div>

        <div class="modal-body">
          <div class="project-image">
            <img :src="activeProject.image" :alt="activeProject.title" />
          </div>

          <div class="project-details">
            <h3>项目描述</h3>
            <p>{{ activeProject.description }}</p>

            <h3>主要功能</h3>
            <ul>
              <li v-for="feature in activeProject.features" :key="feature">
                {{ feature }}
              </li>
            </ul>

            <h3>技术栈</h3>
            <div class="tech-stack">
              <span
                v-for="tech in activeProject.tech"
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>

            <div class="project-links">
              <a :href="activeProject.demo" target="_blank" class="btn primary">
                查看演示
              </a>
              <a
                :href="activeProject.link"
                target="_blank"
                class="btn secondary"
              >
                源码
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.portfolio {
  padding: 120px 20px 80px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  background: var(--theme-background);
}

.portfolio-header {
  text-align: center;
  margin-bottom: 60px;

  h1 {
    font-size: 2.5rem;
    color: var(--theme-text);
    margin-bottom: 1rem;
  }

  p {
    color: var(--theme-textSecondary);
    font-size: 1.1rem;
  }
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--theme-card);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--theme-shadow);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .project-image {
    width: 100%;
    height: 200px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}

.project-info {
  padding: 1.5rem;

  h3 {
    color: var(--theme-text);
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
}

.tech-tag {
  padding: 0.3rem 0.8rem;
  background: var(--theme-hover);
  color: var(--theme-primary);
  border-radius: 20px;
  font-size: 0.9rem;
}

.project-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: var(--theme-background);
  border-radius: 12px;
  width: 90%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: var(--theme-textSecondary);
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 1;

    &:hover {
      color: var(--theme-primary);
    }
  }
}

.modal-header {
  padding: 1.5rem;
  border-bottom: 1px solid var(--theme-hover);

  h2 {
    color: var(--theme-text);
    margin: 0;
  }
}

.modal-body {
  padding: 1.5rem;

  .project-image {
    width: 100%;
    height: 400px;
    margin-bottom: 2rem;
    border-radius: 8px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.project-details {
  h3 {
    color: var(--theme-text);
    margin: 1.5rem 0 1rem;
  }

  p {
    color: var(--theme-textSecondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem;

    li {
      color: var(--theme-textSecondary);
      margin-bottom: 0.5rem;
      padding-left: 1.5rem;
      position: relative;

      &:before {
        content: "•";
        color: var(--theme-primary);
        position: absolute;
        left: 0;
      }
    }
  }
}

.project-links {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  .btn {
    padding: 0.8rem 2rem;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.3s ease;

    &.primary {
      background: var(--theme-primary);
      color: rgb(247, 244, 244);

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

@media (max-width: 768px) {
  .portfolio-header {
    h1 {
      font-size: 2rem;
    }
  }

  .modal-content {
    width: 95%;
  }

  .modal-body .project-image {
    height: 250px;
  }

  .project-links {
    flex-direction: column;

    .btn {
      width: 100%;
    }
  }
}
</style>
