<template>
  <div>
    <header class="px-2 py-2 md:px-0 h-auto z-50">
      <MobileMenu @close="close($event)" :is-mobile-menu-out="isMobileMenuOut" :menu="menu" />
      <div class="container mx-auto justify-between lg:justify-start flex items-center">
        <div class="mr-0 md:mr-24 cursor-pointer text-white logo" @click="$router.push('/')">
          <img
            src="https://res.cloudinary.com/chitchatimages/image/upload/v1645537267/r28/R28_LOGO_-_LIGHT_ljeh65.png"
            alt="R28 logo"
          >
        </div>
        <nav
          class="hidden lg:block h-full fixed relative mr-auto"
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
                <span class="cursor-pointer capitalize font-medium text-12 md:text-14">{{ _menu.linkName }}</span>
                <div class="absolute top-full menu-dropdown shadow-xl bg-white">
                  <a
                    :href="_d.linkUrl"
                    class="block text-14 text-dark-grey py-2 px-7 dropdown-bg-hover"
                    v-for="_d in _menu.dropdown"
                    :key="_d.linkName"
                  >
                    {{ _d.linkName }}
                  </a>
                </div>
              </template>
              <template
                v-else-if="_menu.linkName.toLowerCase()==='our investments'"
              >
                <a href="/our-investments" class="cursor-pointer capitalize font-medium text-14">{{ _menu.linkName }}</a>
                <div class="absolute top-full menu-dropdown p-0 shadow-xl bg-white">
                  <div class="mb-0 cursor-pointer">
                    <a href="/our-investments" class="block mb-0 text-14 text-dark-grey p-2 dropdown-bg-hover px-7">Investment Activities</a>
                  </div>
                  <div class="businesses-dropdown__wrapper cursor-pointer">
                    <p class="block mb-0 last:mb-0 text-14 text-dark-grey p-2 dropdown-bg-hover px-7">Businesses</p>
                    <div class="businesses-dropdown">
                      <a href="/construction" class="block mb-1 last:mb-0 text-13 text-dark-grey dropdown-bg-hover px-7 py-1">Construction</a>
                      <a href="/real-estate" class="block mb-1 last:mb-0 text-13 text-dark-grey dropdown-bg-hover px-7 py-1">Real Estate</a>
                      <a href="/aviation" class="block mb-1 last:mb-0 text-13 text-dark-grey dropdown-bg-hover px-7 py-1">Aviation</a>
                      <a href="/telecommunications" class="block mb-1 last:mb-0 text-13 text-dark-grey dropdown-bg-hover px-7 py-1">Telecommunications</a>
                      <a href="/technology" class="block mb-0 last:mb-1 text-13 text-dark-grey dropdown-bg-hover px-7 py-1">Technology & Energy Solutions</a>
                      <a href="/mining" class="block mb-0 text-13 text-dark-grey dropdown-bg-hover px-7 py-1">Mining</a>
                    </div>
                  </div>
                </div>
              </template>
              <NuxtLink class="cursor-pointer capitalize font-medium text-white rest__link text-12 md:text-14" v-else :to="_menu.linkUrl">{{ _menu.linkName }}</NuxtLink>
            </li>
          </ul>
        </nav>
        <svg
          class="block lg:hidden"
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
        <div class="social-icons">
          <a href="https://www.linkedin.com" target="_blank">
            <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
            </svg>
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
    <Nuxt class="relative top-56 md:top-95" :class="{'take-body-up': scrollPosition}"/>
    <footer class="py-10 bg-dark-grey relative top-95" :class="{'take-body-up': scrollPosition}">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
        <div class="">
          <div class="mb-5">
            <img
              class="mr-0 md:mr-24 cursor-pointer text-white logo" @click="$router.push('/')"
              src="https://res.cloudinary.com/chitchatimages/image/upload/v1645537267/r28/R28_LOGO_-_LIGHT_ljeh65.png"
              alt="R28 logo"
            >
          </div>
          <div class="flex footer__socials">
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
        <div class="grid grid-cols-1 gap-2 self-start">
          <h3 class="text-gray-300 text-12 uppercase">About Us</h3>
          <NuxtLink class="text-white text-12 md:text-14" to="/who-we-are">Who we are</NuxtLink>
          <NuxtLink class="text-white text-12 md:text-14" to="/our-culture">Our culture & core values</NuxtLink>
          <NuxtLink class="text-white text-12 md:text-14" to="/our-approach">Our Approach</NuxtLink>
          <NuxtLink class="text-white text-12 md:text-14" to="/leadership">Leadership</NuxtLink>
          <NuxtLink class="text-white text-12 md:text-14" to="/careers">Careers</NuxtLink>
        </div>
        <div class="grid grid-cols-1 gap-2 self-start">
          <h3 class="text-gray-300 text-12 uppercase">Our Investments</h3>
          <NuxtLink class="text-white text-12 md:text-14" to="/construction">Construction</NuxtLink>
          <NuxtLink class="text-white text-12 md:text-14" to="/real-estate">Real Estate</NuxtLink>
          <NuxtLink class="text-white text-12 md:text-14" to="/aviation">Aviation</NuxtLink>
          <NuxtLink class="text-white text-12 md:text-14" to="/telecommunications">Telecommunications</NuxtLink>
          <NuxtLink class="text-white text-12 md:text-14" to="/technology">Technology & Energy Solutions</NuxtLink>
          <NuxtLink class="text-white text-12 md:text-14" to="/mining">Mining</NuxtLink>
        </div>
        <div class="grid grid-cols-1 gap-2 self-start text-white">
          <h3 class="text-gray-300 text-12 uppercase">Strategic Alliances</h3>
          <NuxtLink class="text-12 md:text-14" to="/strategic-alliances">Strategic Alliances</NuxtLink>
        </div>
        <div class="grid grid-cols-1 gap-2 self-start">
          <h3 class="text-gray-300 text-12 uppercase">Contact</h3>
          <p class="text-white text-12 md:text-14">
            54A Adeola Odeku Street, <br>
            Victoria Island, <br>
            Lagos, Nigeria
          </p>
          <span class="text-white text-12 md:text-14">T: +234 (0) 908 7991 029</span>
          <span class="text-white text-12 md:text-14">E: info@r28.ng</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import MobileMenu from '../components/sections/mobile-menu'
