<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <InputTextPrimary :name="'name'" :type="'text'" />
    <ErrorMessage name="name" />
    <InputTextPrimary :name="'password'" :type="'password'" />
    <ErrorMessage name="password" />
    <Button :type="'submit'" :label="'Enviar'" />
  </Form>
</template>

<script setup lang="ts">
import { Form, ErrorMessage } from 'vee-validate';
import schema from '~/utils/validator/schema';

const onSubmit = (values: Record<string, unknown>) => {
  console.log(values);
};
</script>

<style></style>
