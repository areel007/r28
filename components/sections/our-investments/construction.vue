<template>
  <section>
    <div class="container mx-auto text-dark-grey pt-5 md:pt-10 grid__grid" style="font-family: 'Montserrat', sans-serif">
      <h1
        class="text-left text-24 md:text-38 text-gray-700 text-brown-r28 font-bold"
        style="font-family: 'Playfair Display', serif; line-height: 1.1"
      >
        Time-tested construction solutions.
      </h1>
      <div class="mb-5 md:mb-10">
        <p class="text-14 md:text-16 mb-5" style="line-height: 24px">
          R28 operates in the construction sector through her subsidiary, Arbico Plc. Arbico is a full service,
          building and civil engineering contracting company.
        </p>
        <p class="text-14 md:text-16 mb-5" style="line-height: 24px">
          Established in 1958, it has been quoted on the Nigerian Stock Exchange since 1978. Arbico has become
          one of the foremost building construction companies in Nigeria.
        </p>
        <p class="text-14 md:text-16 mb-5" style="line-height: 24px">
          The Company has developed substantial experience in building and civil engineering for government institutions,
          multinational companies, multilateral agencies, industrial groups, as well as high-net worth individuals.
        </p>
        <p class="text-14 md:text-16 mb-5" style="line-height: 24px">
          Arbico has been involved in pre- construction, general contracting, design-build, construction management,
          project management and construction services across a wide-range of projects in the following sectors:
        </p>
        <ul class="text-14 md:text-16 mb-5 ml-5">
          <li class="list-disc">Civil Engineering</li>
          <li class="list-disc">Infrastructure</li>
          <li class="list-disc">Aviation</li>
          <li class="list-disc">Healthcare</li>
          <li class="list-disc">Hospitality</li>
          <li class="list-disc">Manufacturing and Industrial</li>
          <li class="list-disc">Residential</li>
          <li class="list-disc">Water and Wastewater</li>
          <li class="list-disc">Education</li>
          <li class="list-disc">Corporate and commercial Offices</li>
        </ul>
        <p class="text-14 md:text-16" style="line-height: 24px">
          Arbico's construction management team has vast experience ranging from private residences, high-rise buildings
          and factories to plants and infrastructure projects. The company has a proven track record of delivering
          construction projects on schedule and within budget.
        </p>
      </div>
    </div>
    <Businesses />
  </section>
</template>

<script>
import Businesses from "../businesses";
export default {
  name: "construction",
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
ul {
  column-count: 2;
  line-height: 24px;
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
