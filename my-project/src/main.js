// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex';
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import store from './store/index'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './assets/css/cssreset.css'

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(ElementUI)
Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
