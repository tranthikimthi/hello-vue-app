import { createLogger, createStore } from 'vuex'
import todos from './modules/todos'
import auth from './modules/auth'
import i18n from './modules/i18n'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    todos,
    auth,
    i18n,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
