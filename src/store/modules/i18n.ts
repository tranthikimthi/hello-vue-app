import { ActionTypes, MutationTypes } from "../constanst/i18n.const"
import { useI18n } from "vue-i18n";

const actions = {
    async [ActionTypes.SET_LANG]({commit}, payload) {
        commit(MutationTypes.SET_LANG, payload);
    }
}

const mutations = {
    [MutationTypes.SET_LANG](state, payload) {
        let { locale } = useI18n();
        locale = payload;
    },
}

export default {
    namespaced: true,
    actions,
    mutations
}