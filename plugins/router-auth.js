export default function ({ store, redirect, route }) {
  if (isLogin(store) && route.name === 'login') {
    return redirect('/projects')
  }
}
const isLogin = (store) => {
  return store && store.state.user
}
