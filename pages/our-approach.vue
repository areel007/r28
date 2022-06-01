<template>
  <div class="relative font-montserrat z-0 bg-white">
    <Hero
      banner-text="Our Approach"
      banner-image=""
    />
    <OurApproachBody />
  </div>
</template>

<script>
import Hero from '../components/sections/about-us/who-we-are/hero'
import OurApproachBody from "../components/sections/about-us/our-approach/our-approach-body";
export default {
  name: "our-approach",
  components: {
    OurApproachBody,
    Hero
  },
  head: {
    title: 'Our Approach'
  }
}
</script>

<style scoped>

</style>
