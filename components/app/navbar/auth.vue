<script setup lang="ts">
import { navigateTo } from "nuxt/app";
</script>

<template>
  <div class="flex align-center justify-center">
    <BaseButton name="Login" @click="navigateTo('/auth/login')" />
  </div>
</template>
