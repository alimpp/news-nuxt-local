<template>
  <div class="flex">
    <span class="f-s-14 f-w-500 color-primary">APP</span>
    <span class="f-s-14 f-w-500 px-4 color-primary">/</span>
    <span class="f-s-14 f-w-500" v-for="(item, index) in source" :key="index">
      {{ item }} <span v-if="index + 1 < source.length"> / </span></span
    >
  </div>
</template>

<script setup>
const props = defineProps({
  source: { type: Array, default: [] },
});
</script>
