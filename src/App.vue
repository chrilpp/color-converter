<template>
  <div class="app">
    <div class="center-box">
      <h1>Color Converter</h1>
      <div class="converter">
        <ModeSelector v-model="mode" />

        <div v-if="mode === 'hexToRgb'" class="inputs">
          <HexInput :modelValue="hex" @update:hex="hex = $event" />
        </div>

        <div v-else-if="mode === 'rgbToHex'" class="inputs">
          <RgbInput :modelValue="{ r, g, b }" @update:rgb="({ r: rv, g: gv, b: bv }) => { r = rv; g = gv; b = bv }" />
        </div>

        <div v-else class="inputs">
          <PercentRgbInput :modelValue="{ pr, pg, pb }" @update:prgb="({ pr: prv, pg: pgv, pb: pbv }) => { pr = prv; pg = pgv; pb = pbv }" />
        </div>

        <ResultPreview :result="result" :mode="mode" />

        <div class="color-preview" :style="{ backgroundColor: previewColor }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import ModeSelector from './components/ModeSelector.vue';
import HexInput from './components/HexInput.vue';
import RgbInput from './components/RgbInput.vue';
import PercentRgbInput from './components/PercentRgbInput.vue';
import ResultPreview from './components/ResultPreview.vue';

const mode = ref("hexToRgb");

const hex = ref("#ff0000");
const r = ref(255);
const g = ref(0);
const b = ref(0);
const pr = ref(100);
const pg = ref(0);
const pb = ref(0);

function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

const result = computed(() => {
  if (mode.value === "hexToRgb") {
    const h = hex.value.replace("#", "");
    if (!/^[0-9a-fA-F]{6}$/.test(h)) return null;
    const rVal = parseInt(h.slice(0, 2), 16);
    const gVal = parseInt(h.slice(2, 4), 16);
    const bVal = parseInt(h.slice(4, 6), 16);
    return {
      rgb: `${rVal}, ${gVal}, ${bVal}`,
      prgb: `${((rVal / 255) * 100).toFixed(1)}%, ${((gVal / 255) * 100).toFixed(1)}%, ${((bVal / 255) * 100).toFixed(1)}%`,
    };
  } else if (mode.value === "rgbToHex") {
    const rVal = clamp(r.value, 0, 255);
    const gVal = clamp(g.value, 0, 255);
    const bVal = clamp(b.value, 0, 255);
    const hexVal =
      "#" +
      [rVal, gVal, bVal]
        .map((x) => x.toString(16).padStart(2, "0"))
        .join("");
    return {
      hex: hexVal,
      prgb: `${((rVal / 255) * 100).toFixed(1)}%, ${((gVal / 255) * 100).toFixed(1)}%, ${((bVal / 255) * 100).toFixed(1)}%`,
    };
  } else if (mode.value === "prgbToHexRgb") {
    const rVal = clamp(Math.round((pr.value / 100) * 255), 0, 255);
    const gVal = clamp(Math.round((pg.value / 100) * 255), 0, 255);
    const bVal = clamp(Math.round((pb.value / 100) * 255), 0, 255);
    const hexVal =
      "#" +
      [rVal, gVal, bVal]
        .map((x) => x.toString(16).padStart(2, "0"))
        .join("");
    return {
      hex: hexVal,
      rgb: `${rVal}, ${gVal}, ${bVal}`,
    };
  }
  return null;
});

const previewColor = computed(() => {
  if (!result.value) return "transparent";
  if (mode.value === "hexToRgb") {
    return hex.value;
  } else if (mode.value === "rgbToHex") {
    return result.value.hex;
  } else {
    return result.value.hex;
  }
});
</script>

<style>
body {
  margin: 0;
  background: #1e1e1e;
  color: #eee;
  font-family: "Segoe UI", Roboto, sans-serif;
}

.app {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.center-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.converter {
  background: #2a2a2a;
  padding: 2vw;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.4);
  width: 60vw;
  max-width: 800px;
  min-width: 320px;
  transition: all 0.3s ease;
  text-align: center;
}

h1 {
  margin: 0 0 1.5rem;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
}

label {
  display: block;
  margin-bottom: 1rem;
}

.inputs input {
  display: block;
  width: 100%;
  margin: 0.5rem 0;
  padding: 0.5rem;
  background: #1e1e1e;
  border: 1px solid #444;
  border-radius: 0.5rem;
  color: #eee;
}

.results {
  margin-top: 1rem;
}

.color-preview {
  margin-top: 1rem;
  height: 100px;
  border-radius: 0.5rem;
  border: 1px solid #444;
}
</style>
