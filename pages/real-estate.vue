<template>
  <div class="relative font-montserrat z-0 bg-white">
    <Hero
      banner-text="Real Estate"
      banner-image="real-estate-hero.jpg"
    />
    <RealEstate />
  </div>
</template>

<script>
import Hero from '../components/sections/about-us/who-we-are/hero'
import RealEstate from '../components/sections/our-investments/real-estate'

export default {
  name: "real-estate",
  components: {Hero, RealEstate},
  head: {
    title: 'Real Estate'
  }
}
</script>

<style scoped>

</style>
