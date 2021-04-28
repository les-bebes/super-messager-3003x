import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: {name: 'general'}
  },
  {
    path: '/',
    component: Tabs,
    children: [
      {
        path: 'tchat-general',
        name: 'general',
        component: () => import('@/views/TchatGeneral.vue')
      },
      {
        path: 'messages-prives',
        name: 'private',
        component: () => import('@/views/MessagesPrives.vue')
      },
      {
        path: 'parametres',
        name: 'params',
        component: () => import('@/views/Parametres.vue')
      },
      {
        path: 'connexion',
        name: 'login',
        component: () => import('@/views/auth/Connexion.vue')
      },
      {
        path: 'inscription',
        name: 'register',
        component: () => import('@/views/auth/Inscription.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
