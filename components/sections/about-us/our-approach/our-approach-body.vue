<template>
  <section class="py-5 md:py-20">
    <div class="container mx-auto text-dark-grey pt-5 md:pt-10 grid__grid" style="font-family: 'Montserrat', sans-serif">
      <h1
        class="text-left mb-5 md:mb-5 text-24 md:text-38 text-gray-700 text-brown-r28 font-bold heading-h1"
        style="font-family: 'Playfair Display', serif"
      >
        Investing on <br> a value basis
      </h1>
      <div class="mb-5">
        <p class="text-14 md:text-16 mb-5">
          R28 investment activities is facilitated through an astute and often creative approach
          to opportunities, alongside swift assessment and investment decisions.
        </p>
        <p class="text-14 md:text-16 mb-5">
          R28 investment strategy is primarily focused on the Nigerian market, however
          the Company will also consider opportunities in Sub- Saharan Africa.
        </p>
        <p class="text-14 md:text-16 mb-5">
          The Company prefers positive cash flow business models with committed management but is also willing
          to acquire businesses through leveraged buyouts and distressed situations. The Company continues
          to seek new opportunities and can accommodate complex financial structures where required.
        </p>
        <p class="text-14 md:text-16 mb-5">
          With a clear emphasis on the value of skilled and motivated management, the Company adds value through
          supporting and advising its teams through all phases of a businesses’ development.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "our-approach-body"
}
</script>

<style scoped>
.container {
  width: 80%;
  max-width: 1200px;
}
.heading-h1 {
  font-weight: 700;
  line-height: 1.3;
}
.grid__grid {
  display: grid;
  grid-template-columns: 2fr 5fr;
  gap: 40px;
}

@media screen and (max-width: 768px) {
  .container {
    width: 95%;
  }
}
</style>
