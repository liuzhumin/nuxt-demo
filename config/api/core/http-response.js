/**
 * 数据响应统一处理操作
 **/

function response (promiss, success, fail) {
  // response 拦截器
  promiss.then(res => {
    success(res)
  }).catch(error => {
    // 请求失败处理
    console.log(error)
    if (fail) {
      fail(error)
    }
  })
}

export default response
