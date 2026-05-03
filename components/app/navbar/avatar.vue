<template>
  <div
    class="flex align-center cursor-pointer px-10"
    @click="navigateTo('/profile')"
  >
    <BaseAvatar :character="profile.fristChar" :bg="profile.avatarColor" />
    <div class="flex flex-column px-5">
      <span class="f-s-13 f-w-500">{{ profile.fullname }}</span>
      <span class="f-s-11 f-w-400 color-gray">{{ profile.email }}</span>
    </div>
  </div>
</template>

<script setup>
import { navigateTo } from "nuxt/app";
import { useUserStore } from "../../../stores/index";

const userStore = useUserStore();

const profile = computed(() => {
  return userStore._state.user;
});
</script>
