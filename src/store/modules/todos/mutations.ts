import { MutationTree } from 'vuex'
import { State, TodoItem } from './state'

export enum MutationType {
    CREATE_ITEM = 'CREATE_ITEM',
    SET_ITEMS = "SET_ITEMS",
    COMPLETE_ITEM = "COMPLETE_ITEM",
    DELETE_ITEM = "DELETE_ITEM",
    SET_LOADING = "SET_LOADING"
}

export type Mutations = {
    [MutationType.CREATE_ITEM](state: State, item: TodoItem): void,
    [MutationType.SET_ITEMS](state: State, items: TodoItem[]): void,
    [MutationType.COMPLETE_ITEM](state: State, item: Partial<TodoItem> & { id: number }): void,
    [MutationType.DELETE_ITEM](state: State, id: Number): void,
    [MutationType.SET_LOADING](state: State, value: boolean): void
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationType.CREATE_ITEM](state, item) {
        state.items.unshift(item)
    },
    [MutationType.SET_ITEMS](state, items) {
        state.items = items
    },
    [MutationType.COMPLETE_ITEM](state, newItem) {
        const item = state.items.findIndex(s => s.id === newItem.id);
        if (item === -1) return;
        state.items[item] = { ...state.items[item], ...newItem }
    },
    [MutationType.DELETE_ITEM](state: State, id: number) {
        let taskIndex: number = state.items.findIndex(item => item.id == id)
        taskIndex > -1 ? state.items.splice(taskIndex, 1) : new Error('Invalid index');
    },
    [MutationType.SET_LOADING](state, value) {
        state.loading = value
    }
}
