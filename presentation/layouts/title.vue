<template>
  <div class="slidev-layout slide t-title snow">
    <div class="title-art">
      <Art name="stars" :w="1000" :h="300" par="none" class="stars" />
      <Art name="snowfield" :w="1000" :h="200" par="none" class="ground" />
      <Art name="outpost" :w="400" :h="260" class="outpost" />
      <Art name="dog" :w="200" :h="140" class="dog" />
    </div>
    <div class="title-wrap">
      <div class="kicker" v-html="$frontmatter.kicker || ''" />
      <h1 v-html="$frontmatter.heading" />
      <div class="subtitle" v-html="$frontmatter.subtitle || ''" />
    </div>
    <div v-if="$frontmatter.footer" class="footer" v-html="$frontmatter.footer" />
    <slot />
  </div>
</template>
