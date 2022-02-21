<template>
  <section class="relative h-auto pt-28 pb-10 md:pt-0 md:pb-0 md:h-screen w-screen bg-blue-50">
    <div class="overlay absolute top-0 left-0 z-20 bg-black w-full h-full opacity-70"></div>
    <img class="absolute top-0 object-cover w-full h-full" src="https://res.cloudinary.com/chitchatimages/image/upload/v1645355988/r28/r28_c6sdgz.jpg" alt="hero">
    <div class="container mx-auto z-30 relative flex flex-col justify-center w-full h-full">
      <span class="text-white text-12 md:text-16 font-medium mb-5">A CONSOLIDATED AND DIVERSIFIED INVESTMENT HOLDING COMPANY</span>
      <h1 class="text-4xl md:text-6xl text-white mb-5">Pioneers of long-term impact</h1>
      <p class="text-14 md:text-18 text-white mb-5 max-w-3xl">R28 focuses on the Nigerian market and welcomes international opportunities with reputable partners.</p>
      <button class="hero__btn">
        <span class="mr-3 capitalize text-14">R28 overview</span>
        <svg
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#ffffff"
        >
          <path d="M0 0h24v24H0V0z" fill="none"/>
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
        </svg>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "hero"
}
</script>

<style scoped>
.container {
  width: 75%;
}
.hero__btn {
  width: min-content;
  padding: 10px 20px; white-space: nowrap;
  border: 1px solid white;
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
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
  color: white;
}
.hero__btn:hover svg {
  z-index: 10;
  fill: white;
}

@media screen and (max-width: 768px) {
  .container {
    width: 100%;
  }
}
@media screen and (max-width: 650px) {
  .container {
    padding: 0 10px;
  }
}
</style>
