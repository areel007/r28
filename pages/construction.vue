<template>
  <div class="relative font-montserrat z-0 bg-white">
    <Hero
      banner-text="Construction"
      banner-image="construction-hero.jpg"
    />
    <Construction />
  </div>
</template>

<script>
import Hero from '../components/sections/about-us/who-we-are/hero'
import Construction from '../components/sections/our-investments/construction'
export default {
  name: "construction",
  components: {Hero, Construction},
  head: {
    title: 'Construction'
  }
}
</script>

<style scoped>

</style>
