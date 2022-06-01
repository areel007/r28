<template>
  <div class="relative font-montserrat z-0 bg-white">
    <Hero
      banner-text="Strategic Alliances"
      banner-image=""
    />
    <StrategicAlliances />
  </div>
</template>

<script>
import Hero from '../components/sections/about-us/who-we-are/hero'
import StrategicAlliances from '../components/sections/strategic-alliances'

export default {
  name: "strategic-alliances",
  components: {Hero, StrategicAlliances},
  head: {
    title: 'Strategic Alliances'
  }
}
</script>

<style scoped>

</style>
