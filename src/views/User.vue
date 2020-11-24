<template>
  <div class="home">
    <Navigation msg="Welcome to Your Vue.js App"/>
    <user-header />
    <Profile v-if="getSelectedMenu === 1" />
    <Advertising v-if="getSelectedMenu === 2" />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'
import UserHeader from "@/components/UserHeader.vue";
import Profile from "@/components/Profile.vue";
import Advertising from "@/components/Advertising.vue";
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'User',
  components: {
    Navigation,
    Footer,
    UserHeader,
    Profile,
    Advertising
  },
  computed: {
      ...mapGetters([ 'getSelectedMenu' ]),
    },

    methods: {
      ...mapActions([ 'selectMenu' ]),
    }
}
</script>