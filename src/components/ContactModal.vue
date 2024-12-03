<script setup>
import { Modal } from "ant-design-vue";
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(["update:isOpen"]);

const handleClose = () => {
  emit("update:isOpen", false);
};

const QRCode =
  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=YourWeChatID";
</script>

<template>
  <a-modal
    :open="isOpen"
    title="联系方式"
    @cancel="handleClose"
    :footer="null"
    width="500px"
    class="contact-modal"
  >
    <div class="contact-info">
      <div class="contact-item">
        <div class="icon">📱</div>
        <h3>手机</h3>
        <p>+86 138 xxxx xxxx</p>
      </div>

      <div class="contact-item">
        <div class="icon">📧</div>
        <h3>邮箱</h3>
        <p>example@email.com</p>
      </div>

      <div class="contact-item">
        <div class="icon">💬</div>
        <h3>微信</h3>
        <img :src="QRCode" alt="微信二维码" class="qr-code" />
      </div>
    </div>
  </a-modal>
</template>

<style scoped>
.contact-info {
  display: grid;
  gap: 2rem;
}

.contact-item {
  text-align: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background: var(--theme-card-bg);
  transition: transform 0.3s ease;
  border: 1px solid var(--theme-primary);
}

.contact-item:hover {
  transform: translateY(-5px);
  border-color: var(--theme-accent);
}

.icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: var(--theme-primary);
}

h3 {
  margin-bottom: 0.5rem;
  color: var(--theme-secondary);
}

p {
  color: var(--theme-text);
  opacity: 0.8;
}

.qr-code {
  width: 150px;
  height: 150px;
  margin: 1rem auto 0;
  border-radius: 0.5rem;
}

:deep(.ant-modal-content) {
  background-color: var(--theme-card-bg) !important;
  color: var(--theme-text) !important;
}

:deep(.ant-modal-header) {
  background-color: var(--theme-card-bg) !important;
  border-bottom: 1px solid var(--theme-border) !important;
}

:deep(.ant-modal-title) {
  color: var(--theme-text) !important;
}

:deep(.ant-modal-close-x) {
  color: var(--theme-text) !important;
}

:deep(.ant-modal-body) {
  background-color: var(--theme-card-bg) !important;
}

@media (max-width: 768px) {
  .contact-info {
    gap: 1rem;
  }

  .qr-code {
    width: 120px;
    height: 120px;
  }
}
</style>
