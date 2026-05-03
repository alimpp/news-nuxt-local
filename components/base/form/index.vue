<template>
  <div class="flex flex-column w-100">
    <BaseFormInput
      v-for="field in form"
      :label="field.label"
      :placeholder="field.placeholder"
      v-model="field.model"
      :validate="field.validate"
      :rules="field.rules"
      :min-length="field.minLength"
      :max-length="field.maxLength"
      :disabled="field.disabled"
      v-show="field?.type === 'input'"
      v-model:access="access"
    />
    <BaseFormTextarea
      v-for="field in form"
      :label="field.label"
      :placeholder="field.placeholder"
      v-model="field.model"
      :validate="field.validate"
      :rules="field.rules"
      :min-length="field.minLength"
      :max-length="field.maxLength"
      :disabled="field.disabled"
      v-show="field?.type === 'textarea'"
      v-model:access="access"
    />
  </div>
</template>

<script setup>
const access = defineModel("access");

const props = defineProps({
  form: { type: Array, default: [] },
});
</script>
