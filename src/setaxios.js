import axios from 'axios' //引入axios模块
import store from './store' //引入store文件
import router from './router' //引入router文件夹

// http全局拦截
// token放在header上面
export default function setAxios () {
  axios.interceptors.request.use( //请求拦截器
    config => {
      if (store.state.token) { //把token放在header上面
        config.headers.token = store.state.token
      }
      return config
    }
  )
  axios.interceptors.response.use( //使用判断响应
    response => {
      if (response.status==200) { //判断状态码
        const data = response.data //获取后台数据
        if (data.code == -1) {
          // 登录过期，需要重新登录，清空vuex和local的token
          store.commit('settoken', '')
          localStorage.removeItem('token')
          // 跳转到login页面
          router.replace({path: '/login'})
        }
        return data 
      }
      return response
    }
  )
}
