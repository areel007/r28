<template>
  <section>
    <div class="container mx-auto text-dark-grey pt-5 md:pt-10 grid__grid" style="font-family: 'Montserrat', sans-serif">
      <h1
        class="text-left text-24 md:text-38 text-gray-700 text-brown-r28 font-bold"
        style="font-family: 'Playfair Display', serif; line-height: 1.1"
      >
        Creative <br> technology <br> in steel <br> construction
      </h1>
      <div class="mb-5 md:mb-10">
        <p class="text-14 md:text-16 mb-5" style="line-height: 24px">
          R28 Limited operates in the oil & gas construction sector through its subsidiary, NIVAFER Engineering
          and Construction Company Limited.
        </p>
        <p class="text-14 md:text-16 mb-5" style="line-height: 24px">
          NIVAFER is a steel fabrication and erection outfit offering unparalleled engineering & construction services
          to the Oil and Gas industry alongside other steel and allied industries.
        </p>
        <p class="text-14 md:text-16 mb-5" style="line-height: 24px">
          With about 40 years of experience and accomplishments, NIVAFER is now accepted as an industry leader in
          structural steel fabrication works. Our success has been built on customer satisfaction and loyalty
          which is based on our performance in the execution of contracts and the reliability of our designs and products.
        </p>
        <p class="text-14 md:text-16 mb-5" style="line-height: 24px">
          NIVAFER is a leader in the steel construction industry and has been in the business of fabrication &
          construction of subsea equipment, structural steel buildings, offshore platforms, atmospheric tanks,
          pressure vessels, product tank farms, LPG spheres and miscellaneous steel structures.
        </p>
        <p class="text-14 md:text-16" style="line-height: 24px">
          Its facility is equipped with the state-of- the-art equipment and resources and through various design and
          fabrication processes, Nivafer have now set world-class standards in safety, quality and efficiency.
        </p>
      </div>
    </div>
    <Businesses />
  </section>
</template>

<script>
import Businesses from "../businesses";
export default {
  name: "technology",
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
