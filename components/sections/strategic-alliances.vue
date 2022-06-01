<template>
  <section>
    <div class="container mx-auto text-dark-grey pt-5 md:pt-10 grid__grid" style="font-family: 'Montserrat', sans-serif">
      <h1
        class="text-left text-24 md:text-38 text-gray-700 text-brown-r28 font-bold"
        style="font-family: 'Playfair Display', serif; line-height: 1.1"
      >
        Creating <br> Growth <br> Opportunities
      </h1>
      <div class="mb-5 md:mb-10">
        <p class="text-14 md:text-16 mb-5" style="line-height: 24px">
          As local industry experts, we have deep, intimate knowledge of the local business environment and
          the challenges our customers face. However, in a fast-changing economy, few companies have all the
          capabilities they need to stay competitive.
        </p>
        <p class="text-14 md:text-16 mb-5" style="line-height: 24px">
          In line with our global best practice perspective and partnering mindset, R28 through its subsidiaries and
          related companies maintains a network of several strategic business partnerships and alliances with
          reputable global brands in each industry that we operate in.
        </p>
        <p class="text-14 md:text-16 mb-5" style="line-height: 24px">
          The alliances are long term relationships focused on proactively addressing the identified business
          challenges in the local industry with a fit-for-purpose global solution.
        </p>
        <p class="text-14 md:text-16 mb-5" style="line-height: 24px">
          We astutely seek to leverage the power of our partners' innovative technology platforms, business
          processes and products & services to enhance the outcomes of the products and services we offer our customers.
        </p>
        <p class="text-14 md:text-16" style="line-height: 24px">
          With this diverse expertise and the wealth of experience brought on board by the alliances, R28 is one step
          closer to fulfilling its strategic business objectives and ultimately accelerate business growth.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "strategic-alliances"
}
</script>

<style scoped>
.container {
  width: 80%;
  max-width: 1200px;
}
.grid__grid {
  display: grid;
  grid-template-columns: 2fr 5fr;
  gap: 40px;
}
.text-left {
  line-height: 1;
}
@media screen and (max-width: 768px) {
  .container {
    width: 95%;
  }
  .grid__grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  ul {
    column-count: 1;
  }
}
</style>
