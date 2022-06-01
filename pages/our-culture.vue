<template>
  <div class="relative font-montserrat z-0 bg-white">
    <Hero
      banner-text="Our culture & core values"
      banner-image=""
    />
    <Body />
  </div>
</template>

<script>
import Hero from "../components/sections/about-us/who-we-are/hero";
import Body from "../components/sections/about-us/our-culture/body-culture";
export default {
  name: "our-culture",
  components: {Body, Hero},
  head: {
    title: 'Our Culture & Core Values'
  }
}
</script>

<style scoped>

</style>
