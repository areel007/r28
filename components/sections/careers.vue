<template>
  <section class="relative w-screen h-300 md:h-475">
    <img class="absolute top-0 left-0 z-0 w-full h-full object-cover" src="https://res.cloudinary.com/chitchatimages/image/upload/v1645366956/r28/pexels-tirachard-kumtanom-601170_bb7f5v.jpg" alt="R28 careers">
    <div class="overlay h-full w-full absolute top-0 left-0 z-10 bg-black opacity-60"></div>
    <div class="relative container mx-auto z-30 relative flex flex-col justify-center w-full h-full">
      <span class="text-white text-10 md:text-16 font-medium mb-5">CAREERS</span>
      <h1 class="text-3xl md:text-4xl text-white mb-5">R28 and You</h1>
      <p class="text-12 md:text-18 text-white mb-5 max-w-3xl">R28 focuses on the Nigerian market and welcomes international opportunities with reputable partners.</p>
      <button class="hero__btn">
        <span class="mr-3 capitalize text-14">Learn more</span>
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
  name: "careers"
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
