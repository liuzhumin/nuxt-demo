class InterceptorRequest {
  constructor (axios) {
    this.axios = axios
  }
  
  executeInterceptor () {
    const interceptor = this.axios.interceptors.request.use((config) => {
      return this.requestConfig(config)
    }, (error) => {
      return this.requestError(error)
    })
    this.interceptor = interceptor
  }
  
  requestConfig (config) {
    return config
  }
  
  requestError (error) {
    return Promise.reject(error)
  }
  
  ejectInterceptor () {
    this.axios.interceptors.request.eject(this.interceptor)
  }
}

export default InterceptorRequest
