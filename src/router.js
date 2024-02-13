import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from './views/AboutView.vue'
import ReceptsView from './views/ReceptsView.vue'
import HomeView from './views/HomeView.vue'
import MarvelCharacterView from './views/MarvelCharacterView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: AboutView,
      path: '/about',
      name: 'About',
    },
    {
      component: MarvelCharacterView,
      path: '/recepts/:receptId', // Dynamic page ':characterId'
      name: 'Recept',
    },

    {
      component: ReceptsView,
      path: '/recepts',
      name: 'Recepts',
    },
    {
      component: HomeView,
      path: '/',
      name: 'Home',
    },
  ],
})
