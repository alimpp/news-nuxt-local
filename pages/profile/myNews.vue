<template>
  <div class="flex flex-column container">
    <BaseBreadCrumbs class="mt-10" :source="['PROFILE', 'MY-NEWS']" />
    <BaseTitleBar
      title="My Shared news"
      text="My shared all news"
      :borderBottom="true"
      class="mt-10"
    />
    <BaseEmptyState
      title="Empty List"
      text="Your news list is empty"
      v-if="news.length === 0"
    />
    <div class="flex flex-column" v-else>
      <NewsCard
        class="mt-10"
        v-for="item in news"
        :key="item.id"
        :source="item"
      />
    </div>
    <BaseTitleBar
      v-for="item in source"
      :title="item.title"
      :text="item.text"
      :borderBottom="item.borderBottom"
      @click="navigateTo(item.path)"
    />
  </div>
</template>

<script setup>
import { navigateTo } from "nuxt/app";
import { useNewsStore } from "../../stores";
import { useUserStore } from "../../stores";
import { newsController } from "../../controllers/News";

import NewsCard from "../../features/news/card/index.vue";

definePageMeta({
  middleware: "auth",
});

const newsStore = useNewsStore();
const userStore = useUserStore();

const news = computed(() => {
  const list = newsStore.getNews();
  return list.filter((item) => {
    return item.creator.id === userStore.getUser.id;
  });
});

const source = ref([
  {
    id: 0,
    title: "Profile information",
    text: "Update profile information",
    borderBottom: true,
    path: "/profile/information",
  },
  {
    id: 1,
    title: "Create news",
    text: "Create news for explore",
    borderBottom: true,
    path: "/profile/createNews",
  },
  {
    id: 4,
    title: "Theme",
    text: "Set theme application",
    borderBottom: true,
    path: "/profile/theme",
  },
]);

onMounted(() => {
  newsController.getAllNews();
});
</script>
