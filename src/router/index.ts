import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tchat-general'
  },
  {
    path: '/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tchat-general'
      },
      {
        path: 'tchat-general',
        component: () => import('@/views/TchatGeneral.vue')
      },
      {
        path: 'messages-prives',
        component: () => import('@/views/MessagesPrives.vue')
      },
      {
        path: 'parametres',
        component: () => import('@/views/Parametres.vue')
      },
      {
        path: 'connexion',
        component: () => import('@/views/Connexion.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
