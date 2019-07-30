/* eslint-disable no-undef */
import Vue from 'vue' // 导入vue模块
import Router from 'vue-router' //  导入vue-router模块
import '@/assets/css/reset.css' // 引入所需要的所有样式表
import '@/assets/css/header.css'
import '@/assets/css/goodsList.css'
import '@/assets/css/prompt.css'
import '@/assets/css/item.css'
import '@/assets/css/cart.css'
import '@/assets/css/checkout.css'
import '@/assets/css/address-pop.css'
import '@/assets/css/footer.css'
import Shop from '@/views/Shop'
Vue.use(Router) // 确定使用vue-router模块

export default new Router({
  // mode: 'history',
  routes: [{
    path: '/',
    name: Shop,
    component: () => import('@/views/Shop.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/register.vue')
  },
  {
    path: '/item',
    name: 'Item',
    component: () => import('@/views/Item.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/Cart.vue')
  },
  {
    path: '/checkout',
    name: 'CheckOut',
    meta: {
      requireAuth: true // 当有这个字段的时候，我们就认为他这个路由页面是要有登录权限的
    },
    component: () => import('@/views/CheckOut.vue')
  }
  ]
})
