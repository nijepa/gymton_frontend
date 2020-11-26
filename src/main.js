import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import AudioVisual from 'vue-audio-visual'

Vue.use(AudioVisual)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
