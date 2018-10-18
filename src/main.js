import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
FastClick.attach(document.body) // vue移动端使用click
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
