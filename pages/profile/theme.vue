<template>
  <div class="flex flex-column container">
    <BaseBreadCrumbs class="mt-10" :source="['PROFILE', 'THEME']" />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
</script>
