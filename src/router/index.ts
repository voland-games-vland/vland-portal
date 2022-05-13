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
          component: () => import('../components/LoginForm.vue'),
        },
        {
          path: 'registration',
          component: () => import('../components/RegistrationForm.vue'),
        },
      ],
    },
    {
      path: '/user/profile',
      name: 'PageUserProfile',
      component: () => import('../pages/PageuserProfile.vue'),
    },
    {
      path: '/:catchAll(.*)',
      name: 'PageNotFound',
      component: () => import('../pages/PageNotFound.vue'),
    },
  ],
})


export default router
