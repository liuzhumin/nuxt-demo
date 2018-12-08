import getCookie from '@/config/get-cookie'

export default function ({store, route, redirect, req}) {
  // If the user is not authenticated
  const {auth} = getCookie(req)
  console.log('middle')
  console.log(auth)
  if (auth) {
    store.commit('setAuth', auth)
    return store.dispatch('getUserInfo')
  }
  const routePath = route.path
  const extraPath = ['/', '/en']
  if ((!store.state.auth) && extraPath.indexOf(routePath) === -1) {
    return redirect('/')
  }
}
