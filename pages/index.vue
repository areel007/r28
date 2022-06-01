<template>
  <div class="relative font-montserrat z-0 bg-white">
    <Hero />
    <Stat />
    <OurBusinesses />
    <AboutUs />
    <Careers />
  </div>
</template>

<script>
import Hero from "../components/sections/hero";
import Stat from "../components/sections/stat";
import OurBusinesses from "../components/sections/our-businesses";
import AboutUs from "../components/sections/about-us";
import Careers from "../components/sections/careers";
export default {
  name: 'IndexPage',
  components: {Careers, AboutUs, OurBusinesses, Stat, Hero},
  head: {
    title: 'Home'
  }
}
</script>
