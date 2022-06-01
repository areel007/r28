<template>
  <div class="relative font-montserrat z-0 bg-white">
    <Hero
      banner-text="Leadership"
      banner-image=""
    />
    <Body />
  </div>
</template>

<script>
import Hero from "../../components/sections/about-us/who-we-are/hero";
import Body from "../../components/sections/about-us/leadership/body-leadership";
export default {
  name: "leadership",
  components: {Body, Hero},
  head: {
    title: 'Leadership'
  }
}
</script>

<style scoped>
</style>
