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
            src="../../static/images/adebisi2.jpg"
            alt="Mr Adebisi"
            class="w-full"
          >
        </div>
        <div>
          <span class="text-16 md:text-18 font-medium block mb-5 text-brown-r28 font-bold" style="font-family: 'Playfair Display', serif">Adebisi Adebutu</span>
          <p class="text-14 md:text-16 mb-5">
            CEO Adebisi has over 25 years of inspiring entrepreneurial experience as founder
            and business owner in several organizations from telecommunication, gaming,
            hospitality, entertainment, construction, and property development.
          </p>
          <p class="text-14 md:text-16 mb-5">
            A consummate entrepreneur with a high degree of personal integrity and effective
            leadership and management style, offering expertise in core areas of business management operations.
          </p>
          <p class="text-14 md:text-16">
            Adebisi possesses a contagious passion for excellence, a talent for resourceful business solutions,
            and a capacity for motivated leadership. He is an alumnus of the University of Swansea, United
            Kingdom and also alumnus of Insead Business School.

          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '../../components/sections/about-us/who-we-are/hero'

export default {
  name: "adebisi",
  components: {Hero},
  head: {
    title: 'Leadership - Adebisi Adebutu'
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
