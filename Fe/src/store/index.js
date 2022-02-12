import Vue from 'Vue'
import Vuex from 'vuex'
// import list from './modules/list'

Vue.use(Vuex)

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions';

export default new Vuex.Store({
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
})

// export default new Vuex.Store({
//     modules: {
//         list
//     }
// })