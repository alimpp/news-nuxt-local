<template>
  <div
    class="main-layout flex flex-column overFlow-hidden"
    :class="{
      'primary-theme': appStore.getTheme === 'primary',
      'dark-theme': appStore.getTheme === 'dark',
      'light-theme': appStore.getTheme === 'light',
    }"
  >
    <AppNavbar />
    <NuxtPage />
  </div>
</template>

<script setup>
import { useAppStore } from "../stores";

const appStore = useAppStore();
</script>

<style scoped>
.main-layout {
  min-height: 100dvh;
}
</style>
