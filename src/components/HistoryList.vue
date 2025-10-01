<template>
  <ul>
    <li v-for="conversion in conversions" :key="conversion">
      {{ conversion }}
    </li>
  </ul>
</template>

<script setup>
import { watch } from 'vue'

const props = defineProps({
  conversions: {
    type: Array,
    default: () => [],
  },
})

watch(
  () => props.conversions,
  val => {
    console.log('conversions changed:', val)
  }
)

console.log('HistoryList component loaded')
</script>
