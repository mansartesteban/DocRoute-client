import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import store from './store'
import Axios from "axios"
import "./assets/_overwrite.css"
import "./assets/_classes.css"
import Notifications from 'vue-notification'
import Mixins from "./mixins"

Axios.defaults.baseURL = "http://www.docroute.loc"
Vue.config.productionTip = false
Vue.use(Notifications)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
