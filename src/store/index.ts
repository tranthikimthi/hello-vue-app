import { createLogger, createStore } from 'vuex'
import todos from './modules/todos/index'
import auth from './modules/auth/index'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    todos,
    auth,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
