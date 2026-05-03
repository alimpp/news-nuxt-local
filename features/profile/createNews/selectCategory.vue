<template>
  <div class="flex flex-wrap">
    <span
      class="px-10 py-10 cursor-pointer border-rounded f-s-14 f-w-500"
      v-for="item in source"
      :key="item.id"
      :class="{ 'bg-danger': selectedItem.id === item.id }"
      @click="selectCategory(item)"
    >
      {{ item.title }}
    </span>
  </div>
</template>

<script setup>
const emit = defineEmits(["handleSelectCategory"]);
const props = defineProps({
  source: { type: Array, default: [] },
});

const selectedItem = ref(props.source[0]);

const selectCategory = (item) => {
  emit("handleSelectCategory", item);
  selectedItem.value = item;
};
</script>
