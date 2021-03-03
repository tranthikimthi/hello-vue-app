import { ActionTree } from 'vuex'
import { MutationType } from './mutations';
import { State } from './state'

export enum ActionTypes {
    FETCH_USER = 'FETCH_USER',
}

export const authActions: ActionTree<State, State> = {
    async [ActionTypes.FETCH_USER]({ commit }, user) {
        await commit(MutationType.SET_LOGGED_IN, user !== null);

        if (user) {
            await commit(MutationType.SET_USER, {
                displayName: user.displayName,
                email: user.email
            });
        } else {
            await commit(MutationType.SET_USER, null);
        }
    }
}
