import Vue from 'vue'
// import Vuex from 'vuex'
import App from './App.vue'
import routes from './routes'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import VueSlickCarousel from "vue-slick-carousel";
import './assets/css/style.css'
import HeaderNavbar from './components/Header.vue'

// BootstrapVue
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

// BootstrapVue CSS files 
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "bootstrap-vue/dist/bootstrap-vue-icons.min.css";

const router = new VueRouter({
    mode: 'history',
    routes
})

// Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueMeta)
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.component("HeaderNavbar", HeaderNavbar);
Vue.component("VueSlickCarousel", VueSlickCarousel);

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    router
})





