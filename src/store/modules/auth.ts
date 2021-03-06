import router from "@/router"
import firebase from "firebase"
import { ActionTypes, MutationTypes } from "../constanst/auth.const"

const state = {
    user: {
        loggedIn: false,
        data: {}
    },
    loginError: null,
    registerError: null,
}

const getters = {
    user(state) {
        return state.user
    }
}

const actions = {
    async [ActionTypes.REGISTER]({ commit }, user) {
        commit(MutationTypes.REGISTER, user);
    },
    async [ActionTypes.FETCH_USER]({ commit }, user) {
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
    async [ActionTypes.LOGIN]({ commit }, user) {
        commit(MutationTypes.LOGIN, user);
    },
    async [ActionTypes.SIGN_OUT]({ commit }) {
        commit(MutationTypes.SIGN_OUT);
    },
}

const mutations = {
    [MutationTypes.REGISTER](state, user) {
        firebase
            .auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(data => {
                data.user
                    .updateProfile({
                        displayName: user.name
                    })
                    .then(() => {
                        router.replace({ name: "Home" });
                    });
            })
            .catch(err => {
                state.registerError = err.message;
            });
    },
    [MutationTypes.LOGIN](state, user) {
        firebase
            .auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then(() => {
                router.replace({ name: "Home" });
            })
            .catch((err) => {
                state.loginError = err.message;
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
                router.replace({ name: "Home" });
            });
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}