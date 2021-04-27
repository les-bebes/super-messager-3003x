import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// define your typings for the store state
export interface State {
    token: string;
    user: string;
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        token: "",
        user: ""
    },
    mutations: {
        updateUser (state: State, data) {
            state.token = data.token
            state.user = data.user
        }
    }
})
