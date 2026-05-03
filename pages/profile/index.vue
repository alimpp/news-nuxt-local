<template>
  <div class="flex flex-column container">
    <BaseBreadCrumbs class="mt-10" :source="['PROFILE']" />
    <div class="flex flex-column mt-15">
      <BaseTitleBar
        v-for="item in source"
        :title="item.title"
        :text="item.text"
        :borderBottom="item.borderBottom"
        @click="navigateTo(item.path)"
      />
    </div>
    <div class="w-150-px mt-15">
      <BaseButton name="Log out" bg="danger" @click="logout" />
    </div>
  </div>
</template>

<script setup>
import { userController } from "../../controllers/User";
import { navigateTo } from "nuxt/app";

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
  {
    id: 3,
    title: "Favorites news",
    text: "All favorites news",
    borderBottom: true,
    path: "/profile/favorites",
  },
  {
    id: 4,
    title: "Theme",
    text: "Set theme application",
    borderBottom: true,
    path: "/profile/theme",
  },
]);

const logout = () => {
  userController.logout();
};
</script>
