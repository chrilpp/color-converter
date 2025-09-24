<template>
  <div>
    <input type="number" v-model.number="pr" placeholder="%R (0-100)" @input="$emit('update:prgb', { pr, pg, pb })" />
    <input type="number" v-model.number="pg" placeholder="%G (0-100)" @input="$emit('update:prgb', { pr, pg, pb })" />
    <input type="number" v-model.number="pb" placeholder="%B (0-100)" @input="$emit('update:prgb', { pr, pg, pb })" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const props = defineProps({
  modelValue: Object
})
const pr = ref(props.modelValue?.pr || 0)
const pg = ref(props.modelValue?.pg || 0)
const pb = ref(props.modelValue?.pb || 0)
watch(() => props.modelValue, v => {
  pr.value = v?.pr || 0
  pg.value = v?.pg || 0
  pb.value = v?.pb || 0
})
</script>
