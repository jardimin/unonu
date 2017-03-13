import "babel-polyfill";
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'

Vue.use(VueRouter)

import App from './App.vue'
import Home from './views/home-view.vue'
import Profile from './views/profile-view.vue'

import Login from './views/login-view.vue'


const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home},
  { path: '/login', component: Login },
  { path: '/profile', component: Profile },
  { path: '*', redirect: '/home' }
]

const router = new VueRouter({
  routes // short for routes: routes
})

const app = new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')


