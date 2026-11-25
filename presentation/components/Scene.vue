<script setup>
import { computed, onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { useSlideContext } from '@slidev/client'
import { Player, scenes, highlight } from '../scenes/engine.js'
import '../scenes/scenes.js'

const props = defineProps({ scene: { type: String, required: true } })
const { $clicks } = useSlideContext()
const sc = scenes[props.scene]
const svg = ref(null)
let player = null

const st = computed(() => Math.max(0, Math.min($clicks.value, sc.steps.length - 1)))
const step = computed(() => sc.steps[st.value])
const lines = computed(() => {
  const s = step.value
  if (!sc.code) return []
  const hl = s.hl || []
  return highlight(s.code || sc.code, sc.lang || 'cs').map((html, i) => ({ html, cls: hl.includes(i + 1) ? 'on' : hl.length ? 'dim' : '' }))
})

onMounted(() => {
  player = new Player(sc, svg.value)
  player.goto(st.value, false)
})
onBeforeUnmount(() => { if (player) cancelAnimationFrame(player.raf) })
watch(st, (v, o) => player?.goto(v, Math.abs(v - o) === 1))
</script>

<template>
  <div class="viz-body">
    <div class="stage-wrap"><svg ref="svg" class="stage" /></div>
    <aside>
      <div class="stepbar"><i v-for="(_, i) in sc.steps" :key="i" :class="{ done: i < st, cur: i === st }" /></div>
      <div class="caption" v-html="step.t || ''" />
      <template v-if="sc.code">
        <div class="code-h">{{ sc.codeTitle || '' }}</div>
        <pre class="code"><div v-for="(l, i) in lines" :key="i" class="ln" :class="l.cls" v-html="l.html" /></pre>
      </template>
      <div v-if="sc.legend" class="legend"><span v-for="[c, t] in sc.legend" :key="t"><i class="sw" :class="c" />{{ t }}</span></div>
    </aside>
  </div>
</template>
