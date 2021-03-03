import { getters } from './getters'
import { state } from './state'
import { mutations } from './mutations'
import { actions } from './actions'

export default {
    namespaced: true,
    getters,
    state,
    mutations,
    actions,
}