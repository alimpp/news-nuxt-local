<template>
  <div class="flex flex-column">
    <Hero />
    <div class="flex flex-column container">
      <News />
    </div>
  </div>
</template>

<script setup>
import Hero from "../features/home/hero/index.vue";
import News from "../features/home/news/index.vue";
</script>
