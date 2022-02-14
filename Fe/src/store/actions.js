import axios from "axios";

export default {
  getNavbar: ({ commit }) => {
    axios.get("http://localhost:3333/type/list").then(response => {
      commit("setNavbar", response.data);
    });
  },

  getList: ({ commit }) => {
    axios.get("http://localhost:3333/films/list").then(response => {
      commit("setList", response.data);
    });
  },

  getSlide: ({ commit }) => {
    axios.get("http://localhost:3333/films/films-by-type/1").then(response => {
      commit("setSlide", response.data);
    });
  },

  getListByType: ({ commit }, listByTypeID) => {
    axios.get(`http://localhost:3333/films/films-by-type/${listByTypeID}`).then(response => {
      commit("setListByType", response.data);
    });
  },

  getDetail: ({ commit }, detail) => {
    axios.get(`http://localhost:3333/films/film-information/${detail}`).then(response => {
      commit("setDetail", response.data);
    });
  },

  getStream: ({ commit }, stream) => {
    axios.get(`http://localhost:3333/films/film-information/${detail}`).then(response => {
      commit("setDetail", response.data);
    });
  }
};
