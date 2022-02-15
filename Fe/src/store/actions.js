import axios from "axios";
import { API_URL } from "../constant/api";

export default {
  getNavbar: ({ commit }) => {
    axios.get(`${API_URL}type/list`).then(response => {
      commit("setNavbar", response.data);
    });
  },

  getList: ({ commit }) => {
    axios.get(`${API_URL}films/list`).then(response => {
      commit("setList", response.data);
    });
  },

  getSlide: ({ commit }) => {
    axios.get(`${API_URL}films/films-by-type/1`).then(response => {
      commit("setSlide", response.data);
    });
  },

  getListByType: ({ commit }, listByTypeID) => {
    axios.get(`${API_URL}films/films-by-type/${listByTypeID}`).then(response => {
      commit("setListByType", response.data);
    });
  },

  getDetail: ({ commit }, detail) => {
    axios.get(`${API_URL}films/film-information/${detail}`).then(response => {
      commit("setDetail", response.data);
    });
  },

  getStream: ({ commit }, stream) => {
    axios.get(`${API_URL}films/film-information/${detail}`).then(response => {
      commit("setDetail", response.data);
    });
  },

  login: ({ commit }, token) => {
    commit('setToken', token);
    // set auth header
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },

  logout: ({ commit }) => {
    commit('resetAuth');
    delete axios.defaults.headers.common['Authorization'];
  },
  setTokenAdmin: ({commit}, token) => {
    commit('setTokenAdmin', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
};
