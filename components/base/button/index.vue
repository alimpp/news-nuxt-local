<template>
  <button
    class="base-button"
    :style="{ border: border, padding: padding }"
    :class="[`bg-${bg}`, color, { 'disabled-style': disabled }]"
    :disabled="disabled || loading"
  >
    <div class="flex align-center">
      <slot name="iconRight"></slot>
      <span
        class="loading-style"
        v-if="loading"
        :class="[fontSize, fontWight, color]"
      >
        Loading...</span
      >
      <span v-else :class="[fontSize, fontWight, color]"> {{ name }}</span>
      <slot name="iconLeft"></slot>
    </div>
  </button>
</template>

<script setup>
const props = defineProps({
  bg: {
    type: String,
    default: "primary",
  },
  color: {
    type: String,
    default: "",
  },
  fontSize: {
    type: String,
    default: "f-s-13",
  },
  fontWight: {
    type: String,
    default: "f-w-400",
  },
  name: {
    type: String,
    default: "",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  border: {
    type: String,
    default: "",
  },
  padding: {
    type: String,
    default: "10px 10px",
  },
});
</script>

<style scoped>
.base-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
  border: none;
}
.disabled-style {
  cursor: not-allowed;
}
.loading-style {
  animation: 1s loading infinite;
}
@keyframes loading {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
