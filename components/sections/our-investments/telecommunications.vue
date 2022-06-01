<template>
  <section>
    <div class="container mx-auto text-dark-grey pt-5 md:pt-10 grid__grid" style="font-family: 'Montserrat', sans-serif">
      <h1
        class="text-left text-24 md:text-38 text-gray-700 text-brown-r28 font-bold"
        style="font-family: 'Playfair Display', serif; line-height: 1.1"
      >
        Seamlessly supporting the telecoms sector
      </h1>
      <div class="mb-5 md:mb-10">
        <p class="text-14 md:text-16 mb-5" style="line-height: 24px">
          R28 Limited operates in the telecommunications sector through its subsidiary, Biswal Limited.
        </p>
        <p class="text-14 md:text-16 mb-5" style="line-height: 24px">
          The company provides a full range of technical services and material support to allow end-to-end telecoms
          infrastructure deployment, as well as post deployment maintenance and energy solutions management,
          both within and outside Nigeria.
        </p>
        <p class="text-14 md:text-16 mb-5" style="line-height: 24px">
          Biswal provides high quality, bespoke services to the telecommunications industry. We pride ourselves on the
          acquisition, development and deployment of all resources required to allow a telecommunications company
          to provide excellent service to its own customers.
        </p>
        <p class="text-14 md:text-16 mb-5" style="line-height: 24px">
          We provide support services to the telecommunications industry. With more than twenty years'
          experience, we deliver high quality, cost-effective support services and innovative products to
          leading telecommunications companies in Nigeria.
        </p>
        <p class="text-14 md:text-16" style="line-height: 24px">
          TWe acquire, develop and deploy resources in order to deliver the best possible quality in service
          for the telecommunications industry.
        </p>
      </div>
    </div>
    <Businesses />
  </section>
</template>

<script>
import Businesses from "../businesses";
export default {
  name: "telecommunications",
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
