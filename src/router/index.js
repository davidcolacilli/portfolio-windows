import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UX from '../views/UX.vue'
import Dev from '../views/Dev.vue'
import Design from '../views/Design.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/ux',
    name: 'UX',
    component: UX
  },
  {
    path: '/dev',
    name: 'Dev',
    component: Dev
  },
  {
    path: '/design',
    name: 'Design',
    component: Design
  }
]

const router = new VueRouter({
  routes
})

export default router
