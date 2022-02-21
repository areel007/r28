<template>
  <section class="text-center bg-white w-screen bg-white">
    <div class="container mx-auto py-10 md:py-20 text-16 md:text-20 stat-text">
      <span>
        R28 LIMITED, established in 2007, is a consolidated and diversified private investment holding
        company with strategic business interest in various sectors of the Nigerian economy.
      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: "stat"
}
</script>

<style scoped>
.stat-text span {
  max-width: 70%;
  display: block;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .stat-text span {
    max-width: 90%;
  }
}
</style>
