import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import i18n from './i18n'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  i18n,
  router
}).$mount('#app')
