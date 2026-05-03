<template>
  <div class="hero-section">
    <div class="glass-style flex align-center">
      <Content />
    </div>
  </div>
</template>

<script setup>
import Content from "../hero/content.vue";
</script>

<style scoped>
.hero-section {
  width: 100%;
  height: 93dvh;
  background-image: url(/public/images/hero.jpg);
}
.glass-style {
  background: #00000094;
  width: 100%;
  height: 93dvh;
  color: #fff;
}
</style>
