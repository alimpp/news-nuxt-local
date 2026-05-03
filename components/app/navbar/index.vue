<template>
  <div class="w-100 h-60-px flex app-navbar">
    <AppNavbarLogo />
    <AppNavbarAvatar v-if="isAuth" />
    <AppNavbarAuth v-else />
    <AppNavbarMenu class="navbar-menu-responsive" />
    <AppNavbarMenuIcon class="menu-responsive" @openSideMenu="openSideMenu" />
    <AppNavbarMenuSidebar v-if="sideMenuState" @closeSideMenu="closeSideMenu" />
  </div>
</template>

<script setup>
import { useUserStore } from "../../../stores/index";

const userStore = useUserStore();

const isAuth = computed(() => {
  return userStore._state.isAuthenticated;
});

const sideMenuState = ref(false);
const openSideMenu = () => {
  sideMenuState.value = !sideMenuState.value;
};
const closeSideMenu = () => {
  sideMenuState.value = !sideMenuState.value;
};
</script>

<style scoped>
.app-navbar {
  border-bottom: 1px solid #9898982e;
}
.menu-responsive {
  display: none;
}

@media (max-width: 900px) {
  .navbar-menu-responsive {
    display: none;
  }
  .menu-responsive {
    display: flex;
  }
}
</style>
