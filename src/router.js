import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from './views/AboutView.vue'
import InfoView from './views/InformationView.vue'
import ContactView from './views/ContactView.vue'
import AllReceptsView from './views/AllReceptsView.vue'
import FavoriteReceptsView from './views/MyFavoriteReceptsView.vue'
import ReceptView from './views/ReceptView.vue'
import GamesView from './views/GamesView.vue'
import HomeView from './views/HomeView.vue'
import PlayReceptView from './views/PlayReceptView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: InfoView,
      path: '/information',
      name: 'Info',
    },
    {
      component: ContactView,
      path: '/contact',
      name: 'Contact',
    },
    {
      component: AboutView,
      path: '/about',
      name: 'About',
    },
    {
      component: GamesView,
      path: '/games',
      name: 'Games',
    },
    {
      component: FavoriteReceptsView,
      path: '/myrecepts',
      name: 'MyFavoriteRecepts',
    },
    {
      component: ReceptView,
      path: '/recepts/:receptId', // Dynamic page ':receptId'
      name: 'Recept',
      children: [{ path: ':step', component: PlayReceptView }],
    },

    {
      component: AllReceptsView,
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
