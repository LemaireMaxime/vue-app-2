import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/profil.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'profil',
    component: () => import('../views/profil.vue')
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
  {
    path: '/vues',
    name: 'vues',
    component: () => import('../views/dejaVue.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
