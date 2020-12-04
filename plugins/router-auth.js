export default function ({ store, redirect, route }) {
  if (isLogin(store) && route.name === 'login') {
    return redirect('/projects')
  }
  if (isLogin(store) && isAdminRoute(route)) {
    return redirect('/login')
  }
}
const isLogin = (store) => {
  return store && store.state.user
}
const isAdminRoute = (route) => {
  if (route.matched.some((record) => record.path === '/projects')) {
    return true
  }
}
