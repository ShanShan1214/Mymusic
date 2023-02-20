// 导入axios
import axios from 'axios'
// 配置请求的基准URL地址
axios.defaults.baseURL = process.env.VUE_APP_URL
const service = axios.create({
  baseURL: process.env.VUE_APP_URL
})
// axios设置请求拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  err => {
    console.log(err)
  }
)
// 响应拦截
service.interceptors.response.use(
  res => {
    return res
  },
  error => {
    return Promise.reject(error)
  }
)
// 暴露出去
export default service