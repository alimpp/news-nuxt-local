<template>
  <div class="flex flex-wrap">
    <div
      class="flex flex-column mx-5 px-5 py-5 border-rounded"
      v-for="item in colors"
      :key="item.id"
      :class="{ 'active-border': appStore.getTheme == item.name }"
      @click="setColor(item.name)"
    >
      <div
        :style="{ background: item.color }"
        class="cursor-pointer w-60-px h-60-px border-rounded color-white f-s-12 f-w-400 flex align-center justify-center"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "../../../stores/index";

const appStore = useAppStore();

const colors = ref([
  { id: 0, color: "#5a58f7", name: "primary" },
  { id: 1, color: "#04213e", name: "dark" },
  { id: 2, color: "#640505", name: "light" },
]);

const setColor = (theme) => {
  appStore.setTheme(theme);
};
</script>

<style scoped>
.active-border {
  border: 1px solid #9898987d;
  border-style: dashed;
}
</style>
