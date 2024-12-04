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
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  background: var(--theme-background);
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
}

.nav-link {
  color: var(--theme-text);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    color: var(--theme-primary);
    background: var(--theme-hover);
  }

  &.router-link-active {
    color: var(--theme-primary);
    background: var(--theme-hover);
  }
}

@media (max-width: 768px) {
  .nav {
    justify-content: center;
  }
}
</style>
