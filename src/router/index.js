import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'films',
    component: () => import('../views/films.vue')
  },
  {
    path: '/films',
    name: 'films',
    component: () => import('../views/films.vue')
  },
  {
    path: '/series',
    name: 'series',
    component: () => import('../views/series.vue')
  },
  {
    path: '/recherche',
    name: 'recherche',
    component: () => import('../views/recherche.vue')
  },
  {
    path: '/favoris',
    name: 'favoris',
    component: () => import('../views/favoris.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
