import { GetterTree } from "vuex"
import { State } from './state'

export const authGetters: GetterTree<State, State> = {
    user(state) {
        return state.user
    }
}