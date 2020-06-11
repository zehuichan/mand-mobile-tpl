// import 'amfe-flexible'
// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'

// A modern alternative to CSS resets
import 'normalize.css'

import '@/assets/less/index.less'

import App from './App.vue'
import router from './router'
import store from './store'

// internationalization
import i18n from './lang'

import FastClick from 'fastclick'

if ('addEventListener' in document && 'ontouchstart' in window) {
  FastClick.prototype.focus = function (targetElement) {
    targetElement.focus()
  }
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

import './permission'

// 微信jssdk
import WechatPlugin from '@/plugins/wechat/index'
// 高德地图API
import AmapPlugin from '@/plugins/amap/index'

Vue.use(WechatPlugin)
Vue.use(AmapPlugin)

import * as filters from './filters'

// register global utility filters.
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
