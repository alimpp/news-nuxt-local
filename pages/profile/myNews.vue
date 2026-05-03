<template>
  <div class="flex flex-column container">
    <BaseBreadCrumbs class="mt-10" :source="['PROFILE', 'MY-NEWS']" />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
</script>
