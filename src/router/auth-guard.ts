import store from '@/store'

export default (to, from, next) => {
    if (store.getters[`auth/user`].loggedIn) {
        next()
    } else {
        next('/login')
    }
}