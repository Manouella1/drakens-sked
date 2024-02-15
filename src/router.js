import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from './views/AboutView.vue'
import InfoView from './views/InformationView.vue'
import ContactView from './views/ContactView.vue'
import ReceptsView from './views/AllReceptsView.vue'
import MyFavoriteReceptsView from './views/MyFavoriteReceptsView.vue'
import ReceptView from './views/ReceptsView.vue'
import GamesView from './views/GamesView.vue'
import IntroView from './views/IntroView.vue'
import HomeView from './views/HomeView.vue'

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
      component: MyFavoriteReceptsView,
      path: '/myrecepts',
      name: 'MyFavoriteRecepts',
    },
    {
      component: ReceptView,
      path: '/recepts/:receptId', // Dynamic page ':characterId'
      name: 'Recept',
    },

    {
      component: ReceptsView,
      path: '/recepts',
      name: 'Recepts',
    },
    {
      component: IntroView,
      path: '/intro',
      name: 'Intro',
    },
    {
      component: HomeView,
      path: '/',
      name: 'Home',
    },
  ],
})
