<template>
  <div
    class="mobile-menu fixed top-0 left-0 h-full bg-transparent md:hidden"
    :class="{'mobile-menu-out': isMobileMenuOut}"
  >
    <div class="absolute left-0 top-0 w-full h-full bg-brown-r28 overlay"></div>
    <ul class="pt-10 pl-3 md:pl-5">
      <li
        class="relative menu mx-0 md:mx-4 mb-5 text-white mobile-menu__menu whitespace-nowrap"
        v-for="_menu in menu"
        :key="_menu.linkName"
      >
        <template
          v-if="_menu.linkName.toLowerCase()==='about us'"
        >
          <span
            class="cursor-pointer capitalize font-medium mobile-menu__menu text-12 md:text-14"
          >
            {{ _menu.linkName }}
          </span>
          <div class="mobile-menu-dropdown mt-2">
            <span
              @click="$emit('close', _d.linkUrl)"
              class="whitespace-normal sm:whitespace-nowrap block mb-2 text-12 md:text-14"
              v-for="_d in _menu.dropdown"
              :key="_d.linkName"
            >
              {{ _d.linkName }}
            </span>
          </div>
        </template>
        <template
          v-else-if="_menu.linkName.toLowerCase()==='our investments'"
        >
          <span
            @click="$emit('closeForOurBiz');
            $router.push('/our-investments')"
            class="cursor-pointer capitalize font-medium mobile-menu__menu text-12 md:text-14"
          >
            {{ _menu.linkName }}
          </span>
          <div class="mobile-menu-dropdown mt-2">
            <div class="whitespace-normal sm:whitespace-nowrap block mb-2 text-12 md:text-14">
              <div class="mb-2">
                <p @click="$emit('close', 'our-investments')">Investment Activities</p>
              </div>
              <div class="mobile-businesses__wrapper">
                <p class="mb-2">Businesses</p>
                <div class="mobile-businesses" v-if="">
                  <span @click="$emit('close', 'construction')" class="block mb-1 last:mb-0 text-12 text-white">Construction</span>
                  <span @click="$emit('close', 'real-estate')" class="block mb-1 last:mb-0 text-12 text-white">Real Estate</span>
                  <span @click="$emit('close', 'aviation')" class="block mb-1 last:mb-0 text-12 text-white">Aviation</span>
                  <span @click="$emit('close', 'telecommunications')" class="block mb-1 last:mb-0 text-13 text-white">Telecommunications</span>
                  <span @click="$emit('close', 'technology')" class="block mb-0 last:mb-1 text-12 text-white">Technology & Energy Solutions</span>
                  <span @click="$emit('close', 'mining')" class="block mb-0 last:mb-1 text-12 text-white">Mining</span>
                </div>
              </div>
            </div>
          </div>
        </template>
        <span @click="$emit('close', _menu.linkUrl)" class="cursor-pointer font-medium capitalize text-12 md:text-14" v-else >{{ _menu.linkName }}</span>
      </li>
    </ul>
    <div class="text-white relative pl-3 md:pl-5 mobile-menu-socials">
      <a href="https://www.linkedin.com" target="_blank" @click="$emit('close-social')">
        <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
        </svg>
      </a>
      <a href="https://www.twitter.com" target="_blank" @click="$emit('close-social')">
        <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "mobile-menu",
  props: ['isMobileMenuOut', 'menu'],
  methods: {
    close () {
      alert('Close')
    }
  }
}
</script>

<style scoped>
.mobile-menu {
  width: 80vw;
  transition: transform .5s ease;
}
.mobile-menu-out {
  transform: translateX(0) !important;
}
.mobile-menu-dropdown {
  display: none;
}
.mobile-menu__menu:hover .mobile-menu-dropdown {
  display: block;
}
.mobile-menu-socials {
  display: flex;
  gap: 10px;
}
.mobile-menu-socials a {
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  display: flex;
}
.mobile-menu-socials a svg {
  width: 10px;
  height: 10px;
  margin: auto;
  fill: #482122;
}
.mobile-businesses {
  display: none;
}
.mobile-businesses__wrapper:hover .mobile-businesses {
  display: block;
}

@media screen and (max-width: 768px) {
  .mobile-menu {
    transform: translateX(-100%);
  }
}
</style>
