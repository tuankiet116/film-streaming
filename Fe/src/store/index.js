import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
// import list from './modules/list'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions';

export default {
    strict: true,
    plugins: [createPersistedState()],
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
}