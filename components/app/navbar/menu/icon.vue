<template>
  <div class="flex align-center justify-end w-100 px-10">
    <IconMenu @click="emit('openSideMenu')" />
  </div>
</template>

<script setup>
const emit = defineEmits(["openSideMenu"]);
</script>
