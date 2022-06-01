<template>
  <section>
    <div class="container mx-auto text-dark-grey pt-5 md:pt-10 grid__grid" style="font-family: 'Montserrat', sans-serif">
      <h1
        class="text-left text-24 md:text-38 text-gray-700 text-brown-r28 font-bold"
        style="font-family: 'Playfair Display', serif"
      >
        Extracting<br> sustainable <br> value
      </h1>
      <div class="mb-5 md:mb-10">
        <p class="text-14 md:text-16 mb-5" style="line-height: 24px">
          R28 Limited operates in the mining sector through Prestige Quarry, with activities in
          Abuja, Lagos, Plateau and Bauchi.
        </p>
        <p class="text-14 md:text-16 mb-5" style="line-height: 24px">
          Prestige Quarry was established to explore and develop mining licenses for natural
          stone and other solid minerals.
        </p>
        <p class="text-14 md:text-16 mb-5" style="line-height: 24px">
          The Company currently owns and operates quarries in Abuja and Ibadan, providing a
          wide range of stone products including marble, granite, limestone, sandstone, and slate.
        </p>
        <p class="text-14 md:text-16" style="line-height: 24px">
          Prestige Quarry also has the capability and experience to undertake similar and related mining services and is
          currently conducting exploratory activities for other solid minerals propositions.
        </p>
      </div>
    </div>
    <Businesses />
  </section>
</template>

<script>
import Businesses from "../businesses";
export default {
  name: "mining",
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
  line-height: 1.1;
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
