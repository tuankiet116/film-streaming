import Vue from 'vue'
// import Vuex from 'vuex'
import App from './App.vue'
import routes from './routes'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import './assets/css/style.css'
import HeaderNavbar from './modules/components/Header.vue'

// BootstrapVue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// BootstrapVue CSS files 
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

const router = new VueRouter({
    mode: 'history',
    routes
})

// Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueMeta)
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component("HeaderNavbar", HeaderNavbar);
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    router
})





