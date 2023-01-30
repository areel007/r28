<template>
  <section class="py-5 md:py-20">
    <div class="container mx-auto text-dark-grey pt-5 md:pt-10 grid__grid" style="font-family: 'Montserrat', sans-serif">
      <h1
        class="text-left mb-5 md:mb-5 text-24 md:text-38 text-gray-700 text-brown-r28 font-bold heading-h1"
        style="font-family: 'Playfair Display', serif"
      >
        Culture built <br> on enduring <br> values
      </h1>
      <div class="mb-5 md:mb-10">
        <p class="text-14 md:text-16 mb-5">
          Everyone involved in the company has an ongoing responsibility to share and live by our
          corporate values and ambitions. The Group’s thinking, interaction and decision-making process
          is grounded in these values, and we recognize that continuous adherence is essential to our growth.
          The three core values that frame all our actions and underpin our performance are:
        </p>
        <div class="mb-5">
          <h3 class="mb-1 text-14 font-bold text-brown-r28">Integrity</h3>
          <p class="text-14 md:text-16 mb-5">
            A commitment to ensuring our business activities are done with sound moral and the highest ethical standard.
          </p>
        </div>
        <div class="mb-5">
          <h3 class="mb-1 text-14 font-bold text-brown-r28">Quality</h3>
          <p class="text-14 md:text-16 mb-5">
            We thoroughly understand that quality ensures customer satisfaction, increased profitability, good neighborliness
            and overall growth. Therefore, we have put quality at the core of everything we do. We continually strive to
            gain a reputation for high standards of quality in all the marketplace where we operate.
          </p>
          <p class="text-14 md:text-16">
            This pursuit of uncompromising quality is the underlying fundamental that  enables us to move swiftly and
            effectively to create value to all stakeholders in all our investments.
          </p>
        </div>
        <div class="mb-5">
          <h3 class="mb-1 text-14 font-bold text-brown-r28">Innovation</h3>
          <p class="text-14 md:text-16 mb-5">
            R28 offers a depth and range of skills and knowledge that encourages creative thinking that stimulates innovation.
            This often allows us to create viable investment solutions and unlock latent business opportunities.
            We innovate to continually build better solutions, execute faster and more effectively.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "body-culture"
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
