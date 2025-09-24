<template>
  <div v-if="result">
    <p v-if="mode === 'hexToRgb'">
      RGB: {{ result.rgb }}<br />
      %RGB: {{ result.prgb }}
    </p>
    <p v-else-if="mode === 'rgbToHex'">
      Hex: {{ result.hex }}<br />
      %RGB: {{ result.prgb }}
    </p>
    <p v-else>
      Hex: {{ result.hex }}<br />
      RGB: {{ result.rgb }}
    </p>
  </div>
</template>

<script setup>
import { watch } from 'vue'
const props = defineProps({
  result: Object,
  mode: String,
})
watch(
  () => props.result,
  (val) => {
    console.log('result changed:', val)
  }
)
console.log('result', props.result)
</script>
