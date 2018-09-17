import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
import './common/stylus/index.styl'

Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
  router,
  components: { App },
  template: '<App />'
}).$mount('#app')