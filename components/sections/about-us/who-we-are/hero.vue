<template>
  <section class="relative h-400 pt-28 pb-10 w-screen">
    <div class="overlay absolute top-0 left-0 z-20 bg-black w-full h-full opacity-70"></div>
    <img class="absolute top-0 object-cover w-full h-full" :src="bannerImage ? require(`../../../../static/images/${bannerImage}`) : require('../../../../static/images/r28.jpg')" alt="hero">
    <div class="container mx-auto z-30 relative flex flex-col justify-center w-full h-full">
      <h1 class="text-20 md:text-36 text-white mb-5 text-left" style="font-family: 'Playfair Display', serif">{{ bannerText }}</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: "hero",
  props: ['bannerText', 'bannerImage']
}
</script>

<style scoped>
.text-left {
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
}
@media screen and (max-width: 1200px) {
  .text-left {
    width: 65%;
  }
}
@media screen and (max-width: 1040px) {
  .text-left {
    width: 80%;
  }
}
@media screen and (max-width: 768px) {
  .container {
    width: 100%;
  }
  .text-left {
    width: 95%;
  }
}
@media screen and (max-width: 650px) {
  .container {
    padding: 0 10px;
  }
}
</style>
