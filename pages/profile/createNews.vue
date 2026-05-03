<template>
  <div class="flex flex-column container">
    <BaseBreadCrumbs class="mt-10" :source="['PROFILE', 'CREATE-NEWS']" />
    <BaseTitleBar
      title="Create news"
      text="Create news for explore"
      :borderBottom="true"
      class="mt-10"
    />
    <selectCategory
      class="mt-10"
      :source="categoryList"
      @handleSelectCategory="handleSelectCategory"
    />
    <BaseForm :form="form" class="mt-10" v-model:access="access" />
    <div class="w-150-px mt-10">
      <BaseButton :disabled="disabled" @click="createNews" name="Create News" />
    </div>
    <BaseTitleBar
      v-for="item in source"
      :title="item.title"
      :text="item.text"
      :borderBottom="item.borderBottom"
      @click="navigateTo(item.path)"
    />
  </div>
</template>

<script setup>
import selectCategory from "../../features/profile/createNews/selectCategory.vue";

import { navigateTo } from "nuxt/app";
import { newsController } from "../../controllers/News";

definePageMeta({
  middleware: "auth",
});

const categoryList = ref([
  {
    id: 0,
    title: "Politics",
  },
  {
    id: 1,
    title: "Economy",
  },
  {
    id: 2,
    title: "Society",
  },
  {
    id: 3,
    title: "Sports",
  },
  {
    id: 4,
    title: "Technology",
  },
  {
    id: 5,
    title: "International",
  },
]);

const access = ref(true);
const form = ref([
  {
    type: "input",
    key: "title",
    label: "Title",
    placeholder: "Type news title",
    rules: "length",
    validate: true,
    model: "",
    minLength: 20,
    maxLength: 50,
    disabled: false,
  },
  {
    type: "textarea",
    key: "content",
    label: "Content",
    placeholder: "Type news content",
    rules: "length",
    validate: true,
    model: "",
    minLength: 30,
    maxLength: 2000,
    disabled: false,
  },
]);

const source = ref([
  {
    id: 0,
    title: "Profile information",
    text: "Update profile information",
    borderBottom: true,
    path: "/profile/information",
  },
  {
    id: 1,
    title: "My Shared news",
    text: "My shared all news",
    borderBottom: true,
    path: "/profile/myNews",
  },
  {
    id: 2,
    title: "Favorites news",
    text: "All favorites news",
    borderBottom: true,
    path: "/profile/favorites",
  },
  {
    id: 3,
    title: "Theme",
    text: "Set theme application",
    borderBottom: true,
    path: "/profile/theme",
  },
]);

const disabled = computed(() => {
  return !access.value || !form.value[0].model || !form.value[1].model
    ? true
    : false;
});

const tagetCategory = ref(categoryList.value[0].title);
const handleSelectCategory = (category) => {
  tagetCategory.value = category.title;
};

const createNews = () => {
  const data = {};
  for (let item of form.value) {
    data[item.key] = item.model;
  }
  newsController.createNews({ ...data, category: tagetCategory.value });
  navigateTo("/profile/myNews");
};
</script>
