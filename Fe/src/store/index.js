import Vuex from 'vuex'
// import list from './modules/list'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions';

export default {
    strict: true,
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
}