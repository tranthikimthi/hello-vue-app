import router from "@/router"
import firebase from "firebase"
import { ActionTypes, MutationTypes } from "../constanst/auth.const"

const state = {
    user: {
        loggedIn: false,
        data: {}
    },
    error: null,
}

const getters = {
    user(state) {
        return state.user
    }
}

const actions = {
    [ActionTypes.FETCH_USER]({ commit }, user) {
        commit(MutationTypes.SET_LOGGED_IN, user !== null);
        if (user) {
            commit(MutationTypes.SET_USER, {
                displayName: user.displayName,
                email: user.email
            });
        } else {
            commit(MutationTypes.SET_USER, null);
        }
    },
    [ActionTypes.LOGIN]({ commit }, user) {
        commit(MutationTypes.LOGIN, user);
    },
    [ActionTypes.SIGN_OUT]({ commit }) {
        commit(MutationTypes.SIGN_OUT);
    },
}

const mutations = {
    [MutationTypes.LOGIN](state, user) {
        firebase
            .auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then(() => {
                router.replace({ name: "Home" });
            })
            .catch((err) => {
                state.error = err.message;
            });
    },
    [MutationTypes.SET_LOGGED_IN](state, value) {
        state.user.loggedIn = value;
    },
    [MutationTypes.SET_USER](state, data) {
        state.user.data = data;
    },
    [MutationTypes.SIGN_OUT]() {
        firebase
            .auth()
            .signOut()
            .then(() => {
                router.replace({ name: "home" });
            });
    },
    [MutationTypes.GET_ERROR](state, error) {
        state.error = error;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}