<script setup>
import { ref, computed } from 'vue'

const hex = ref('#ff8800')

function normalize(h) {
  let s = h.trim().toLowerCase()
  if (s.startsWith('#')) s = s.slice(1)
  if (s.length === 3) s = s.split('').map(c => c + c).join('')
  if (!/^[0-9a-f]{6}$/.test(s)) return null
  return s
}

const rgb = computed(() => {
  const n = normalize(hex.value)
  if (!n) return null
  const r = parseInt(n.slice(0,2),16)
  const g = parseInt(n.slice(2,4),16)
  const b = parseInt(n.slice(4,6),16)
  return { r, g, b }
})

const percent = computed(() => {
  if (!rgb.value) return null
  const f = v => +(v/255*100).toFixed(2)
  return { r: f(rgb.value.r), g: f(rgb.value.g), b: f(rgb.value.b) }
})
</script>

<template>
  <main>
    <h1>Color Converter</h1>
    <label>HEX
      <input v-model="hex" placeholder="#ff8800" />
    </label>
    <div v-if="rgb">
      <p>RGB: {{ rgb.r }}, {{ rgb.g }}, {{ rgb.b }}</p>
      <p>RGB %: {{ percent.r }}%, {{ percent.g }}%, {{ percent.b }}%</p>
      <div class="swatch" :style="{ backgroundColor: `rgb(${rgb.r},${rgb.g},${rgb.b})` }"></div>
    </div>
    <div v-else>
      <p>Enter a valid hex color.</p>
    </div>
  </main>
</template>

<style>
main { font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; max-width: 420px; margin: 40px auto; padding: 16px }
input { width: 100%; padding: 8px; font-size: 16px }
.swatch { width: 100%; height: 80px; border: 1px solid #ccc; margin-top: 12px }
</style>
