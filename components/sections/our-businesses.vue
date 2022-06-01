<template>
  <section class="bg-white mb-5 md:mb-20">
    <div class="container mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="one relative">
        <img class="absolute top-0 left-0 w-full h-full object-cover" src="../../static/images/construction-biz.jpg" alt="">
        <div class="overlay bg-black opacity-50 absolute left-0 top-0 z-20 w-full h-full border border-black"></div>
        <div class="overflow-hidden z-20 flex flex-col justify-between h-full">
          <p class="text-white text-18 uppercase">Construction</p>
          <div>
            <p
              class="card-title text-24 md:text-36 text-white z-20 mb-2 capitalize card__text"
              style="font-family: 'Playfair Display', serif"
            >Time-Tested construction solutions</p>
            <button
              class="flex items-center"
              @click="$router.push('/construction')"
            >
              <svg
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="two relative group">
        <img class="absolute top-0 left-0 w-full h-full object-cover" src="../../static/images/real-estate-biz.jpg" alt="">
        <div class="overlay bg-black opacity-50 absolute left-0 top-0 z-20 w-full h-full border border-black"></div>
        <div class="overflow-hidden z-20 flex flex-col justify-between h-full">
          <p class="text-white text-18 uppercase">Real Estate</p>
          <div>
            <p
              class="card-title text-24 md:text-36 text-white z-20 mb-2 capitalize card__text"
            style="font-family: 'Playfair Display', serif"
            >Shaping tomorrow's communities</p>
            <button
              class="flex items-center"
              @click="$router.push('/real-estate')"
            >
              <svg
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="three relative group">
        <img class="absolute top-0 left-0 w-full h-full object-cover" src="../../static/images/aviation-biz.jpg" alt="r28 aviation">
        <div class="overlay bg-black opacity-50 absolute left-0 top-0 z-20 w-full h-full border border-black"></div>
        <div class="overflow-hidden z-20 flex flex-col justify-between h-full">
          <p class="text-white text-18 uppercase">AVIATION</p>
          <div>
            <p
              class="card-title text-24 md:text-36 text-white z-20 mb-2 capitalize card__text"
              style="font-family: 'Playfair Display', serif"
            >Creating a better travel experience</p>
            <button
              class="flex items-center"
              @click="$router.push('aviation')"
            >
              <svg
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="four relative group">
        <img class="absolute top-0 left-0 w-full h-full object-cover" src="../../static/images/telecoms-biz.jpg" alt="">
        <div class="overlay bg-black opacity-50 absolute left-0 top-0 z-20 w-full h-full border border-black"></div>
        <div class="overflow-hidden z-20 flex flex-col justify-between h-full">
          <p class="text-white text-18 uppercase">TELECOMMUNICATIONS</p>
          <div>
            <p
              class="card-title text-24 md:text-36 text-white z-20 mb-2 capitalize card__text"
              style="font-family: 'Playfair Display', serif"
            >Seamlessly supporting the telecoms sector</p>
            <button
              class="flex items-center"
              @click="$router.push('/telecommunications')"
            >
              <svg
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="five relative group">
        <img class="absolute top-0 left-0 w-full h-full object-cover" src="../../static/images/engineering-biz.jpg" alt="">
        <div class="overlay bg-black opacity-50 absolute left-0 top-0 z-20 w-full h-full border border-black"></div>
        <div class="overflow-hidden z-20 flex flex-col justify-between h-full">
          <p class="text-white text-18 uppercase">TECHNOLOGY & <br>ENERGY SOLUTIONS</p>
          <div>
            <p
              class="card-title text-24 md:text-36 text-white z-20 mb-2 capitalize card__text"
              style="font-family: 'Playfair Display', serif"
            >Creative technology in steel construction</p>
            <button
              class="flex items-center"
              @click="$router.push('/technology')"
            >
              <svg
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="six relative group">
        <img class="absolute top-0 left-0 w-full h-full object-cover" src="../../static/images/mining-biz.jpg" alt="">
        <div class="overlay bg-black opacity-50 absolute left-0 top-0 z-20 w-full h-full border border-black"></div>
        <div class="overflow-hidden z-20 flex flex-col justify-between h-full">
          <p class="text-white text-18 uppercase">MINING</p>
          <div>
            <p
              class="card-title text-24 md:text-36 text-white z-20 mb-2 capitalize card__text"
              style="font-family: 'Playfair Display', serif"
            >Extracting Sustainable Value</p>
            <button
              class="flex items-center"
              @click="$router.push('/mining')"
            >
              <svg
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "our-businesses"
}
</script>

<style scoped>
.container {
  width: 90%;
}
.card__text {
  font-family: 'Playfair Display', serif;
}
.one {
  /*grid-column: 1/3;*/
  height: 518px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
}
.two {
  /*grid-column: 3/5;*/
  height: 518px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
}
.three {
  /*grid-column: 5/-1;*/
  height: 518px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
}
.four {
  /*grid-column: 1/4;*/
  height: 518px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
}
.five {
  /*grid-column: 4/-1;*/
  height: 518px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
}
.six {
  height: 518px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
}
button {
  position: relative;
}
.one:hover button span,
.two:hover button span,
.three:hover button span,
.four:hover button span,
.five:hover button span,
.six:hover button span {
  display: block;
}
.one:hover .overlay,
.two:hover .overlay,
.three:hover .overlay,
.four:hover .overlay,
.five:hover .overlay,
.six:hover .overlay {
  opacity: .8;
}
button svg {
  transform: translateX(-100px);
  transition: transform .6s ease;
  fill: white;
}

/*.one:hover .card-subtitle,*/
/*.two:hover .card-subtitle,*/
/*.three:hover .card-subtitle,*/
/*.four:hover .card-subtitle,*/
/*.five:hover .card-subtitle,*/
/*.six:hover .card-subtitle {*/
/*  display: block;*/
/*}*/

button:before {
  content: 'Learn More';
  white-space: nowrap;
  margin-right: 10px;
  transform: translateX(-100%);
  position: relative;
  transition: transform .5s ease;
  color: white;
}

.one:hover button:before,
.two:hover button:before,
.three:hover button:before,
.four:hover button:before,
.five:hover button:before,
.six:hover button:before {
  transform: translateX(0);
}
.one:hover button svg,
.two:hover button svg,
.three:hover button svg,
.four:hover button svg,
.five:hover button svg,
.six:hover button svg {
  transform: translateX(0);
}

@media screen and (max-width: 768px) {
  .container {
    width: 95% !important;
    grid-template-columns: 100%;
  }
  .one,
  .two,
  .three,
  .four,
  .five,
  .six {
    height: 350px;
    /*padding: 50px 20px;*/
  }
}
</style>
