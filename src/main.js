// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' // 引入vue模块
import App from './App' // 引入app主页面
import ElementUI from 'element-ui' // 引入element框架
import 'element-ui/lib/theme-chalk/index.css'//element样式
import store from './store/index.js' //引入路由配置文件
import router from '@/router/index.js' // 引入路由文件
import axios from '../node_modules/axios' //引入axios模块
import setaxios from './js/setaxios'//页面拦截函数
import VueLazyload from 'vue-lazyload' //使用懒加载
setaxios() // 使用拦截
Vue.config.productionTip = false
Vue.prototype.$http = axios //添加一个原型方法
Vue.use(ElementUI)
Vue.use(VueLazyload, { // 使用懒加载
  preload: 1.3, //速度
  loading: require('./assets/img/logo0.jpg'), //图片路径
  error: './assets/img/logo0.jpg', //错误
  attempt: 3 
})

router.beforeEach((to, from, next) => { //路由拦截
  store.commit('settoken', localStorage.getItem('token')) //给store添加一个token
  if (to.meta.requireAuth) { //判断登录权限
    if (store.state.token) {//判断有无token
      next()
    } else {
      next({ //跳转到login
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
