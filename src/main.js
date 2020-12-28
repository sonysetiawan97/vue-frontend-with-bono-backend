import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import vueCookie from 'vue-cookies'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.config.productionTip = false
Vue.use(vueCookie)
Vue.use(BootstrapVue)

Vue.$cookies.config('1h')

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
