<template>
  <NuxtLayout>
    <div
      :class="{
        'back-navigation': isBack,
      }"
    >
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<script setup>
import { useAppStore } from "./stores/index";
import { useNewsStore } from "./stores/index";

import { userController } from "./controllers/User";
import { newsController } from "./controllers/News";

const route = useRoute();
const isBack = ref(false);

watch(route, (to, from) => {
  const toDepth = to.path.split("/").length;
  const fromDepth = from.path.split("/").length;
  isBack.value = toDepth < fromDepth;
});

const appStore = useAppStore();
const newsStore = useNewsStore();

onMounted(() => {
  newsStore.configNewsMock();
  appStore.configUsersMock();
  userController.getUserProfile();
  newsController.getAllNews();
  const theme = localStorage.getItem("theme");
  if (!theme) localStorage.setItem("theme", "primary");
  else appStore.setTheme(theme);
});
</script>

<style>
.page-enter-active {
  transition: transform 0.3s ease;
}
.page-leave-active {
  transition: transform 0.3s ease;
}

.page-enter-from {
  transform: translateX(100%);
}
.page-leave-to {
  transform: translateX(-30%);
}

.back-navigation .page-enter-from {
  transform: translateX(-100%);
}
.back-navigation .page-leave-to {
  transform: translateX(100%);
}
</style>
