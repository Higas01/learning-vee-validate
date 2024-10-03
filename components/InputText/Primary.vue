<template>
  <label :for="name">Escreva seu {{ name }}</label>
  <Field :type="type" :name="name" @blur="handleBlur" :class="classInput" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Field } from 'vee-validate';
const props = defineProps<{
  name: string;
  type: 'text' | 'password';
}>();

const classInput = ref('');
const { validate } = useField(props.name);

async function handleBlur(): Promise<void> {
  const { valid } = await validate();
  if (!valid) {
    classInput.value = 'error';
    return;
  }
  classInput.value = '';
}
</script>

<style scoped>
input {
  display: block;
  padding: 2px 10px;
  margin: 10px;
}

.error {
  border: 1px solid red;
}
</style>
