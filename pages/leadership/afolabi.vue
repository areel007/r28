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
            src="../../static/images/afolabi-2.jpg"
            alt="Mr Afolabi"
            class="w-full"
          >
        </div>
        <div>
          <span class="text-16 md:text-18 font-medium block mb-5 text-brown-r28 font-bold" style="font-family: 'Playfair Display', serif">Afolabi Aiyeola</span>
          <p class="text-14 md:text-16 mb-5">
            Afolabi Aiyeola has over 25 years of working experience in the construction
            industry, managing various large-scale commercial, residential, and institutional
            construction projects in different countries including Nigeria, USA and Angola.
          </p>
          <p class="text-14 md:text-16 mb-5">
            He is an effective business leader, offering expertise in operation management,
            relationship Building and contract negotiation. He holds a Bachelor of Science
            Degree in Civil Engineering from the University of Lagos and a Master of Science
            Degree in Civil Engineering with an emphasis in Construction Engineering and
            Management from Virginia Tech, USA.
          </p>
          <p class="text-14 md:text-16">
            He is a member of the Institute of Directors Nigeria, Project Management Institute
            and a certified Project Management Professional. He is also an alumnus of the Lagos Business School.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "../../components/sections/about-us/who-we-are/hero";

export default {
  name: "afolabi",
  components: {Hero},
  head: {
    title: 'Leadership - Afolabi Aiyeola'
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
