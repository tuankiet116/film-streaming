import axios from 'axios'

const list = {
    namespaced: true,
    state: {
        list: []
    },
    mutations: {
        SET_LIST(state, data) {
            state.list = data
        }
    },
    actions: {
        loadList({ commit }) {
        //     const { data } = await axios.get('http://localhost:3333/films/list');

        //     if (data.result) {
        //         commit(SET_LIST, data.data);
        //     }
        //     else {

        //     }

        // return data;

            axios
                .get('http://localhost:3333/films/list')
                .then(res => {
                    commit('SET_LIST', res.data)
                })
                .catch(error => console.log(error))
        }
    }
}

export default list