<template>
  <div class="home">
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'User',
  components: {
    Login,
  },
  computed: {
      ...mapGetters([ 'getSelectedMenu' ]),
    },

    methods: {
      ...mapActions([ 'selectMenu' ]),
    }
}
</script>