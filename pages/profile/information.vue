<template>
  <div class="flex flex-column container">
    <BaseBreadCrumbs class="mt-10" :source="['PROFILE', 'INFORMATION']" />
    <BaseTitleBar
      title="Profile information"
      text="Update profile information"
      :borderBottom="true"
      class="mt-10"
    />
    <setAvatarColor class="mt-10" />
    <BaseForm :form="form" class="mt-10" v-model:access="access" />
    <div class="w-150-px mt-10">
      <BaseButton @click="updateInfo" name="Update Information" />
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
import setAvatarColor from "../../features/profile/information/setAvatarColor.vue";

import { userController } from "../../controllers/User";
import { useUserStore } from "../../stores";

definePageMeta({
  middleware: "auth",
});

const userStore = useUserStore();

const access = ref(true);
const form = ref([
  {
    type: "input",
    key: "firstname",
    label: "Firstname",
    rules: "length",
    validate: true,
    model: "",
    minLength: 3,
    maxLength: 16,
    disabled: false,
  },
  {
    type: "input",
    key: "lastname",
    label: "Lastname",
    rules: "length",
    validate: true,
    model: "",
    minLength: 3,
    maxLength: 16,
    disabled: false,
  },
  {
    type: "input",
    key: "email",
    label: "Email",
    rules: "email",
    validate: true,
    model: "",
    disabled: true,
  },
]);

const source = ref([
  {
    id: 1,
    title: "Create news",
    text: "Create news for explore",
    borderBottom: true,
    path: "/profile/createNews",
  },
  {
    id: 2,
    title: "My Shared news",
    text: "My shared all news",
    borderBottom: true,
    path: "/profile/myNews",
  },
  {
    id: 4,
    title: "Theme",
    text: "Set theme application",
    borderBottom: true,
    path: "/profile/theme",
  },
]);

const updateInfo = () => {
  const data = {};
  for (let item of form.value) {
    data[item.key] = item.model;
  }
  userController.updateProfile(data);
};

onMounted(() => {
  form.value[0].model = userStore._state.user.firstname;
  form.value[1].model = userStore._state.user.lastname;
  form.value[2].model = userStore._state.user.email;
});
</script>
