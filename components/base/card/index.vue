<template>
  <div class="border-rounded base-card" :class="[bgClass, px, py]">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  bg: {
    type: String,
    default: "",
  },
  px: {
    type: String,
    default: "px-5",
  },
  py: {
    type: String,
    default: "py-5",
  },
});
</script>

<style scoped>
.base-card {
  border: 1px solid #9898981b;
  overflow: hidden;
}
</style>
