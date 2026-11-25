<script setup>
defineProps({ name: { type: String, required: true }, w: { type: Number, required: true }, h: { type: Number, required: true }, par: { type: String, default: 'xMidYMid meet' } })
</script>

<template>
  <svg class="art" :viewBox="`0 0 ${w} ${h}`" :preserveAspectRatio="par" aria-hidden="true"><use :href="`#art-${name}`" :width="w" :height="h" /></svg>
</template>
