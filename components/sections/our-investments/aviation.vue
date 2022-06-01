<template>
  <section>
    <div class="container mx-auto text-dark-grey pt-5 md:pt-10 grid__grid" style="font-family: 'Montserrat', sans-serif">
      <h1
        class="text-left text-24 md:text-38 text-gray-700 text-brown-r28 font-bold"
        style="font-family: 'Playfair Display', serif; line-height: 1.1"
      >
        Creating a <br> better travel experience.
      </h1>
      <div class="mb-5 md:mb-10">
        <p class="text-14 md:text-16 mb-5" style="line-height: 24px">
          R28 Limited operates in the aviation sector via Asaba Airport Company (AAC).
        </p>
        <p class="text-14 md:text-16 mb-5" style="line-height: 24px">
          The company recently signed a thirty (30) years concession agreement with the
          Delta State Government to redevelop, operate and manage the Asaba International Airport (IATA: ABB, ICAO: DNAS).
        </p>
        <p class="text-14 md:text-16 mb-5" style="line-height: 24px">
          The Asaba International Airport is an airport serving the city of Asaba, its environs, and the Niger-Delta
          region. The airport currently handles domestic flight services connecting the metropolis to Nigeria's
          major metropolitan centers, with few international flights in the recent past.
        </p>
        <p class="text-14 md:text-16 mb-5" style="line-height: 24px">
          The objectives of the concession are to foster the remodeling and deployment of requisite airport
          infrastructure, elevate air travel experience and create a regional hub for air traffic movement
          connecting West and Central Africa. In this regard, our vision is to provide professional excellence
          in airport management and operations, help airlines operate safely, securely, and efficiently and
          provide a pleasurable and convenient travel experience to passengers.
        </p>
        <p class="text-14 md:text-16 mb-5" style="line-height: 24px">
          The sustainability of Asaba International Airport is critical for the local economy since it is
          in a position to support the expected trade and economic growth of the Niger-Delta region.
          The remodeling and expansion of the airport will address current capacity issues and the
          expected cargo and passenger traffic growth.
        </p>
      </div>
    </div>
    <Businesses />
  </section>
</template>

<script>
import Businesses from "../businesses";
export default {
  name: "aviation",
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
