<template>
  <div class="flex flex-column container">
    <BaseBreadCrumbs class="mt-10" :source="['PROFILE', 'THEME']" />
    <BaseTitleBar
      title="Theme"
      text="Set theme application"
      :borderBottom="true"
      class="mt-10"
    />
    <setTheme class="mt-20" />
    <BaseTitleBar
      class="mt-10"
      v-for="item in source"
      :title="item.title"
      :text="item.text"
      :borderBottom="item.borderBottom"
      @click="navigateTo(item.path)"
    />
  </div>
</template>

<script setup>
import setTheme from "../../features/profile/theme/setTheme.vue";

definePageMeta({
  middleware: "auth",
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
    id: 2,
    title: "My Shared news",
    text: "My shared all news",
    borderBottom: true,
    path: "/profile/myNews",
  },
]);
</script>
