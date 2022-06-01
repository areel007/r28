<template>
  <div class="relative font-montserrat z-0 bg-white">
    <Hero
      banner-text="Who we are"
      banner-image=""
    />
    <Body />
  </div>
</template>

<script>
import Hero from "../components/sections/about-us/who-we-are/hero";
import Body from "../components/sections/about-us/who-we-are/body-who-we-are";

export default {
  name: "who-we-are",
  components: {Body, Hero},
  head: {
    title: 'Who We Are'
  }
}
</script>

<style scoped>

</style>
