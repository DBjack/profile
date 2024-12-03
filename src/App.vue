<script setup>
import { onMounted } from "vue";
import FloatingContact from "./components/FloatingContact.vue";
import { applyTheme } from "./styles/themes";

onMounted(() => {
  const savedTheme = localStorage.getItem("theme") || "minimal";
  applyTheme(savedTheme);
});
</script>

<template>
  <router-view></router-view>
  <FloatingContact />
</template>

<style>
:root {
  --theme-primary: #2196f3;
  --theme-primaryRgb: 33, 150, 243;
  --theme-secondary: #90caf9;
  --theme-text: #333333;
  --theme-textSecondary: #666666;
  --theme-background: #ffffff;
  --theme-backgroundGradient: linear-gradient(135deg, #ffffff, #f5f5f5);
  --theme-border: #e0e0e0;
  --theme-card: rgba(0, 0, 0, 0.02);
  --theme-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  --theme-hover: #2196f333;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  color: var(--theme-text);
  background: var(--theme-background);
  background-image: var(--theme-backgroundGradient);
  min-height: 100vh;
  transition: all 0.3s ease;
}

#app {
  position: relative;
  min-height: 100vh;
}

/* Ant Design Vue 暗色菜单样式覆盖 */
.ant-dropdown .ant-dropdown-menu {
  background: var(--theme-background);
  border: 1px solid var(--theme-border);
}

.ant-dropdown .ant-dropdown-menu-item {
  color: var(--theme-text);
}

.ant-dropdown .ant-dropdown-menu-item:hover {
  background: var(--theme-hover);
}
</style>
