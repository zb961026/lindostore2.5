/* eslint-disable no-undef */
import Vue from 'vue' // 导入vue模块
import Router from 'vue-router' //  导入vue-router模块
import '@/assets/css/reset.css' // 引入所需要的所有样式表
import '@/assets/css/header.css'  // 引入所需要的所有样式表
import '@/assets/css/goodsList.css'  // 引入所需要的所有样式表
import '@/assets/css/prompt.css'  // 引入所需要的所有样式表
import '@/assets/css/item.css'  // 引入所需要的所有样式表
import '@/assets/css/cart.css'  // 引入所需要的所有样式表
import '@/assets/css/checkout.css'
import '@/assets/css/address-pop.css'
import '@/assets/css/footer.css'
// import Shop from '@/views/Shop'
Vue.use(Router) // 确定使用vue-router模块

export default new Router({
  // mode: 'history',
  routes: [{ 
    path: '/',
    name: Shop,
    component: () => import('@/views/Shop.vue') //组件按需加载
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login.vue') //组件按需加载
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/register.vue') //组件按需加载
  },
  {
    path: '/item',
    name: 'Item',
    component: () => import('@/views/Item.vue') //组件按需加载
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/Cart.vue') //组件按需加载
  },
  {
    path: '/checkout',
    name: 'CheckOut',
    meta: {
      requireAuth: true // 当有这个字段的时候，我们就认为他这个路由页面是要有登录权限的
    },
    component: () => import('@/views/CheckOut.vue') //组件按需加载
  }
  ]
})
