import { ActionContext, ActionTree } from 'vuex'
import { Mutations, MutationType } from './mutations'
import { State } from './state'
import axios from "axios";
import { TodoItem } from "./state";

export enum ActionTypes {
    GetTodoItems = 'GET_ITEMS',
    AddItem = 'ADD_ITEM',
    DeleteItem = 'DELETE_ITEM',
}

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
}

type Actions = {
    [ActionTypes.GetTodoItems](Context: ActionAugments): void,
    [ActionTypes.AddItem](Context: ActionAugments, item: TodoItem): void,
    [ActionTypes.DeleteItem](Context: ActionAugments, id: number): void,
}

export const actions: ActionTree<State, State> & Actions = {
    async [ActionTypes.GetTodoItems]({ commit }) {
        commit(MutationType.SetLoading, true);
        const getAllTodos = async () => {
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10");
                commit(MutationType.SetItems, res.data)
            } catch (error) {
                console.log(error);
            }
        };
        await getAllTodos();
        await commit(MutationType.SetLoading, false)
    },
    async [ActionTypes.AddItem]({ commit }, item) {
        try {
            const res = await axios.post("https://jsonplaceholder.typicode.com/todos", item);
            commit(MutationType.CreateItem, res.data);
        } catch (error) {
            console.log(error);
        }
    },
    async [ActionTypes.DeleteItem]({ commit }, id) {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
            commit(MutationType.DeleteItem, id);
        } catch (error) {
            console.log(error);
        }
    },
}
