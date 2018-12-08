import Http from './core/http'

/**
 * 数据
 * @type {{permission: string[], request: tagApplicatorList.request}}
 */
export const getReadingList = {
  request: (data, auth) =>
    Http.getServer('/reading/', data, auth)
}
/**
 * 用户信息
 * @type {{permission: string[], request: tagApplicatorList.request}}
 */
export const userInfo = {
  request: (auth) =>
    Http.getServer('/users/my-info/', {}, auth)
}
