<template>
  <section class="py-5 md:py-20" style="font-family: 'Montserrat', sans-serif">
    <div class="container mx-auto text-dark-grey">
<!--      <h1-->
<!--        class="text-left mb-5 md:mb-10 text-24 md:text-32 text-gray-700 text-brown-r28 font-medium"-->
<!--        style="font-family: 'Noto Serif', serif; font-weight: bold"-->
<!--      >-->
<!--        Working at Brookfield means becoming part of a collaborative, results-oriented team at-->
<!--        a firm that has owned and operated real-asset businesses for 120 years.-->
<!--      </h1>-->
      <div
        class="grid grid-cols-1 items-center mb-20 md:mb-40"
      >
<!--        class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-9 items-center mb-20 md:mb-40"-->
        <img
          class="w-full h-auto self-start"
          src="../../../static/images/career.jpg"
          alt="R28 careers"
        >
<!--        <div class="left">-->
<!--          <h1 class="text-30 2xl:text-48 text-brown-r28 font-medium mb-5 2xl:mb-10">Invested in people</h1>-->
<!--          <p class="text-14 md:text-16 text-dark-grey mb-1 2xl:mb-3">-->
<!--            We put as much time and care into our hiring decisions as into our investment-->
<!--            decisions, and we take a long-term approach to both.-->
<!--          </p>-->
<!--          <p class="text-14 md:text-16 text-dark-grey mb-1 2xl:mb-3">-->
<!--            We offer opportunities for growth through on-the-job learning and roles that provide exposure-->
<!--            to different businesses, geographies and teams.-->
<!--          </p>-->
<!--          <div v-if="!getWidth">-->
<!--            <p class="text-14 md:text-16 text-dark-grey mb-1 2xl:mb-3">We have a "grow from within" approach to the-->
<!--              development of our people, with a focus on internal mobility across business groups, functions-->
<!--              and regions, and within our portfolio companies.-->
<!--            </p>-->
<!--            <p class="text-14 md:text-16 text-dark-grey mb-1 2xl:mb-3">-->
<!--              We favor individuals who are collaborative, entrepreneurial and disciplined, as these attributes-->
<!--              reflect our approach to investing as well as the characteristics of our leaders.-->
<!--            </p>-->
<!--          </div>-->
<!--          <NuxtLink class="text-brown-r28 text-14 font-medium underline" to="/">See career opportunities</NuxtLink>-->
<!--        </div>-->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "index",
  methods: {
    getWidth () {
      return window.innerWidth > 1536
    }
  },
  mounted() {
    window.addEventListener('resize', this.getWidth)
  }
}
</script>

<style scoped>
.container {
  width: 75%;
  max-width: 1330px;
}
.left h1 {
  font-family: 'Noto Serif', serif;
  position: relative;
}
.left h1:after {
  content: '';
  position: absolute;
  top: 120%;
  left: 0;
  height: 3px;
  width: 60px;
  background: #3d3d3c;
}

@media screen and (max-width: 1200px) {
  .container {
    width: 95%;
  }
}

@media screen and (max-width: 768px) {
  .container {
    width: 95%;
  }
}
</style>
