<template>
  <div class="bg-brown-r28 py-5 md:py-10">
    <div class="container mx-auto sub-investment">
      <h1 class="w-min whitespace-nowrap relative mb-10 text-20 md:text-30 font-medium text-white">Businesses</h1>
      <nav>
        <ul class="grid grid-cols-1 lg:grid-cols-biz-cols gap-2 lg:gap-5">
          <li class="text-16 text-white h-auto py-0 flex items-center cursor-pointer">
            <NuxtLink to="/construction" :class="$route.path==='/our-investments'?'xyz-first':'xyz'">Construction</NuxtLink>
          </li>
          <li class="text-16 text-white h-auto py-0 flex items-center cursor-pointer">
            <NuxtLink to="/real-estate" class="xyz">Real Estate</NuxtLink>
          </li>
          <li class="text-16 text-white h-auto py-0 flex items-center cursor-pointer">
            <NuxtLink to="/aviation" class="xyz">Aviation</NuxtLink>
          </li>
          <li class="text-16 text-white h-auto py-0 flex items-center cursor-pointer">
            <NuxtLink to="/telecommunications" class="xyz">Telecommunications</NuxtLink>
          </li>
          <li class="text-16 text-white h-auto py-0 flex items-center cursor-pointer">
            <NuxtLink to="/technology" class="xyz">Technology</NuxtLink>
          </li>
          <li class="text-16 text-white h-auto py-0 flex items-center cursor-pointer">
            <NuxtLink to="/mining" class="xyz">Mining</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "businesses"
}
</script>

<style scoped>
.container {
  width: 75%;
  max-width: 1200px;
}
.sub-investment h1 {
  font-family: 'Playfair Display', serif;
}
.sub-investment h1:after {
  content: '';
  width: 30%;
  height: 3px;
  background-color: white;
  position: absolute;
  left: 0;
  top: 110%;
}
li {
  position: relative;
  height: 50px;
  border-top: 1px solid grey;
}
.xyz {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.xyz-first {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border-top: 4px solid white;
}
.nuxt-link-active {
  border-top: 4px solid white;
}
@media screen and (max-width: 768px) {
  .container {
    width: 95%;
  }
}
</style>