export default {
  name: "contact-layout",
  components: {MobileMenu},
  data () {
    return {
      menu: [
        {
          linkName: 'About us',
          linkUrl: '/who-we-are',
          dropdown: [
            {
              linkName: 'Who we are',
              linkUrl: '/who-we-are'
            },
            {
              linkName: 'Our Culture & Core values',
              linkUrl: '/our-culture'
            },
            {
              linkName: 'Our Approach',
              linkUrl: '/our-approach'
            },
            {
              linkName: 'Leadership',
              linkUrl: '/leadership'
            },
            {
              linkName: 'Careers',
              linkUrl: '/careers'
            },
          ]
        },
        {
          linkName: 'Our Investments',
          linkUrl: '',
          dropdown: [
            {
              linkName: 'Construction',
              linkUrl: '/construction'
            },
            {
              linkName: 'Real Estate',
              linkUrl: '/real-estate'
            },
            {
              linkName: 'Aviation',
              linkUrl: '/aviation'
            },
            {
              linkName: 'Telecommunications',
              linkUrl: '/telecommunications'
            },
            {
              linkName: 'Technology & Energy Solutions',
              linkUrl: '/technology'
            },
            {
              linkName: 'Mining',
              linkUrl: '/mining'
            },
          ]
        },
        {
          linkName: 'Strategic Alliances',
          linkUrl: '/strategic-alliances'
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
      const header = document.querySelector('header')
      if (this.scrollPosition < window.scrollY) {
        header.classList.add('going-up')
      } else {
        header.classList.remove('going-up')
      }
      this.scrollPosition = window.scrollY
    },
    close (e) {
      this.isMobileMenuOut = false
      this.$router.push(e)
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  }
}
</script>

<style scoped>
header {
  transition: top .5s ease;
  width: 100vw;
  position: fixed;
  top: 0;
  background: #482122;
}
.going-up {
  top: -95px;
  background: #482122;
}
.is-scroll {
  background: #482122;
}
.take-body-up {
  top: 0;
  transition: top .5s ease;
}
.logo {
  width: 60px;
}
.logo img {
  width: 100%;
}
.is-scroll nav ul li {
  color: #e9e1ce;
}
.is-scroll svg {
  fill: #e9e1ce;
}
.social-icons {
  display: flex;
}
.social-icons svg {
  fill: white;
  width: 20px;
  height: 20px;
}
.is-scroll .rest__link {
  color: #e9e1ce;
}
.is-scroll .social-icons svg {
  fill: #e9e1ce;
}

.menu-dropdown {
  display: none;
  top: 100%;
  left: 0;
  min-width: 300px;
}
.menu:hover .menu-dropdown {
  display: block;
}
.menu:hover .menu-dropdown {
  display: block;
}
.businesses-dropdown__wrapper:hover .businesses-dropdown {
  display: block;
}
.businesses-dropdown {
  display: none;
}

footer {
  position: relative;
  top: 95px;
}
.logo {
  width: 60px;
}
.logo img {
  width: 100%;
}
.footer__socials a svg {
  fill: #3d3d3c;
}
.dropdown-bg-hover:hover {
  background: #3d3d3c;
  color: white;
}

@media screen and (max-width: 1024px) {
  .logo {
    width: 30px;
  }
  .social-icons {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .container {
    width: 95%;
  }
  .logo {
    width: 30px;
  }
}
</style>
