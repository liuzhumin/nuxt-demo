/**
 * token 拦截器
 * axios request interceptor
 */
import InterceptorRequest from './interceptor-request'
import store from '@/store'

const Cookie = process.client ? require('js-cookie') : undefined

class InterceptorToken extends InterceptorRequest {
  constructor(axios) {
    super(axios)
  }

  requestConfig(config) {
    if (process.server) {
      return config
    }
    if (Cookie) {
      let token = Cookie.get('auth')
      // console.log(token)
      if (token) {
        config.headers = {
          'Authorization': `Token ${token}`
        }
      }
    }
    return config
  }
}

export default InterceptorToken
