import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
