<template>
  <div>
    <AppHeader />
    <Nuxt />
    <AppFooter />
  </div>
</template>
<script>
import AppHeader from "../components/sections/app-header";
import AppFooter from "../components/sections/app-footer";
export default {
  components: {AppFooter, AppHeader}
}
</script>
