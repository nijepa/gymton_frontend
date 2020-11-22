<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Navigation msg="Welcome to Your Vue.js App"/>
    <user-header />

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'
import UserHeader from "@/components/UserHeader.vue";

export default {
  name: 'User',
  components: {
    Navigation,
    Footer,
    UserHeader
  }
}
</script>