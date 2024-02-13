import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from './views/AboutView.vue'
import MarvelView from './views/MarvelView.vue'
import HomeView from './views/HomeView.vue'
import MarvelCharacterView from './views/MarvelCharacterView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: MarvelCharacterView,
      path: '/marvel/:characterId', // Dynamic page ':characterId'
      name: 'MarvelCharacter',
    },
    {
      component: AboutView,
      path: '/about',
      name: 'About',
    },
    {
      component: MarvelView,
      path: '/marvel',
      name: 'Marvel',
    },
    {
      component: HomeView,
      path: '/',
      name: 'Home',
    },
  ],
})
