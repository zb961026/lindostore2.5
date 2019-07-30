import axios from 'axios'
import store from './store'
import router from './router'

// http全局拦截
// token放在header上面
export default function setAxios () {
  axios.interceptors.request.use(
    config => {
      if (store.state.token) {
        config.headers.token = store.state.token
      }
      return config
    }
  )
  axios.interceptors.response.use(
    response => {
      if (response.status==200) {
        const data = response.data
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
