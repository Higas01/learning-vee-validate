<template>
  <label :for="name">Escreva seu {{ name }}</label>
  <input
    :type="type"
    :name="name"
    :class="{ error: !meta.valid && meta.validated }"
    v-model="value"
  />
  <span v-if="!meta.valid && meta.validated">{{ errorMessage }}</span>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate';

const props = defineProps<{
  name: string;
  type: 'text' | 'password';
}>();

const { value, errorMessage, meta } = useField(props.name);
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

.error-message {
  color: red;
  font-size: 0.875rem;
  margin-top: -10px;
}
</style>
