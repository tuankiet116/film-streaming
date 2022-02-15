export default {
    isLoggedIn: state => {
      return state.token;
    },
    
    getUser: state => {
      return state.user;
    }
}