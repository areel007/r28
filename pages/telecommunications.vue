<template>
  <div>
    <Hero
      banner-text="Telecommunications"
      banner-image="telcoms-hero.jpg"
    />
    <Telecommunications />
  </div>
</template>

<script>
import Hero from '../components/sections/about-us/who-we-are/hero'
import Telecommunications from '../components/sections/our-investments/telecommunications'

export default {
  name: "telecommunications",
  components: {Hero, Telecommunications},
  head: {
    title: 'Telecommunications'
  }
}
</script>

<style scoped>

</style>
