import axios from "axios"
import { ActionTypes, MutationTypes } from "@/store/constanst/todos.const"

// initial state
const state = {
    loading: false,
    items: [],
}

// getters
const getters = {
    completedCount(state) {
        return state.items.filter(i => i.completed).length
    },
    totalCount(state) {
        return state.items.length
    }
}

// actions
const actions = {
    async [ActionTypes.GET_ITEMS]({ commit }) {
        commit(MutationTypes.SET_LOADING, true);
        const getAllTodos = async () => {
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10");
                commit(MutationTypes.SET_ITEMS, res.data)
            } catch (error) {
                console.log(error);
            }
        };
        await getAllTodos();
        await commit(MutationTypes.SET_LOADING, false)
    },
    async [ActionTypes.ADD_ITEM]({ commit }, item) {
        try {
            const res = await axios.post("https://jsonplaceholder.typicode.com/todos", item);
            commit(MutationTypes.CREATE_ITEM, res.data);
        } catch (error) {
            console.log(error);
        }
    },
    async [ActionTypes.DELETE_ITEM]({ commit }, id) {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
            commit(MutationTypes.DELETE_ITEM, id);
        } catch (error) {
            console.log(error);
        }
    },
}

// mutations
const mutations = {
    [MutationTypes.CREATE_ITEM](state, item) {
        state.items.unshift(item)
    },
    [MutationTypes.SET_ITEMS](state, items) {
        state.items = items
    },
    [MutationTypes.COMPLETE_ITEM](state, newItem) {
        const item = state.items.findIndex(s => s.id === newItem.id);
        if (item === -1) return;
        state.items[item] = { ...state.items[item], ...newItem }
    },
    [MutationTypes.DELETE_ITEM](state, id) {
        const taskIndex: number = state.items.findIndex(item => item.id == id)
        taskIndex > -1 ? state.items.splice(taskIndex, 1) : new Error('Invalid index');
    },
    [MutationTypes.SET_LOADING](state, value) {
        state.loading = value
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}