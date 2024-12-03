<script setup>
import { ref } from "vue";
import ContactModal from "./ContactModal.vue";

const isContactModalOpen = ref(false);

const openContactModal = () => {
  isContactModalOpen.value = true;
};
</script>

<template>
  <div class="floating-contact">
    <button class="contact-button" @click="openContactModal" title="联系我">
      <div class="button-content">
        <span class="icon">💬</span>
        <span class="text">联系我</span>
      </div>
    </button>

    <ContactModal
      :is-open="isContactModalOpen"
      @update:isOpen="isContactModalOpen = $event"
    />
  </div>
</template>

<style scoped>
.floating-contact {
  position: fixed;
  right: 30px;
  bottom: 100px;
  z-index: 1000;
}

.contact-button {
  background: var(--theme-primary);
  border: none;
  border-radius: 50px;
  padding: 15px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 188, 212, 0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.button-content {
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  z-index: 1;
}

.icon {
  font-size: 1.5rem;
}

.text {
  font-size: 0.9rem;
  font-weight: 500;
  color: white;
  opacity: 0;
  width: 0;
  transition: all 0.3s ease;
}

/* 悬浮效果 */
.contact-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 188, 212, 0.4);
  padding-right: 25px;
}

.contact-button:hover .text {
  opacity: 1;
  width: 4em;
}

/* 点击效果 */
.contact-button:active {
  transform: translateY(-2px);
}

/* 发光动画 */
.contact-button::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.3) 0%,
    transparent 60%
  );
  animation: rotate 4s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .floating-contact {
    right: 20px;
    bottom: 80px;
  }

  .contact-button {
    padding: 12px;
  }

  .icon {
    font-size: 1.2rem;
  }
}

/* 暗色主题适配 */
[data-theme="dark"] .contact-button {
  background: var(--theme-primary);
}
</style>
