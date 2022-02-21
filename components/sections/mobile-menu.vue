<template>
  <div
    class="mobile-menu fixed top-0 left-0 h-full bg-black md:hidden"
    :class="{'mobile-menu-out': isMobileMenuOut}"
  >
    <ul class="pt-10 pl-5">
      <li
        class="relative menu mx-4 mb-5 text-white mobile-menu__menu w-min whitespace-nowrap"
        v-for="_menu in menu"
        :key="_menu.linkName"
      >
        <template
          v-if="_menu.linkName.toLowerCase()==='about us'"
        >
          <span class="cursor-pointer capitalize font-medium mobile-menu__menu">{{ _menu.linkName }}</span>
          <div class="mobile-menu-dropdown py-2 shadow-xl">
            <NuxtLink :to="_d.linkUrl" class="block mb-2 text-16" v-for="_d in _menu.dropdown" :key="_d.linkName">{{ _d.linkName }}</NuxtLink>
          </div>
        </template>
        <template
          v-else-if="_menu.linkName.toLowerCase()==='our businesses'"
        >
          <span class="cursor-pointer capitalize font-medium mobile-menu__menu">{{ _menu.linkName }}</span>
          <div class="mobile-menu-dropdown py-2">
            <NuxtLink :to="_d.linkUrl" class="block mb-2 text-16" v-for="_d in _menu.dropdown" :key="_d.linkName">{{ _d.linkName }}</NuxtLink>
          </div>
        </template>
        <NuxtLink class="cursor-pointer capitalize font-medium" v-else :to="_menu.linkUrl">{{ _menu.linkName }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "mobile-menu",
  props: ['isMobileMenuOut', 'menu']
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

@media screen and (max-width: 768px) {
  .mobile-menu {
    transform: translateX(-100%);
  }
}
</style>
