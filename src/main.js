import Vue from 'vue'
import App from './App.vue'
// import './assets/tailwind.css'
import router from './router'
import VueConfirmDialog from 'vue-confirm-dialog'
import Vuelidate from 'vuelidate'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(Vuelidate) 
Vue.use(VueConfirmDialog)
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
