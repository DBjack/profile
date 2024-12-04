<script setup>
import { ref } from "vue";

const isVisible = ref(false);
const isHovered = ref(false);

const toggleContact = () => {
  isVisible.value = !isVisible.value;
};

const handleMouseEnter = () => {
  isHovered.value = true;
};

const handleMouseLeave = () => {
  isHovered.value = false;
};

const contactInfo = {
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  wechat: "your-wechat-id",
};
</script>

<template>
  <div class="contact-container">
    <!-- 悬浮按钮 -->
    <button
      class="contact-trigger"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @click="toggleContact"
      :class="{ active: isVisible }"
    >
      <span class="icon">📬</span>
      <span class="text" v-show="isHovered">联系我</span>
    </button>

    <!-- 联系信息面板 -->
    <div
      class="contact-panel"
      v-show="isVisible"
      :class="{ visible: isVisible }"
    >
      <div class="contact-header">
        <h3>联系方式</h3>
        <button class="close-btn" @click="toggleContact">×</button>
      </div>

      <div class="contact-content">
        <div class="contact-item">
          <span class="icon">📧</span>
          <a :href="`mailto:${contactInfo.email}`">{{ contactInfo.email }}</a>
        </div>

        <div class="contact-item">
          <span class="icon">🐙</span>
          <a :href="contactInfo.github" target="_blank">GitHub</a>
        </div>

        <div class="contact-item">
          <span class="icon">💼</span>
          <a :href="contactInfo.linkedin" target="_blank">LinkedIn</a>
        </div>

        <div class="contact-item">
          <span class="icon">💬</span>
          <span>WeChat: {{ contactInfo.wechat }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-container {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
}

.contact-trigger {
  background: var(--theme-primary);
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    padding-right: 20px;

    .text {
      width: auto;
      opacity: 1;
    }
  }

  &.active {
    transform: translateX(-300px);
  }

  .icon {
    font-size: 1.2rem;
  }

  .text {
    width: 0;
    opacity: 0;
    transition: all 0.3s ease;
  }
}

.contact-panel {
  position: absolute;
  right: -300px;
  top: 50%;
  transform: translateY(-50%);
  width: 280px;
  background: var(--theme-card);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &.visible {
    right: 60px;
  }
}

.contact-header {
  padding: 16px;
  border-bottom: 1px solid var(--theme-hover);
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 0;
    color: var(--theme-text);
  }

  .close-btn {
    background: none;
    border: none;
    color: var(--theme-textSecondary);
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0;

    &:hover {
      color: var(--theme-primary);
    }
  }
}

.contact-content {
  padding: 16px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;

  .icon {
    font-size: 1.2rem;
  }

  a {
    color: var(--theme-primary);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

@media (max-width: 768px) {
  .contact-container {
    right: 10px;
  }

  .contact-trigger {
    padding: 8px;

    &:hover {
      padding-right: 8px;
    }

    .text {
      display: none;
    }
  }

  .contact-panel {
    width: 240px;

    &.visible {
      right: 50px;
    }
  }
}
</style>
