<template>
  <section class="py-5 md:py-40" style="font-family: 'Montserrat', sans-serif">
    <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 align-top">
      <div
        class="h-150 flex w-full shadow-md hover:shadow cursor-pointer bg-mist leader-card"
        @click="$router.push('/leadership/sir-kesington')"
      >
        <div class="h-full">
          <img src="/images/chief.jpg" alt="Sir Kesington">
        </div>
        <div class="w-full p-3">
          <h4 class="text-14 md:text-16 text-brown-r28 font-bold" style="font-family: 'Playfair Display', serif; line-height: 1">
            Sir Kesington Adebukunola Adebutu
            <span class="font-normal" style="font-size: 12px !important; font-family: 'Montserrat', sans-serif, serif !important;">CON, KJW, FISM</span>
          </h4>
          <span class="text-12 md:text-14 text-dark-grey">Chairman</span>
        </div>
      </div>
      <div
        class="h-150 flex shadow-md hover:shadow cursor-pointer bg-mist leader-card"
        @click="$router.push('/leadership/adebisi')"
      >
        <div class="h-full">
          <img src="/images/adebisi.jpg" alt="Mr Adebisi">
        </div>
        <div class="w-full p-3">
          <h4 class="text-14 md:text-16 text-brown-r28 font-bold" style="font-family: 'Playfair Display', serif; line-height: 1">Adebisi Adebutu</h4>
          <span class="text-12 md:text-14 text-dark-grey">Group President</span>
        </div>
      </div>
      <div
        class="h-150 flex shadow-md hover:shadow cursor-pointer bg-mist leader-card"
        @click="$router.push('/leadership/afolabi')"
      >
        <div class="h-full bg-dark-grey">
          <img src="/images/afolabi.jpg" alt="Mr Afolabi">
        </div>
        <div class="w-full p-3">
          <h4 class="text-14 md:text-16 text-brown-r28 font-bold" style="font-family: 'Playfair Display', serif; line-height: 1">Afolabi Aiyeola</h4>
          <span class="text-12 md:text-14 text-dark-grey">Group Executive</span>
        </div>
      </div>
      <div
        class="h-150 flex shadow-md hover:shadow cursor-pointer bg-mist leader-card"
        @click="$router.push('/leadership/eyo')"
      >
        <div class="h-full">
          <img src="/images/eyo.jpg" alt="Mr Eyo">
        </div>
        <div class="w-full p-3">
          <h4 class="text-14 md:text-16 text-brown-r28 font-bold" style="font-family: 'Playfair Display', serif; line-height: 1">Eyo Asuquo</h4>
          <span class="text-12 md:text-14 text-dark-grey">Group Executive</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "body-leadership"
}
</script>

<style scoped>
.container {
  width: 60%;
  max-width: 1200px;
}
.leader-card {
  display: grid;
  grid-template-columns: 150px 1fr;
}

@media screen and (max-width: 1920px) {
  .container {
    width: 95%;
  }
}
</style>
