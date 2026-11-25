<template>
  <div class="slidev-layout slide t-statement">
    <header v-if="$frontmatter.heading || $frontmatter.kicker">
      <div v-if="$frontmatter.kicker" class="kicker" v-html="$frontmatter.kicker" />
      <h2 v-html="$frontmatter.heading || ''" />
    </header>
    <div class="statement"><slot /></div>
  </div>
</template>
