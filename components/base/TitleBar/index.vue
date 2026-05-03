<template>
  <div
    class="flex cursor-pointer py-10"
    :class="{ 'border-bottom': borderBottom }"
  >
    <slot name="icon"></slot>
    <div class="flex flex-column">
      <span class="f-s-14 f-w-500">{{ title }}</span>
      <span class="f-s-11 f-w-400 color-gray">{{ text }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: "" },
  text: { type: String, default: "" },
  borderBottom: { type: Boolean, default: false },
});
</script>

<style scoped>
.border-bottom {
  border-bottom: 1px solid #9898982e;
}
</style>
