<script setup>
import Home from './components/Home.vue';
</script>

<template>
  <Home msg="Vite + Vue" />
</template>

<style>
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  color: white;
  width: 100vw;
  overflow-x: hidden;
}

#app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

/* 添加背景图层 */
#app::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(
      to bottom,
      rgba(10, 10, 15, 0.95),
      rgba(10, 10, 15, 0.85)
    ),
    url('/src/assets/bg.jpg'); /* 替换为你的背景图路径 */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
  /* 添加视差效果 */
  transform: scale(1.1);
  animation: slowZoom 20s infinite alternate ease-in-out;
}

/* 添加缓慢缩放动画 */
@keyframes slowZoom {
  from {
    transform: scale(1.1);
  }
  to {
    transform: scale(1.2);
  }
}

/* 添加页面过渡效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
