import { MutationTree } from 'vuex'
import { State, TodoItem } from './state'

export enum MutationType {
    CreateItem = 'CREATE_ITEM',
    SetItems = "SET_ITEMS",
    CompleteItem = "COMPLETE_ITEM",
    DeleteItem = "DELETE_ITEM",
    SetLoading = "SET_LOADING"
}

export type Mutations = {
    [MutationType.CreateItem](state: State, item: TodoItem): void,
    [MutationType.SetItems](state: State, items: TodoItem[]): void,
    [MutationType.CompleteItem](state: State, item: Partial<TodoItem> & { id: number }): void,
    [MutationType.DeleteItem](state: State, id: Number): void,
    [MutationType.SetLoading](state: State, value: boolean): void
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationType.CreateItem](state, item) {
        state.items.unshift(item)
    },
    [MutationType.SetItems](state, items) {
        state.items = items
    },
    [MutationType.CompleteItem](state, newItem) {
        const item = state.items.findIndex(s => s.id === newItem.id);
        if (item === -1) return;
        state.items[item] = { ...state.items[item], ...newItem }
    },
    [MutationType.DeleteItem](state: State, id: number) {
        let taskIndex: number = state.items.findIndex(item => item.id == id)
        taskIndex > -1 ? state.items.splice(taskIndex, 1) : new Error('Invalid index');
    },
    [MutationType.SetLoading](state, value) {
        state.loading = value
    }
}
