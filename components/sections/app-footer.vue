<template>
  <footer class="py-10 bg-black">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
      <div class="">
        <h1 class="text-xl text-white font-bold mb-3">R28</h1>
        <div class="flex">
          <a href="https://www.linkedin.com" target="_blank" class="w-30 h-30 rounded-full bg-white mr-2 flex justify-center items-center">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
            </svg>
          </a>
          <a href="https://www.twitter.com" target="_blank" class="w-30 h-30 rounded-full bg-white mr-2 flex justify-center items-center">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-2">
        <h3 class="text-gray-300 text-12 uppercase">About Us</h3>
        <NuxtLink class="text-white text-16" to="/about-us">Who we are</NuxtLink>
        <NuxtLink class="text-white text-16" to="/about-us">Our approach</NuxtLink>
        <NuxtLink class="text-white text-16" to="/about-us">Leadership</NuxtLink>
        <NuxtLink class="text-white text-16" to="/about-us">Career</NuxtLink>
      </div>
      <div class="grid grid-cols-1 gap-2">
        <h3 class="text-gray-300 text-12 uppercase">Our Businesses</h3>
        <NuxtLink class="text-white text-16" to="/about-us">Renewable Power and Transition</NuxtLink>
        <NuxtLink class="text-white text-16" to="/about-us">Infrastructure</NuxtLink>
        <NuxtLink class="text-white text-16" to="/about-us">Private Equity</NuxtLink>
        <NuxtLink class="text-white text-16" to="/about-us">Real Estate</NuxtLink>
      </div>
      <div class="grid grid-cols-1 gap-2">
        <h3 class="text-gray-300 text-12 uppercase">Careers</h3>
      </div>
      <div class="grid grid-cols-1 gap-2 self-start">
        <h3 class="text-gray-300 text-12 uppercase">Contact</h3>
        <span class="text-white text-16">Parkview, Ikoyi</span>
        <span class="text-white text-16">+248 (0) 802 8943 665</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "app-footer"
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .container {
    width: 95%;
  }
}
</style>
