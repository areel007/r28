<template>
  <header class="w-screen bg-transparent fixed top-0 px-2 md:px-0 h-auto z-10" :class="{'is-scroll': scrollPosition > 70}">
    <MobileMenu :is-mobile-menu-out="isMobileMenuOut" :menu="menu" />
    <div class="container mx-auto justify-between md:justify-start flex items-center md:h-16 h-14">
      <h1 class="text-2xl font-bold mr-0 md:mr-24 cursor-pointer text-white logo">R28</h1>
      <nav
      class="hidden md:block h-full fixed relative"
      >
        <ul class="flex h-full relative p-5 md:p-0">
          <li
            class="relative flex items-center menu mx-4 text-white font-normal"
            v-for="_menu in menu"
            :key="_menu.linkName"
          >
            <template
              v-if="_menu.linkName.toLowerCase()==='about us'"
            >
              <span class="cursor-pointer capitalize font-medium">{{ _menu.linkName }}</span>
              <div class="absolute top-full menu-dropdown p-7 shadow-xl bg-white">
                <NuxtLink :to="_d.linkUrl" class="block mb-5 text-14 text-black" v-for="_d in _menu.dropdown" :key="_d.linkName">{{ _d.linkName }}</NuxtLink>
              </div>
            </template>
            <template
              v-else-if="_menu.linkName.toLowerCase()==='our businesses'"
            >
              <span class="cursor-pointer capitalize font-medium">{{ _menu.linkName }}</span>
              <div class="absolute top-full menu-dropdown p-7 shadow-xl bg-white">
                <NuxtLink :to="_d.linkUrl" class="block mb-5 text-14 text-black" v-for="_d in _menu.dropdown" :key="_d.linkName">{{ _d.linkName }}</NuxtLink>
              </div>
            </template>
            <NuxtLink class="cursor-pointer capitalize font-medium" v-else :to="_menu.linkUrl">{{ _menu.linkName }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <svg
        class="block md:hidden"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#ffffff"
        v-if="!isMobileMenuOut"
        @click="openMobileMenu"
      >
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
      </svg>
      <svg
        class="block md:hidden"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#ffffff"
        v-else
        @click="closeMobileMenu"
      >
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59
        6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
      </svg>
    </div>
  </header>
</template>

<script>
import MobileMenu from "./mobile-menu";
export default {
  name: "app-header",
  components: {MobileMenu},
  data () {
    return {
      menu: [
        {
          linkName: 'About us',
          linkUrl: '/about-us',
          dropdown: [
            {
              linkName: 'Who we are',
              linkUrl: '/who-we-are'
            },
            {
              linkName: 'Our approach',
              linkUrl: '/our-approach'
            },
            {
              linkName: 'Leadership',
              linkUrl: '/leadership'
            },
            {
              linkName: 'Career',
              linkUrl: '/career'
            },
          ]
        },
        {
          linkName: 'Our businesses',
          linkUrl: '/our-businesses',
          dropdown: [
            {
              linkName: 'Renewable power & transition',
              linkUrl: '/renewable-power-transition'
            },
            {
              linkName: 'Infrastructure',
              linkUrl: '/infrastructure'
            },
            {
              linkName: 'Private Equity',
              linkUrl: '/private-equity'
            },
            {
              linkName: 'Real Estate',
              linkUrl: '/real-estate'
            },
          ]
        },
        {
          linkName: 'Career',
          linkUrl: '/career'
        },
        {
          linkName: 'Contact',
          linkUrl: '/contact'
        },
      ],
      isMobileMenuOut: false,
      scrollPosition: null,
    }
  },
  methods: {
    openMobileMenu () {
      this.isMobileMenuOut = true
    },
    closeMobileMenu () {
      this.isMobileMenuOut = false
    },
    updateScroll () {
      this.scrollPosition = window.scrollY
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  }
}
</script>

<style scoped>
.is-scroll {
  background: white;
}
.is-scroll .logo {
  color: black;
}
.is-scroll nav ul li {
  color: black;
}
.is-scroll svg {
  fill: black;
}
</style>
