<template>
  <div class="container">
    <BaseBreadCrumbs :source="['NEWS', route.params.id]" />
    <BaseTitleBar
      class="mt-10"
      :borderBottom="true"
      :title="`Last News From ${route.params.id}`"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, adipisci nulla aliquam fuga commodi"
    />
    <div
      class="w-100 h-380-px flex flex-column align-center justify-center"
      v-if="dataSource.length === 0"
    >
      <BaseEmptyState
        title="data not found"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, adipisci nulla aliquam fuga commodi"
      />
    </div>
    <NewsCard
      class="mt-10"
      v-for="data in dataSource"
      :key="data.id"
      :source="data"
    />
    <BaseTitleBar
      class="mt-10"
      :borderBottom="true"
      title="Other News"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, adipisci nulla aliquam fuga commodi"
    />
    <NewsCard
      class="mt-10"
      v-for="otherData in otherDataSource"
      :key="otherData.id"
      :source="otherData"
    />
  </div>
</template>

<script setup>
import { useNewsStore } from "../../stores/index";

import { useRoute } from "vue-router";

import NewsCard from "../../features/news/card/index.vue";

const newsStore = useNewsStore();
const route = useRoute();

const dataSource = computed(() => {
  const category = route.params.id;
  return newsStore.getNews().filter((item) => {
    return item.category === category;
  });
});

const otherDataSource = computed(() => {
  return newsStore.getNews().filter((item) => {
    return item.category !== route.params.id;
  });
});
</script>
