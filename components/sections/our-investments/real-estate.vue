<template>
  <section>
    <div class="container mx-auto text-dark-grey pt-5 md:pt-10 grid__grid" style="font-family: 'Montserrat', sans-serif">
      <h1
        class="text-left text-24 md:text-38 text-gray-700 text-brown-r28 font-bold"
        style="font-family: 'Playfair Display', serif; line-height: 1.1"
      >
        Shaping tomorrow's communities
      </h1>
      <div class="mb-5 md:mb-10">
        <p class="text-14 md:text-16 mb-5" style="line-height: 24px">
          R28 Limited operates in the real estate sector through First Investment Development Company (FIDC).
        </p>
        <p class="text-14 md:text-16 mb-5" style="line-height: 24px">
          FIDC is one of the progressive and most valuable real estate development and investment companies in Nigeria.
          With proven competencies in properties, shopping malls & retail, airports and hospitality & leisure, FIDC
          is uniquely positioned to shape new lifestyles and transform communities with a focus on design excellence,
          build quality and timely delivery.
        </p>
        <p class="text-14 md:text-16 mb-5" style="line-height: 24px">
          The Company is currently involved in implementing real estate programs for public and private sector clients.
        </p>
        <p class="text-14 md:text-16 mb-5" style="line-height: 24px">
          Our extensive experience covers a wide range of projects including corporate headquarters, office buildings,
          residential and student housing, healthcare facilities, industrial infrastructure, aviation facilities and
          mixed-use development.
        </p>
        <p class="text-14 md:text-16 mb-5" style="line-height: 24px">
          By establishing best-in-class local and foreign professional management teams with relevant expertise, and
          through leveraging its own equity capital, the Company has built extensive track record in identifying,
          recommending, and executing the most appropriate financing, development, and management solutions.
        </p>
      </div>
    </div>
    <Businesses />
  </section>
</template>

<script>
import Businesses from "../businesses";
export default {
  name: "real-estate",
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
