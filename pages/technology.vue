<template>
  <div>
    <Hero
      banner-text="Technology & Energy Solutions"
      banner-image="engineering-hero.jpg"
    />
    <Technology />
  </div>
</template>

<script>
import Hero from '../components/sections/about-us/who-we-are/hero'
import Technology from '../components/sections/our-investments/technology'

export default {
  name: "technology",
  components: {Hero, Technology},
  head: {
    title: 'Technology & Energy Solutions'
  }
}
</script>

<style scoped>

</style>
