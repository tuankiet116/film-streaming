import VueRouter from 'vue-router';
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import List from "../views/List.vue";
import FilmDetail from "../views/Film_detail.vue";
import DashBoard from "../admin/Dashboard.vue";
import AdminFilms from "../admin/Films.vue";
import AdminFilmType from "../admin/Type.vue";
import AdminLogin from "../admin/Login.vue";
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
  },
  {
    path: "/admin",
    name: "Admin",
    component: DashBoard,
    meta: {
      title: "Admin | Xem phim trực tuyến",
      metaTags: [
        {
          name: "description",
          content: "Hệ thống admin trang xem phim trực tuyến"
        },
        {
          property: "og:description",
          content: "Hệ thống admin trang xem phim trực tuyến"
        }
      ]
    }
  },
  {
    path: "/admin/films",
    name: "AdminFilms",
    component: AdminFilms,
    meta: {
      title: "Quản lý phim | Admin | Xem phim trực tuyến",
      metaTags: [
        {
          name: "description",
          content: "Hệ thống quản lý phim trang admin xem phim trực tuyến"
        },
        {
          property: "og:description",
          content: "Hệ thống quản lý phim trang admin xem phim trực tuyến"
        }
      ]
    }
  },
  {
    path: "/admin/type",
    name: "AdminFilmType",
    component: AdminFilmType,
    meta: {
      title: "Quản lý thể loại | Admin | Xem phim trực tuyến",
      metaTags: [
        {
          name: "description",
          content:
            "Hệ thống quản lý thể loại phim trang admin xem phim trực tuyến"
        },
        {
          property: "og:description",
          content:
            "Hệ thống quản lý thể loại phim trang admin xem phim trực tuyến"
        }
      ]
    }
  },
  {
    path: "/admin/login",
    name: "AdminLogin",
    component: AdminLogin,
    meta: {
      title: "Đăng nhập | Admin | Xem phim trực tuyến",
      metaTags: [
        {
          name: "description",
          content: "Hệ thống đăng nhập trang admin xem phim trực tuyến"
        },
        {
          property: "og:description",
          content: "Hệ thống đăng nhập trang admin xem phim trực tuyến"
        }
      ]
    }
  }
];

export default routes;
