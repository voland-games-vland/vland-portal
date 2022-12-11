import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'PageHome',
      component: () => import('../pages/PageHome.vue'),
      children: [
        {
          path: '',
          name: 'Login',
          component: () => import('../components/LoginForm.vue'),
        },
        {
          path: 'registration',
          name: 'Registration',
          component: () => import('../components/RegistrationForm.vue'),
        },
      ],
    },
    {
      path: '/start',
      name: 'PageStart',
      component: () => import('../pages/PageStart.vue'),
    },
    {
      path: '/play',
      name: 'PagePlay',
      component: () => import('../pages/PagePlay.vue'),
    },
    {
      path: '/maps',
      name: 'PageMaps',
      component: () => import('../pages/PageMaps.vue'),
    },
    {
      path: '/clans',
      name: 'PageClans',
      component: () => import('../pages/PageClans.vue'),
    },
    {
      path: '/market',
      name: 'PageMarket',
      component: () => import('../pages/PageMarket.vue'),
    },
    {
      path: '/user/profile',
      name: 'PageUserProfile',
      component: () => import('../pages/PageUserProfile.vue'),
    },
    {
      path: '/clan',
      name: 'PageClan',
      component: () => import('../pages/PageClan.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'PageNotFound',
      component: () => import('../pages/PageNotFound.vue'),
    },
  ],
})


export default router
