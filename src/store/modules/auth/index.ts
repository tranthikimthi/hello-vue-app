import { authGetters } from './getters'
import { authState } from './state'
import { authMutations } from './mutations'
import { authActions } from './actions'

export default {
    namespaced: true,
    authGetters,
    authState,
    authMutations,
    authActions,
}