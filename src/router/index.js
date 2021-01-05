import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home')
  },
  {
    path: '/vita',
    name: 'vita',
    component: () => import('@/views/Vita')
  }
]

const router = new VueRouter({
  routes
})

export default router
