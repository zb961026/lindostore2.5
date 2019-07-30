// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' // 引入vue模块
import App from './App' // 引入app主页面
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index.js'
import router from '@/router/index.js' // 引入路由文件
import axios from '../node_modules/axios'
import setaxios from './js/setaxios'
import VueLazyload from 'vue-lazyload'
setaxios()
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(ElementUI)
Vue.use(VueLazyload, {
  preload: 1.3,
  loading: require('./assets/img/logo0.jpg'),
  error: './assets/img/logo0.jpg',
  attempt: 3
})

router.beforeEach((to, from, next) => {
  store.commit('settoken', localStorage.getItem('token'))
  if (to.meta.requireAuth) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 使用router
  store, // 使用vuex
  axios,
  components: { App },
  template: '<App/>'
})
