<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Navigation msg="Welcome to Your Vue.js App"/>
    <Player />
    <Playing />

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'
import Player from '@/components/Player.vue'
import Playing from '@/components/Playing.vue'

export default {
  name: 'Home',
  components: {
    Navigation,
    Footer,
    Player,
    Playing,
  }
}
</script>