import Vue from 'vue'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'
import 'styles/reset.css'
import 'styles/iconfont.css'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
FastClick.attach(document.body) // vue移动端使用click
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
