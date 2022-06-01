<template>
  <section class="bg-dark-grey py-10 md:py-20">
    <div class="container mx-auto">
      <h1 class="text-white uppercase font-bold mb-5 2xl:pl-20 pl-0">About us</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-20 2xl:gap-40 text-white about-us-text">
        <div class="left text-white 2xl:pl-20 pl-0 text-14 md:text-16">
          <p class="mb-5">
            R28 LIMITED, established in 2007, is a consolidated and diversified private investment holding
            company with strategic business interest in various sectors of the Nigerian economy.
          </p>
          <p>
            The company is continuously identifying and developing profitable investment opportunities to
            transform communities through job creation and capacity development. We invest in businesses
            that can deliver strong earnings and capital growth over the long term...
          </p>
          <NuxtLink to="/who-we-are" class="text-white cursor-pointer font-medium block font-medium" @click="toggleShow">Read more</NuxtLink>
        </div>
        <div class="right">
          <NuxtLink to="/who-we-are" class="pb-3 capitalize flex items-center justify-between border-b border-white text-white text-14 md:text-16">
            <span>Who we are</span>
            <svg
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="white"
            >
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
            </svg>
          </NuxtLink>

          <NuxtLink to="/our-culture" class="py-3 capitalize flex items-center justify-between border-b border-white text-white text-14 md:text-16">
            <span>Our culture & core values</span>
            <svg
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="white"
            >
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
            </svg>
          </NuxtLink>

          <NuxtLink to="/our-approach" class="py-3 capitalize flex items-center justify-between border-b border-white text-white text-14 md:text-16">
            <span>Our Approach</span>
            <svg
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="white"
            >
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
            </svg>
          </NuxtLink>

          <NuxtLink to="/leadership" class="py-3 capitalize flex items-center justify-between text-white text-14 md:text-16 border-b border-white">
            <span>Leadership</span>
            <svg
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="white"
            >
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
            </svg>
          </NuxtLink>

          <NuxtLink to="/careers" class="py-3 capitalize flex items-center justify-between text-white text-14 md:text-16">
            <span>Careers</span>
            <svg
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="white"
            >
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "about-us",
  data () {
    return {
      isTextShown: false
    }
  },
  methods: {
    toggleShow () {
      this.isTextShown = true
    },
    toggleHide () {
      this.isTextShown = false
    }
  }
}
</script>

<style scoped>
.container {
  width: 90%;
}
.hide {
  display: none;
}
.about-us-text {
  line-height: 200%;
}
.is-text-shown {
  display: block;
}

section {
  font-family: 'Montserrat', sans-serif;
}

@media screen and (max-width: 768px) {
  .container {
    width: 95%;
  }
}
</style>
