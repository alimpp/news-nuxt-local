<template>
  <div class="w-370-px flex flex-column">
    <BaseTitleBar
      title="Create Account With Newspaper"
      text="Please enter information for register"
    />
    <BaseForm :form="form" class="mt-10" v-model:access="access" />
    <BaseButton
      name="Create Account"
      class="mt-10"
      :disabled="disabled"
      @click="createAccount"
    />
    <BaseButton
      @click="navigateTo('/auth/login')"
      name="Back to login"
      bg="danger"
      class="mt-10"
    />
  </div>
</template>

<script setup>
import { userController } from "../../controllers/User";
import { navigateTo } from "nuxt/app";

definePageMeta({
  layout: "auth",
});

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
  },
  {
    type: "input",
    key: "email",
    label: "Email",
    rules: "email",
    validate: true,
    model: "",
  },
  {
    type: "input",
    key: "password",
    label: "Password",
    rules: "length",
    validate: true,
    model: "",
    minLength: 8,
    maxLength: 16,
  },
]);

const createAccount = () => {
  const data = {};
  for (let item of form.value) {
    data[item.key] = item.model;
  }

  userController.createAccount({ ...data, avatarColor: "#5a58f7" });
};

const disabled = computed(() => {
  return !access.value ||
    !form.value[0].model ||
    !form.value[1].model ||
    !form.value[2].model ||
    !form.value[3].model
    ? true
    : false;
});
</script>
