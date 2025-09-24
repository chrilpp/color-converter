<template>
  <div>
    <input type="number" v-model.number="r" placeholder="R (0-255)" @input="$emit('update:rgb', { r, g, b })" />
    <input type="number" v-model.number="g" placeholder="G (0-255)" @input="$emit('update:rgb', { r, g, b })" />
    <input type="number" v-model.number="b" placeholder="B (0-255)" @input="$emit('update:rgb', { r, g, b })" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const props = defineProps({
  modelValue: Object,
})
const r = ref(props.modelValue?.r || 0)
const g = ref(props.modelValue?.g || 0)
const b = ref(props.modelValue?.b || 0)
watch(
  () => props.modelValue,
  (v) => {
    r.value = v?.r || 0
    g.value = v?.g || 0
    b.value = v?.b || 0
  }
)
</script>
