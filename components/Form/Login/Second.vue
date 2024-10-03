<template>
  <Form @submit="onSubmit" :validationSchema="schema">
    <InputTextSecond :name="'name'" :type="'text'" />
    <InputTextSecond :name="'password'" :type="'password'" />
    <Button :type="'submit'" :label="'Enviar'" />
  </Form>
</template>

<script setup lang="ts">
import { Form } from 'vee-validate';
import schema from '~/utils/validator/schema';

const onSubmit = (values: Record<string, unknown>) => {
  console.log(values);
};
</script>

<style></style>
