import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'

const VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo)


Vue.config.productionTip = false

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

new Vue({
  created () {
    AOS.init()
  },
  router,
  render: h => h(App)
}).$mount('#app')
