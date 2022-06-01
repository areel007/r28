<template>
  <section class="text-center bg-white w-screen bg-white py-10 md:py-20">
    <div class="container mx-auto text-30 md:text-60 stat-text mb-2 md:mb-5">
      <span class="text-brown-r28">
        A Consolidated and Diversified
        <br>
        Investment Holding Company
      </span>
    </div>
    <button class="flex items-center justify-center cursor-pointer" @click="$router.push('/who-we-are')">
      <span class="text-center font-light text-14 md:text-20 learn-more">Learn more</span>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#482122"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/></svg>
    </button>
  </section>
</template>

<script>
export default {
  name: "stat"
}
</script>

<style scoped>
.stat-text span {
  width: 90%;
  max-width: 1100px;
  display: block;
  margin: 0 auto;
  font-family: 'Playfair Display', serif;
  font-weight: 700 !important;
}
.learn-more {
  font-family: 'Montserrat', sans-serif;
  display: block !important;
  margin-right: 10px;
  color: #482122;
}
button {
  margin: 0 auto;
  /*white-space: nowrap;*/
  width: auto;
}

@media screen and (max-width: 768px) {
  .stat-text span {
    max-width: 90%;
  }
}
</style>
