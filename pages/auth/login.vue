<template>
  <div class="w-370-px flex flex-column">
    <BaseTitleBar
      title="Login With Newspaper"
      text="Please enter email and password for login"
    />
    <BaseForm :form="form" class="mt-10" v-model:access="access" />
    <BaseButton
      name="Login"
      class="mt-10"
      :disabled="disabled"
      @click="login"
    />
    <BaseButton
      @click="navigateTo('/auth/register')"
      name="Create Account"
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

const disabled = computed(() => {
  return !access.value || !form.value[0].model || !form.value[1].model
    ? true
    : false;
});

const login = () => {
  const data = {};
  for (let item of form.value) {
    data[item.key] = item.model;
  }
  userController.login(data);
};
</script>
