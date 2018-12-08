import Vuex from 'vuex'

const cookieparser = process.server ? require('cookieparser') : undefined


import {Service} from '@/config/api'

const createStore = () => {
  return new Vuex.Store({
    state: {
      auth: null,
      userInfo: null,
      lang: 'zh',
    },
    mutations: {
      setAuth(state, auth) {
        state.auth = auth
      },
      setUser: function (state, user) {
        state.userInfo = user
      },
      setLang(state, lang) {
        state.lang = lang
      },
      resetState(state) {
        state.auth = null
        state.userInfo = null
      }
    },
    actions: {
      /**
       * nuxt 初始化
       * @param commit
       * @param req
       */
      nuxtServerInit({commit, state}, {req}) {
        console.log('nuxt init')
        console.log(req.headers.cookie)
        let auth = null
        if (req.headers.cookie) {
          const parsed = cookieparser.parse(req.headers.cookie)
          try {
            auth = JSON.parse(parsed.auth)
          } catch (err) {
            // No valid cookie found
          }
          commit('setAuth', auth)
        }
      },
      /**
       * 获取用户信息
       * @param state
       * @param commit
       * @returns {Promise<void>}
       */
      async getUserInfo({state, commit}) {
        if (state.userInfo) {
          return
        }
        const {data} = await Service.userInfo.request(state.auth)
        commit('setUser', data)
      },
    }
  })
}

export default createStore
