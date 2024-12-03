<script setup>
import { ref } from "vue";
import Header from "../components/Header.vue";

const navLinks = ref([
  { name: "首页", path: "/" },
  { name: "关于我", path: "/about" },
  { name: "作品集", path: "/portfolio" },
  { name: "博客", path: "/blog" },
]);

// 其他代码保持不变
</script>

<template>
  <div class="home">
    <Header :navLinks="navLinks" />
    <!-- 其他内容 -->
  </div>
</template>

<style lang="scss" scoped>
/* ... 样式保持不变 ... */
</style>
