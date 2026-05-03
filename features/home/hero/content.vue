<script setup lang="ts">
import { navigateTo } from "nuxt/app";
</script>

<template>
  <div class="flex flex-column container">
    <span class="f-s-18 f-w-500 slid-up-animation-8"
      >Newspaper is ready for you</span
    >
    <span class="f-s-14 f-w-400 pt-10 slid-up-animation-8">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, adipisci
      nulla aliquam fuga commodi earum sit, ipsum, aliquid facilis debitis at
      necessitatibus. Accusamus expedita pariatur deserunt est laborum excepturi
      dolorem?
    </span>
    <div class="flex mt-10 fade-animation">
      <BaseButton name="Get Started" />
      <BaseButton
        name="Create News"
        bg="info"
        class="mx-10"
        @click="navigateTo('/profile/createNews')"
      />
    </div>
  </div>
</template>
