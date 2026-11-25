<template>
  <div class="slidev-layout slide t-viz" :class="$frontmatter.cls">
    <header>
      <div v-if="$frontmatter.kicker" class="kicker" v-html="$frontmatter.kicker" />
      <h2 v-html="$frontmatter.heading || ''" />
      <Chips :items="$frontmatter.chips" />
    </header>
    <Scene :scene="$frontmatter.scene" />
    <slot />
  </div>
</template>
