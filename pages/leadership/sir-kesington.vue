<template>
  <div class="relative top-0 left-0 w-screen" style="font-family: 'Montserrat', sans-serif">
    <Hero
      banner-text="Leadership"
      banner-image=""
    />
    <div class="py-5 md:py-20 text-dark-grey">
      <div class="container mx-auto grid gap-5 md:gap-10">
        <div class="bg-gray-800 image-wrapper">
          <img
            src="../../static/images/chief-2.jpg"
            alt="Sir Kesington"
            class="w-full"
          >
        </div>
        <div>
          <span
            class="text-16 md:text-18 block mb-5 text-brown-r28 font-bold"
            style="font-family: 'Playfair Display', serif"
          >
            Sir Kesington Adebukunola Adebutu <span style="font-family: 'Montserrat', sans-serif; font-weight: 400; font-size: 14px">CON, KJW, FISM</span>
          </span>
          <p class="text-14 md:text-16 mb-5">
            Sir Kesington is the Founder/ Chairman of Premier Lotto popularly known as ‘Baba Ijebu’.
            Nigeria’s leading games and entertainment company.
          </p>
          <p class="text-14 md:text-16 mb-5">
            An astute entrepreneur, a business icon and a philanthropist of great repute. Armed with
            a rare conviction to transform society, he has become one of the most reliable social- economic
            forces of our time; helping to move Nigeria forward towards national integration, economic
            growth and development. Sir Kesington’s philanthropic gestures stand him out as a man of
            rare humanitarian pedigree.
          </p>
          <p class="text-14 md:text-16">
            Through the Kesington Adebukunola Adebutu Foundation (KAAF) he continues to change the lives of many.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "../../components/sections/about-us/who-we-are/hero";
export default {
  name: "sir-kesington",
  components: {Hero},
  head: {
    title: 'Leadership - Sir Kesington'
  }
}
</script>

<style scoped>
.container {
  width: 70%;
  max-width: 900px;
  grid-template-columns: 250px 1fr;
  align-self: flex-start;
}
.image-wrapper {
  height: 300px;
}

@media screen and (max-width: 768px) {
  .container {
    width: 95%;
    grid-template-columns: 100%;
  }
  .image-wrapper {
    height: 100%;
  }
}
</style>
