import VueRouter from 'vue-router';
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import List from "../views/List.vue";
import FilmDetail from "../views/Film_detail.vue";
import Vue from 'vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Trang chủ | Xem phim trực tuyến",
      metaTags: [
        {
          name: "description",
          content: "Trang chủ trang xem phim trực tuyến"
        },
        {
          property: "og:description",
          content: "Trang chủ trang xem phim trực tuyến"
        }
      ]
    }
  },
  {
    path: "/dang-nhap",
    name: "Login",
    component: Login,
    meta: {
      title: "Đăng nhập | Xem phim trực tuyến",
      metaTags: [
        {
          name: "description",
          content: "Hệ thống đăng nhập trang xem phim trực tuyến"
        },
        {
          property: "og:description",
          content: "Hệ thống đăng nhập trang xem phim trực tuyến"
        }
      ]
    }
  },
  {
    path: "/dang-ky",
    name: "Register",
    component: Register,
    meta: {
      title: "Đăng ký | Xem phim trực tuyến",
      metaTags: [
        {
          name: "description",
          content: "Hệ thống đăng ký trang xem phim trực tuyến"
        },
        {
          property: "og:description",
          content: "Hệ thống đăng ký trang xem phim trực tuyến"
        }
      ]
    }
  },
  {
    path: "/phim/:title",
    name: "Films",
    component: List,
    props: true,
    meta: {
      title: "Danh sách phim | Xem phim trực tuyến",
      metaTags: [
        {
          name: "description",
          content: "Hệ thống danh sách trang xem phim trực tuyến"
        },
        {
          property: "og:description",
          content: "Hệ thống danh sách trang xem phim trực tuyến"
        }
      ]
    }
  },
  {
    path: "/phim/:title/:filmDetail",
    name: "Detail",
    component: FilmDetail,
    props: true,
    meta: {
      title: "Chi tiết phim | Xem phim trực tuyến",
      metaTags: [
        {
          name: "description",
          content: "Hệ thống chi tiết trang xem phim trực tuyến"
        },
        {
          property: "og:description",
          content: "Hệ thống chi tiết trang xem phim trực tuyến"
        }
      ]
    }
  }
];

export default routes;
