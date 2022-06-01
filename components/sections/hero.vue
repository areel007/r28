<template>
  <section class="relative h-auto md:h-70vh pt-28 pb-10 md:pt-0 md:pb-0 2xl:h-70vh w-screen">
    <div :class="`overlay absolute top-0 left-0 z-20 bg-dark-grey w-full h-full ${count === 1 ? 'opacity-80' : 'opacity-0'}`"></div>
    <img class="absolute top-0 object-cover w-full h-full" v-if="count === 1" src="https://res.cloudinary.com/chitchatimages/image/upload/v1645355988/r28/r28_c6sdgz.jpg" alt="hero">
    <img class="absolute top-0 object-cover w-full h-full" v-if="count === 2" src="../../static/images/hero-2.jpg" alt="hero">
    <img class="absolute top-0 object-cover w-full h-full" v-if="count === 3" src="../../static/images/hero-3.jpg" alt="hero">
    <div class="container mx-auto z-30 relative flex flex-col justify-center w-full h-full">
<!--      <span class="text-white text-12 md:text-14 font-medium mb-5">A CONSOLIDATED AND DIVERSIFIED INVESTMENT HOLDING COMPANY</span>-->
<!--      <h1 class="text-4xl md:text-48 text-white mb-5 main__text">Pioneers of long-term impact</h1>-->
<!--      <p class="text-14 md:text-16 text-white mb-5 max-w-3xl">R28 focuses on the Nigerian market and welcomes international opportunities with reputable partners.</p>-->
<!--      <button-->
<!--        class="hero__btn"-->
<!--        @click="$router.push('/who-we-are')"-->
<!--      >-->
<!--        <span class="mr-3 capitalize text-14">R28 overview</span>-->
<!--        <svg-->
<!--          height="24px"-->
<!--          viewBox="0 0 24 24"-->
<!--          width="24px"-->
<!--          fill="#ffffff"-->
<!--        >-->
<!--          <path d="M0 0h24v24H0V0z" fill="none"/>-->
<!--          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>-->
<!--        </svg>-->
<!--      </button>-->
    </div>
  </section>
</template>

<script>
export default {
  name: "hero",
  data() {
    return {
      count: 1
    }
  },
  methods: {
    updateCount () {
      setInterval(() => {
        if (this.count === 3) {
          this.count = 1
        } else {
          this.count = this.count + 1
        }
      }, 10000)
    }
  },
  mounted() {
    this.updateCount()
  }
}
</script>

<style scoped>
.container {
  width: 75%;
  max-width: 1300px;
}
.main__text {
  font-family: 'Noto Serif', serif;
  line-height: 1 !important;
}
.hero__btn {
  width: min-content;
  padding: 10px 20px; white-space: nowrap;
  border: 1px solid #ffffff;
  color: #ffffff;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
}
.hero__btn svg {
  fill: #e9e1ce;
  width: 20px;
  height: 20px;
}
.hero__btn:after {
  content: '';
  position: absolute;
  width: 0;
  height: 100%;
  background-color: #ffffff;
  opacity: .3;
  left: 0;
  top: 0;
  transition: width .3s ease;
}
.hero__btn:hover:after {
  width: 100%;
}
.hero__btn:hover span {
  z-index: 10;
  color: #ffffff;
}
.hero__btn:hover svg {
  z-index: 10;
  fill: #ffffff;
}

@media screen and (max-width: 768px) {
  .container {
    width: 95%;
  }
}
@media screen and (max-width: 650px) {
  .container {
    padding: 0 10px;
  }
}
</style>
