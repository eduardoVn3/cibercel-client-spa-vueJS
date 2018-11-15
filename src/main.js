// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
import axios from 'axios'
import route_api from './Config/Config_connection'
Vue.use(Vuetify,{
  theme: {
    blanco:'#FFFFFF',
    azul_claro:'#00A6C4',
    azul_oscuro:'#0787AD',
    gris:'#7C7E80',
    gris_oscuro :'#565758',
    negro:'#373436',
    navbar:colors.grey.lighten1
  }
})
export const EventBus = new Vue()
Vue.config.productionTip = false
Vue.http = Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
