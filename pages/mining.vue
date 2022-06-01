<template>
  <div>
    <Hero
      banner-text="Mining"
      banner-image="mining-hero.jpg"
    />
    <Mining />
  </div>
</template>

<script>
import Hero from '../components/sections/about-us/who-we-are/hero'
import Mining from '../components/sections/our-investments/mining'

export default {
  name: "mining",
  components: {Hero, Mining},
  head: {
    title: 'Mining'
  }
}
</script>

<style scoped>

</style>
