import { ActionContext, ActionTree } from 'vuex'
import { Mutations, MutationType } from './mutations'
import { State } from './state'
import axios from "axios";
import { TodoItem } from "./state";

export enum ActionTypes {
    GET_ITEMS = 'GET_ITEMS',
    ADD_ITEM = 'ADD_ITEM',
    DELETE_ITEM = 'DELETE_ITEM',
}

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
}

type Actions = {
    [ActionTypes.GET_ITEMS](Context: ActionAugments): void,
    [ActionTypes.ADD_ITEM](Context: ActionAugments, item: TodoItem): void,
    [ActionTypes.DELETE_ITEM](Context: ActionAugments, id: number): void,
}

export const actions: ActionTree<State, State> & Actions = {
    async [ActionTypes.GET_ITEMS]({ commit }) {
        commit(MutationType.SET_LOADING, true);
        const getAllTodos = async () => {
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10");
                commit(MutationType.SET_ITEMS, res.data)
            } catch (error) {
                console.log(error);
            }
        };
        await getAllTodos();
        await commit(MutationType.SET_LOADING, false)
    },
    async [ActionTypes.ADD_ITEM]({ commit }, item) {
        try {
            const res = await axios.post("https://jsonplaceholder.typicode.com/todos", item);
            commit(MutationType.CREATE_ITEM, res.data);
        } catch (error) {
            console.log(error);
        }
    },
    async [ActionTypes.DELETE_ITEM]({ commit }, id) {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
            commit(MutationType.DELETE_ITEM, id);
        } catch (error) {
            console.log(error);
        }
    },
}
