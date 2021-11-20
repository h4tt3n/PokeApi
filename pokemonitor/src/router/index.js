import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Pokemons from '../views/Pokemons.vue'
import PokemonDetails from '../views/PokemonDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/pokemons',
    name: 'Pokemons',
    component: Pokemons
  },
  {
    path: '/pokemons/:id',
    name: 'PokemonDetails',
    component: PokemonDetails,
    props: true
  },
  // catch-all 404 errors
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
