import axios from 'axios';

export default {
  login(credentials) {
    return axios
      .post($apiUrl.api + 'auth/login', credentials)
      .then(response => response.data);
  },
  signUp(credentials) {
    return axios
      .post($apiUrl.api + 'auth/register', credentials)
      .then(response => response.data);
  }
};