/**
 * 请求方法封装
 * (1) get 请求
 * (2) post 请求
 * (3) put 请求
 */
import Request from './http-request'
import Response from './http-response'

const Cookie = process.client ? require('js-cookie') : undefined

const Qs = require('qs')

/**
 * 1.get 函数，请求时参数使用 k-v
 */
function get(url, params) {
  return Request.get(
    url,
    {
      params: params,
      paramsSerializer: (params) => {
        return Qs.stringify(params, {arrayFormat: 'repeat'})
      }
    }
  )
}

function getRes(url, params, success, fail) {
  Response(
    get(url, params),
    success,
    fail
  )
}

/**
 * 服务器端异步请求数据
 * @param url
 * @param params
 * @param auth
 * @param currentInstitutePk
 * @returns {AxiosPromise<any>}
 */
function getServer(url, params, auth) {
  let config = {params}
  if (auth) {
    config.headers = {
      'Authorization': `Token ${auth}`
    }
  }
  return Request.get(
    url,
    config
  )
}

function getServerRes(url, params, auth, success, fail) {
  Response(
    getServer(url, params, auth),
    success,
    fail
  )
}


/**
 * 2.post 函数,请求时参数使用 k-v
 */
function post(url, data) {
  return Request.post(url, data)
}

function postRes(url, data, success, fail) {
  Response(
    post(url, data),
    success,
    fail
  )
}

/**
 * 3.put 函数,请求时参数使用 k-v
 */
function put(url, data) {
  return Request.put(url, data)
}

function putRes(url, data, success, fail) {
  Response(
    put(url, data),
    success,
    fail
  )
}

/**
 * 4.patch 函数,请求时参数使用 k-v
 */
function patch(url, data) {
  Request.patch(url, data)
}

function patchRes(url, data, success, fail) {
  Response(
    patch(url, data),
    success,
    fail
  )
}

/**
 * 5.delete 函数
 */
function deleteR(url) {
  return Request.delete(url)
}

function deleteRes(url, success, fail) {
  Response(
    deleteR(url),
    success,
    fail
  )
}

/**
 * 6. getAll
 */

function getAll(promise, success, fail) {
  Response(
    Request.all(promise),
    success,
    fail
  )
}

export default {
  get,
  getRes,
  getAll,
  post,
  postRes,
  put,
  putRes,
  patch,
  patchRes,
  deleteR,
  deleteRes,
  getServer,
  getServerRes
}
