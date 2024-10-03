<template>
  <button :type="props.type">{{ props.label }}</button>
</template>

<script lang="ts" setup>
const props = defineProps<{
  label: string;
  type: 'button' | 'reset' | 'submit';
}>();
</script>
<style scoped></style>
