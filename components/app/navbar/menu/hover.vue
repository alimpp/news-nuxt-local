<template>
  <div
    :style="{
      top: `${adjustedTop}px`,
      left: `${data.x}px`,
    }"
    class="flex flex-column px-10 py-10 cursor-pointer fade-animation menu-hover color-dark"
    ref="hoverMenuRef"
  >
    <span
      style="width: auto"
      class="f-s-14 f-w-500 py-5 px-5"
      v-for="subItem in data.child"
      :key="subItem.id"
      @click="navigateTo(`/news/${subItem.path}`)"
    >
      {{ subItem.title }}
    </span>
  </div>
</template>

<script setup>
import { navigateTo } from "nuxt/app";

const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});

const hoverMenuRef = ref(null);
const adjustedTop = ref(0);

const calculatePosition = () => {
  if (!hoverMenuRef.value) return;

  const rect = hoverMenuRef.value.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  let topPos = props.data.y;
  let leftPos = props.data.x;

  if (topPos + rect.height > viewportHeight) {
    topPos = props.data.y - rect.height;
  }

  if (leftPos + rect.width > viewportWidth) {
    leftPos = props.data.x - (rect.width - props.data.width);
    leftPos = viewportWidth - rect.width - 20;
  }

  adjustedTop.value = topPos;
};

watch(
  () => props.data,
  () => {
    setTimeout(() => {
      if (hoverMenuRef.value) {
        calculatePosition();
      }
    }, 50);
  },
  { deep: true },
);

onMounted(() => {
  if (hoverMenuRef.value) {
    calculatePosition();
  }
});
</script>

<style scoped>
.menu-hover {
  min-width: 200px;
  max-width: 300px;
  width: auto;
  border-radius: 0px 20px 20px 20px;
  border: 1px solid #9898982e;
  position: absolute;
  z-index: 1000;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

span:hover {
  background: #98989819;
  border-radius: 5px;
}
</style>
