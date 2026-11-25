<template>
  <div class="slidev-layout slide" :class="$frontmatter.cls">
    <header v-if="$frontmatter.heading || $frontmatter.kicker">
      <div v-if="$frontmatter.kicker" class="kicker" v-html="$frontmatter.kicker" />
      <h2 v-html="$frontmatter.heading || ''" />
      <Chips :items="$frontmatter.chips" />
    </header>
    <slot />
  </div>
</template>
