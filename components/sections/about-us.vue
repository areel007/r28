<template>
  <section class="bg-black py-10 md:py-20">
    <div class="container mx-auto">
      <h1 class="text-white uppercase font-bold mb-5">About us</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 text-white about-us-text">
        <div class="left">
          R28 LIMITED, established in 2007, is a consolidated and diversified private investment holding
          company with strategic business interest in various sectors of the Nigerian economy.
          <br>
          The company is continuously identifying and developing profitable investment opportunities to
          transform communities through job creation and capacity development. We invest in businesses
          that can deliver strong earnings and capital growth over the long term.
          <span class="text-red-500 cursor-pointer" v-if="!isTextShown" @click="toggleShow">Read more</span>
          <span class="hide" :class="{'is-text-shown': isTextShown}">
            Our investments are
          made directly or through subsidiaries and related companies that cut across a broad range of
          industries such as construction, real estate, oil &amp; gas, aviation, telecommunication, and
          manufacturing.
          The leadership team is made up of professionals and astute entrepreneurs with several years of
        investment and management experience in multiple industries.
        Our investment philosophy is anchored on the long-term fundamentals, preferring to grow
        organically as well as through acquisitions in areas where we are able to leverage our
        significant experience and capabilities to create value. The Company predominantly uses its
        equity capital for investment which promotes favourable financing flexibility and swift decisions
        at the early stages of investment.

        R28 focuses on the Nigerian market and welcomes international opportunities with reputable
        partners. Furthermore, the company maintain strategic alliances with several international
        brands/operators and seeks to add value to its investment portfolio.
        </span>
          <span class="text-red-500 cursor-pointer" v-if="isTextShown" @click="toggleHide">Read less</span>
        </div>
        <div class="right">
          <NuxtLink to="/" class="pb-3 capitalize flex items-center justify-between border-b border-blue-50">
            <span>Who we are</span>
            <svg
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#ffffff"
            >
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
            </svg>
          </NuxtLink>

          <div class="py-3 capitalize flex items-center justify-between border-b border-blue-50">
            <span>Our approach</span>
            <svg
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#ffffff"
            >
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
            </svg>
          </div>

          <div class="py-3 capitalize flex items-center justify-between">
            <span>Leadership</span>
            <svg
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#ffffff"
            >
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
            </svg>
          </div>
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
  width: 75%;
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

@media screen and (max-width: 768px) {
  .container {
    width: 95%;
  }
}
</style>
