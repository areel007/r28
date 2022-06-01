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
            src="../../static/images/eyo2.jpg"
            alt="Mr Eyo"
            class="w-full"
          >
        </div>
        <div>
          <span class="text-16 md:text-18 font-medium block mb-5 text-brown-r28 font-bold" style="font-family: 'Playfair Display', serif">Eyo Asuquo</span>
          <p class="text-14 md:text-16 mb-5">
            Eyo Asuquo possesses over 20 years of leadership and executive
            management experience in Business Consulting, Commercial Banking, Insurance, Infrastructure,
            Construction, and Real Estate.
          </p>
          <p class="text-14 md:text-16 mb-5">
            Eyo started his career with a globally recognized management consulting and audit firm.
            He has acquired significant experience in business management and led several strategy
            and change initiatives across several sectors, has deep mergers and acquisition experience
            and achieved capital raise for several infrastructure projects including an airport terminal,
            internationally branded hotel assets.
          </p>
          <p class="text-14 md:text-16">
            He is an alumnus of University of Nigeria, Nsukka, and Cass Business School,
            London, and a member of the Chartered Institute of Bankers.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "../../components/sections/about-us/who-we-are/hero";

export default {
  name: "eyo",
  components: {Hero},
  head: {
    title: 'Leadership - Eyo Asuquo'
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
