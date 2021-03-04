import { createLogger, createStore } from 'vuex'
import todos from './modules/todos'
import auth from './modules/auth'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    todos,
    auth,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
