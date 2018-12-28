import Vuex from 'vuex'

export default new Vuex.Store({
    state: {
        value: null
    },
    mutations: {
        update (state, value) {
            state.value = value;
        }
    }
});
