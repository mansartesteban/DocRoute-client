import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import store from './store'
import Axios from "axios"
// import ClickOutside from "vue-click-outside"

Axios.defaults.baseURL = "http://www.docroute.loc"
// Vue.directive('click-outside', ClickOutside)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
