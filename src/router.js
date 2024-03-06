import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from './views/AboutView.vue'
import Intro from './components/intro.vue'
import InfoView from './views/InformationView.vue'
import ContactView from './views/ContactView.vue'
import AllReceptsView from './views/AllReceptsView.vue'
import ReceptView from './views/ReceptView.vue'
import GamesView from './views/GamesView.vue'
import HomeView from './views/HomeView.vue'
import PlayReceptView from './views/PlayReceptView.vue'
import MyFavoriteReceptsView from './views/MyFavoriteReceptsView.vue'
import QuizView from './views/QuizView.vue'
import IntroQuizView from './views/IntroQuizView.vue'

// import PlayDemoView from './views/PlayDemoView.vue'
import MemoryGameView from './views/MemoryGameView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: MemoryGameView,
      path: '/games/memory',
      name: 'Memory'
    },

    // {
    //   component: PlayDemoView,
    //   path: '/recepts/:id/:step',
    //   name: 'Demo'
    // },
    {
      component: Intro,
      path: '/intro',
      name: 'Intro'
    },
    {
      component: InfoView,
      path: '/information',
      name: 'Info'
    },
    {
      component: ContactView,
      path: '/contact',
      name: 'Contact'
    },
    {
      component: AboutView,
      path: '/about',
      name: 'About'
    },
    {
      component: GamesView,
      path: '/games',
      name: 'Games'
    },
    {
      component: MyFavoriteReceptsView,
      path: '/myrecepts',
      name: 'MyFavoriteRecepts'
    },
    {
      component: ReceptView,
      path: '/recepts/:receptId', // Dynamic page ':receptId'
      name: 'Recept',
      children: [
        { path: ':step', component: PlayReceptView, name: 'PlayReceptView' }
      ]
    },
    {
      component: QuizView,
      path: '/games/quiz',
      name: 'Quiz'
    },
    {
      component: IntroQuizView,
      path: '/games/intro-quiz',
      name: 'IntroQuiz'
    },

    {
      component: AllReceptsView,
      path: '/recepts',
      name: 'Recepts'
    },

    {
      component: HomeView,
      path: '/',
      name: 'Home'
    }
  ]
})
