<template>
  <div class="relative font-montserrat z-0 bg-white">
    <Hero
      banner-text="Our Investment Activities"
      banner-image=""
    />
    <OurInvestment />
  </div>
</template>

<script>
import Hero from "../../components/sections/about-us/who-we-are/hero";
import OurInvestment from "../../components/sections/our-investments/our-investment";
import Construction from "../../pages/our-investments/construction";
import RealEstate from "../../pages/our-investments/real-estate";
import Aviation from "../../pages/our-investments/aviation";
import Telecoms from "../../pages/our-investments/telecoms";
import Technology from "../../pages/our-investments/technology";
import Mining from "../../pages/our-investments/mining";

export default {
  name: "our-investments",
  components: {
    OurInvestment,
    Hero,
    Construction,
    RealEstate,
    Aviation,
    Telecoms,
    Technology,
    Mining,
  },
  data () {
    return {
      step: 1
    }
  },
  methods: {
    // construction () {
    //   this.step = 1
    // },
    // realEstate () {
    //   this.step = 2
    // },
    // aviation () {
    //   this.step = 3
    // },
    // telecoms () {
    //   this.step = 4
    // },
    // technology () {
    //   this.step = 5
    // },
    // mining () {
    //   this.step = 6
    // },
  }
}
</script>

<style scoped>

</style>
