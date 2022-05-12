import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'PageHome',
      component: () => import('../pages/PageHome.vue'),
    },
    {
      path: '/:catchAll(.*)',
      name: 'PageNotFound',
      component: () => import('../pages/PageNotFound.vue'),
    },
  ],
})


export default router
