import axios from "axios";

export default {
  getList: ({ commit }) => {
    axios.get("http://localhost:3333/films/list").then(response => {
      commit("setList", response.data);
    });
  }
};
