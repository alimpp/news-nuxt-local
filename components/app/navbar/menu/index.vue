<template>
  <div class="w-100 flex align-center px-20 custom-style">
    <span
      class="f-s-15 f-w-500 px-10 py-10 cursor-pointer"
      v-for="item in menuItems"
      :key="item.id"
      @mouseover="mouseHover($event, item)"
      @click="navigate(item)"
    >
      {{ item.title }}
    </span>
    <AppNavbarMenuHover :data="dataHover" v-if="activeHover" />
  </div>
</template>

<script setup>
import { navigateTo } from "nuxt/app";
import { useUserStore } from "../../../../stores";

const userStore = useUserStore();
const activeHover = ref(false);
const dataHover = ref(null);
const menuItems = ref([
  {
    id: 0,
    title: "Home",
    path: "/",
  },
  {
    id: 1,
    title: "News",
    child: [
      {
        id: 0,
        title: "Politics",
        path: "Politics ",
      },
      {
        id: 1,
        title: "Economy",
        path: "Economy ",
      },
      {
        id: 2,
        title: "Society",
        path: "Society ",
      },
      {
        id: 3,
        title: "Sports",
        path: "Sports",
      },
      {
        id: 4,
        title: "Technology",
        path: "Technology",
      },
      {
        id: 5,
        title: "International",
        path: "International",
      },
    ],
  },
]);

const mouseHover = (event, item) => {
  if (!item.path) {
    activeHover.value = true;
    const rect = event.target.getBoundingClientRect();
    const customSpace = userStore.getAuthenticated ? 200 : 120;
    dataHover.value = {
      x: rect.left - customSpace,
      y: 50,
      ...item,
    };
  } else {
    activeHover.value = false;
  }
};

const navigate = (data) => {
  if (data.path) {
    navigateTo(data.path);
  }
};
</script>

<style scoped>
@import url(../../../../assets/scss/theme_colors.scss);

.custom-style {
  position: relative;
}
</style>
