/**
 * 数据请求配置
 * (1) 请求对象 axios
 * (2) request 拦截器 - token
 */
import Axios from 'axios'
import InterceptorToken from './interceptors/interceptor-token'

Axios.defaults.baseURL = process.env.baseUrl
Axios.defaults.headers.post['Content-Type'] = 'application/json'

// request-token 拦截器
let tokenInterceptor = new InterceptorToken(Axios)
tokenInterceptor.executeInterceptor()

export default Axios
