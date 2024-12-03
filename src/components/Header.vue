<script setup>
import { ref } from "vue";
import { themes, applyTheme } from "../styles/themes";
import { Dropdown, Menu } from "ant-design-vue";

const currentTheme = ref(localStorage.getItem("theme") || "minimal");
const menuVisible = ref(false);

const switchTheme = (themeName) => {
  currentTheme.value = themeName;
  applyTheme(themeName);
  menuVisible.value = false;
};

defineProps({
  navLinks: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <header class="header">
    <nav class="nav">
      <router-link
        v-for="link in navLinks"
        :key="link.path"
        :to="link.path"
        class="nav-link"
      >
        {{ link.name }}
      </router-link>
    </nav>

    <a-dropdown v-model:visible="menuVisible" trigger="click">
      <template #overlay>
        <a-menu class="theme-menu">
          <a-menu-item
            v-for="(theme, name) in themes"
            :key="name"
            @click="switchTheme(name)"
            class="theme-menu-item"
          >
            <div class="theme-menu-content">
              <span
                class="theme-preview"
                :style="{
                  background: theme.colors.primary,
                  boxShadow: `0 0 10px ${theme.colors.primary}`,
                }"
              ></span>
              <span class="theme-name">{{ theme.name }}</span>
            </div>
          </a-menu-item>
        </a-menu>
      </template>
      <button class="theme-dropdown-button" @click="menuVisible = !menuVisible">
        <i class="fas fa-palette theme-icon"></i>
      </button>
    </a-dropdown>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(var(--theme-primaryRgb), 0.05);
  backdrop-filter: blur(10px);
  z-index: 100;
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: var(--theme-text);
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  padding: 0.5rem 0;
  transition: all 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--theme-primary);
    transition: width 0.3s ease;
  }

  &:hover,
  &.router-link-active {
    color: var(--theme-primary);

    &::after {
      width: 100%;
    }
  }
}

.theme-dropdown-button {
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  background: var(--theme-card);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  &:hover {
    transform: translateY(-2px);
  }

  .theme-icon {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    transition: all 0.3s ease;
  }
}

.theme-icon {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

:deep(.ant-menu-item) {
  display: flex;
  align-items: center;
  gap: 8px;
}

@media (max-width: 768px) {
  .header {
    padding: 0 1rem;
  }

  .nav {
    gap: 1rem;
  }

  .theme-dropdown-button {
    width: 28px;
    height: 28px;
  }

  .theme-icon {
    width: 14px;
    height: 14px;
  }
}

:deep(.theme-menu) {
  min-width: 150px;
  padding: 8px;
  background: var(--theme-background);
  border: 1px solid var(--theme-border);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

:deep(.theme-menu-item) {
  padding: 8px 12px;
  margin: 4px 0;
  border-radius: 6px;
  transition: all 0.3s ease;

  &:hover {
    background: var(--theme-hover);
  }
}

:deep(.theme-menu-content) {
  display: flex;
  align-items: center;
  gap: 12px;
}

:deep(.theme-preview) {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-block;
  transition: all 0.3s ease;
}

:deep(.theme-name) {
  color: var(--theme-text);
  font-size: 14px;
  text-transform: capitalize;
}

.theme-dropdown {
  animation: dropdownFade 0.2s ease;
}

@keyframes dropdownFade {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
