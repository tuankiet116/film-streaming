import axios from 'axios';
import { API_URL } from '../constant/api'

export default {
  login(credentials) {
    return axios
      .post(API_URL + 'auth/login', credentials)
      .then(response => response.data);
  },
  signUp(credentials) {
    return axios
      .post(API_URL + 'auth/register', credentials)
      .then(response => response.data);
  }
};