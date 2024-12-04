<script setup>
import { ref } from "vue";
import Header from "./components/Header.vue";
import Contact from "./components/Contact.vue";
import { navLinksData } from "./data/home";

const navLinks = ref(navLinksData);
</script>

<template>
  <div class="app">
    <Header :navLinks="navLinks" />
    <router-view></router-view>
    <Contact />
  </div>
</template>

<style lang="scss">
.app {
  min-height: 100vh;
  background: var(--theme-background);
}

/* 全局样式 */
:root {
  --theme-background: #ffffff;
  --theme-text: #2c3e50;
  --theme-textSecondary: #666666;
  --theme-primary: #3498db;
  --theme-hover: #f5f5f5;
  --theme-card: #ffffff;
  --theme-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* 暗色主题 */
@media (prefers-color-scheme: dark) {
  :root {
    --theme-background: #1a1a1a;
    --theme-text: #ffffff;
    --theme-textSecondary: #999999;
    --theme-primary: #3498db;
    --theme-hover: #2c2c2c;
    --theme-card: #2c2c2c;
    --theme-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--theme-background);
  color: var(--theme-text);
}

* {
  box-sizing: border-box;
}
</style>
