<template>
  <input v-model="hex" placeholder="#RRGGBB" @input="$emit('update:hex', hex)" />
</template>

<script setup>
import { ref, watch } from 'vue'
const props = defineProps({
  modelValue: String
})
const hex = ref(props.modelValue || '')
watch(() => props.modelValue, v => hex.value = v)
</script>
