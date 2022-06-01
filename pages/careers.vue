<template>
  <div class="relative font-montserrat z-0 bg-white">
    <Hero
      banner-text="Careers"
      banner-image="construction-hero.jpg"
    />
    <Careers />
  </div>
</template>

<script>
import Hero from '../components/sections/about-us/who-we-are/hero'
import Careers from '../components/sections/careers/index'

export default {
  name: "careers",
  head: {
    title: 'Careers'
  },
  components: {
    Hero,
    Careers
  }
}
</script>

<style scoped>

</style>
