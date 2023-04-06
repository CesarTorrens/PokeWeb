<script setup lang="ts">
import { ref, toRefs } from 'vue';

const props = defineProps<{
  type: 'text' | 'password' | 'email';
  label: string;
}>();

const { type, label } = toRefs(props);
const modelValue = ref('');
const regexEmail = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;

const emits = defineEmits<{
  (event: 'inputChange', value: string): void;
}>();
</script>

<template>
  <q-input
    @keyup="emits('inputChange', modelValue)"
    :type="type"
    :label="label"
    label-color="negative"
    v-model="modelValue"
    :rules="
      type === 'email'
        ? [(val) => regexEmail.test(val) || 'Escriba un email correcto']
        : [(val) => (val && val.length > 3) || label]
    "
  />
</template>
