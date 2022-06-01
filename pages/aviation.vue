<template>
  <div class="relative font-montserrat z-0 bg-white">
    <Hero
      banner-text="Aviation"
      banner-image="aviation-hero.jpg"
    />
    <Aviation />
  </div>
</template>

<script>
import Hero from '../components/sections/about-us/who-we-are/hero'
import Aviation from '../components/sections/our-investments/aviation'

export default {
  name: "aviation",
  components: {Hero, Aviation},
  head: {
    title: 'Aviation'
  }
}
</script>

<style scoped>

</style>
