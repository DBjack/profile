<script setup>
import { ref } from "vue";
import { themes, applyTheme } from "../styles/themes";

const currentTheme = ref(localStorage.getItem("theme") || "cyberpunk");

const switchTheme = (themeName) => {
  currentTheme.value = themeName;
  applyTheme(themeName);
};
</script>

<template>
  <div class="theme-switcher">
    <button
      v-for="(theme, name) in themes"
      :key="name"
      class="theme-button"
      :class="{ active: currentTheme === name }"
      @click="switchTheme(name)"
    >
      <span
        class="theme-icon"
        :style="{ background: theme.colors.primary }"
      ></span>
      {{ theme.name }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.theme-switcher {
  position: fixed;
  bottom: 30px;
  left: 30px;
  display: flex;
  gap: 10px;
  z-index: 1000;
}

.theme-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  background: var(--theme-card);
  color: var(--theme-text);
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  text-transform: capitalize;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--theme-shadow);
  }

  &.active {
    background: var(--theme-hover);
    box-shadow: var(--theme-shadow);
  }
}

.theme-icon {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .theme-switcher {
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
