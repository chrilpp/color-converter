<template>
	<label>
		Mode:
		<select :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
			<option value="hexToRgb">Hex → RGB & %RGB</option>
			<option value="rgbToHex">RGB → Hex & %RGB</option>
			<option value="prgbToHexRgb">%RGB → Hex & RGB</option>
		</select>
	</label>
</template>

<script setup>
defineProps({
	modelValue: String
})
</script>
