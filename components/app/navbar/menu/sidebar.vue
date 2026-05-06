<template>
  <div class="w-100 h-100-dvh flex justify-start custom-style" @click.stop="emit('closeSideMenu')">
    <div
      class="w-350-px h-100-dvh bg-white slid-right-animation-8 flex flex-column py-20"
    >
      <div class="w-100 flex align-center px-5">
        <AppNavbarLogo />
      </div>

      <AppNavbarAvatar class="mt-20" v-if="userStore.getAuthenticated" />

      <div class="flex flex-column px-15 mt-20">
        <div
          class="py-10 f-s-16 f-w-500"
          v-for="item in menuItems"
          :key="item.id"
          @click="navigate(item)"
        >
          <span>{{ item.title }}</span>
          <div class="flex flex-column px-15 mt-10" v-for="value in item.child" :key="value.id" @click="navigate(value)">- {{
            value.title
          }}</div class="flex flex-column">
          <BaseDivider class="mt-10" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { navigateTo } from 'nuxt/app';
import { useUserStore } from '../../../../stores/index'

const emit = defineEmits(['closeSideMenu'])
const userStore = useUserStore()

const menuItems = ref([
  {
    id: 0,
    title: "Home",
    path: "/",
    child: [],
  },
  {
    id: 1,
    title: "News",
    child: [
      {
        id: 0,
        title: "Politics",
        path: "/news/politics ",
      },
      {
        id: 1,
        title: "Economy",
        path: "/news/economy ",
      },
      {
        id: 2,
        title: "Society",
        path: "/news/society ",
      },
      {
        id: 3,
        title: "Sports",
        path: "/news/sports",
      },
      {
        id: 4,
        title: "Technology",
        path: "/news/technology",
      },
      {
        id: 5,
        title: "International",
        path: "/news/international",
      },
    ],
  },
]);

const navigate = (item) => {
   if(item.path) {
    navigateTo(item.path)
    emit('closeSideMenu')
   }
}
</script>

<style scoped>
.custom-style {
  position: fixed;
  z-index: 100;
  background: #000000ab;
}
</style>
