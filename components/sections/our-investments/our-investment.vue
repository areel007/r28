<template>
  <section>
    <div class="container mx-auto text-dark-grey pt-5 md:pt-10 grid__grid" style="font-family: 'Montserrat', sans-serif">
      <h1
        class="text-left text-24 md:text-42 text-gray-700 text-brown-r28 font-bold"
        style="font-family: 'Playfair Display', serif"
      >
        Long-term, <br> Global and <br>Diversified.
      </h1>
      <div class="mb-5 md:mb-10">
        <p class="text-14 md:text-16 mb-5">
          R28's investment activities is
          aligned with a coherent,
          long-term value chain strat-
          egy. Our portfolio includes
          operational investments in
          the construction, real estate,
          aviation, oil & gas, mining,
          merchandising, telecoms,
          and manufacturing sectors.
        </p>
        <p class="text-14 md:text-16 mb-5">
          Our underlying investment
          approach is conservative, long-
          term, global, and diversified. Our
          expertise, local knowledge, market
          insight and agility are qualities that
          differentiate us in the marketplace.
        </p>
        <p class="text-14 md:text-16 mb-5">
          R28 derives substantial advantage
          from investing with its own equity
          capital. We react quickly to new
          opportunities that we understand
          well and offer good value. Our
          investment approach follows a
          rigorous assessment process
          before any commitment is made.
        </p>
        <p class="text-14 md:text-16 mb-5">
          Preferring equity control of its
          investments, R28 also maintains
          operational control that allows
          swift decisions and the flexibility to adapt to an ever-evolving environ ment.
        </p>
        <p class="text-14 md:text-16 mb-5">
          The company keeps monitoring
          long-term trends in the different
          fields to identify emerging tech
          nologies which could have a
          positive impact on its operations.
        </p>
      </div>
    </div>
    <Businesses />
  </section>
</template>

<script>
import Businesses from "../businesses";
export default {
  name: "our-investment",
  components: {Businesses}
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
.grid__grid h1 {
  line-height: 1.1;
}
@media screen and (max-width: 768px) {
  .container {
    width: 95%;
  }
}
</style>
