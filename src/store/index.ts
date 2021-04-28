import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// define your typings for the store state
export interface State {
    user?: any;
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        user: undefined
    },
    mutations: {
        updateUser (state: State, data) {
            state.user = data
        }
    }
})
