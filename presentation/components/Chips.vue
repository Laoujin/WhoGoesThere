<script setup>
defineProps({ items: { type: Array, default: () => [] } })
</script>

<template>
  <div class="chips"><span v-for="c in items" :key="c" class="chip">{{ c }}</span></div>
</template>
