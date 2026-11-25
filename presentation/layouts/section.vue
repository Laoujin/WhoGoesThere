<template>
  <div class="slidev-layout slide t-section">
    <div class="section-wrap">
      <div class="num">{{ $frontmatter.n }}</div>
      <h1 v-html="$frontmatter.heading" />
      <div class="subtitle" v-html="$frontmatter.subtitle || ''" />
    </div>
    <div v-if="$frontmatter.art" class="section-art">
      <Art v-for="([n, w, h], i) in $frontmatter.art" :key="i" :name="n" :w="w" :h="h" />
    </div>
    <slot />
  </div>
</template>
