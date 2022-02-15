export default {
  setNavbar: (state, navbar) => {
    state.navbar = navbar;
  },

  setList: (state, list) => {
    state.list = list;
  },

  setSlide: (state, slide) => {
    state.slide = slide;
  },

  setListByType: (state, listByType) => {
    state.listByType = listByType;
  },

  setDetail: (state, detail) => {
    state.detail = detail;
  },

  ////////// LOGIN & REGISTER //////////

  setToken: (state, token) => {
    state.token = token;
  },

  setUser: (state, user) => {
    state.user = user;
  },

  resetAuth: state => {
    state.token = '';
  },
  setTokenAdmin: (state, token) => {
    state.token = token;
  }
};