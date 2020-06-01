import axios from 'axios'
// 定义默认请求地址
axios.defaults.baseURL = 'http://www.chst.vip:1901'
// axios.defaults.baseURL = '/api'
// 登陆
export const login = (data) => axios({
  method: 'post',
  url: '/users/login',
  data,
  timeout: 5000//请求时长为5秒钟,超过之后,进入到reject状态
})



