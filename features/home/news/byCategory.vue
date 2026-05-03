<template>
  <div
    class="content w-100 mt-10 mb-10"
    :dir="source.dir"
    :class="{ 'flex-column': screenSize < '900' }"
  >
    <div class="children px-10 border-rounded" dir="ltr">
      <BaseTitleBar :title="source.title" :text="source.text" />
    </div>
    <div class="children flex-column px-10" dir="ltr">
      <NewsCard
        class="mb-10"
        v-for="news in source.news"
        :key="news.id"
        :source="news"
      />
    </div>
  </div>
</template>

<script setup>
import { useScreenSize } from "../../../composables/useScreenSize";
import NewsCard from "../../news/card/index.vue";

const screen = useScreenSize();

const props = defineProps({
  source: { type: Object, default: {} },
});

const screenSize = computed(() => {
  return screen.width;
});
</script>

<style scoped>
.custom-bg {
  background: #99999915;
}

.content {
  display: flex;
}
.children {
  width: 50%;
}

@media (max-width: 900px) {
  .content {
    flex-direction: column;
    align-items: center;
  }
  .children {
    width: 100%;
  }
}
</style>
