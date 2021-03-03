import { MutationTree } from 'vuex'
import { State } from './state'

export enum MutationType {
    SET_LOGGED_IN = 'SET_LOGGED_IN',
    SET_USER = "SET_USER",
}

export const authMutations: MutationTree<State> = {
    [MutationType.SET_LOGGED_IN](state, value) {
        state.user.loggedIn = value;
    },
    [MutationType.SET_USER](state, data) {
        state.user.data = data;
    }
}