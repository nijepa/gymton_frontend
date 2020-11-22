<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Navigation msg="Welcome to Your Vue.js App"/>
    <upload-files></upload-files>

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'
import UploadFiles from "@/components/UploadFiles";

export default {
  name: 'Home',
  components: {
    Navigation,
    Footer,
    UploadFiles
  }
}
</script>