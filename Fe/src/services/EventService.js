import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  header: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getMenu() {
    return apiClient.get("/menu");
  },
  getFooter() {
    return apiClient.get("/footerMenu");
  },
  getSlickHome() {
    return apiClient.get("/slickItems");
  },
  getFilmList() {
    return apiClient.get("/filmList");
  },
  getNewFilmList() {
    return apiClient.get("/newFilmList");
  },
};
