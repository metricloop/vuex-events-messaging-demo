import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import store from './vuex/store'

new Vue({
  el: '#app',
  render: h => h(App),
  store
})
