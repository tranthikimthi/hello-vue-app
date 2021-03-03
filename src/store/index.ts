import { createLogger, createStore } from 'vuex'
import todos from './modules/todos/index'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    todos,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
