import { getAuth } from '@firebase/auth'
import { useAuth } from '@vueuse/firebase'
import { createRouter, createWebHistory } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
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
      beforeEnter: () => {
        const { isAuthenticated } = useAuth(getAuth())
        if (isAuthenticated.value) {
          return {
            path: '/start'
          }
        }
      }
    },
    {
      path: '/start',
      component: () => import('../layouts/LayoutSidenavigation.vue'),
      children: [
        {
          path: '',
          name: 'PageStart',
          component: () => import('../pages/PageStart.vue'),
          meta: { requiresAuth: true }
        },
      ],
    },
    {
      path: '/play',
      component: () => import('../layouts/LayoutSidenavigation.vue'),
      children: [
        {
          path: '',
          name: 'PagePlay',
          component: () => import('../pages/PagePlay.vue'),
          meta: { requiresAuth: true }
        },
      ],
    },
    {
      path: '/maps',
      component: () => import('../layouts/LayoutSidenavigation.vue'),
      children: [
        {
          path: '',
          name: 'PageMaps',
          component: () => import('../pages/PageMaps.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'new',
          name: 'PageMapsNew',
          component: () => import('../pages/PageMapsNew.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'edit/:id/grid',
          name: 'PageMapsEditGrid',
          component: () => import('../pages/PageMapsEditGrid.vue'),
          meta: { requiresAuth: true }
        }
      ],
    },
    {
      path: '/characters',
      component: () => import('../layouts/LayoutSidenavigation.vue'),
      children: [
        {
          path: '',
          name: 'PageCharacters',
          component: () => import('../pages/PageCharacters.vue'),
          meta: { requiresAuth: true }
        },
      ],
    },
    {
      path: '/clans',
      component: () => import('../layouts/LayoutSidenavigation.vue'),
      children: [
        {
          path: '',
          name: 'PageClans',
          component: () => import('../pages/PageClans.vue'),
          meta: { requiresAuth: true }
        },
      ],
    },
    {
      path: '/market',
      component: () => import('../layouts/LayoutSidenavigation.vue'),
      children: [
        {
          path: '',
          name: 'PageMarket',
          component: () => import('../pages/PageMarket.vue'),
          meta: { requiresAuth: true }
        },
      ],
    },
    {
      path: '/profile-me',
      component: () => import('../layouts/LayoutSidenavigation.vue'),
      children: [
        {
          path: '',
          name: 'PageProfileMe',
          component: () => import('../pages/PageProfileMe.vue'),
          meta: { requiresAuth: true}
        }
      ]
    },
    {
      path: '/playbook',
      component: () => import('../layouts/LayoutSidenavigation.vue'),
      children: [
        {
          path: '',
          name: 'PagePlaybook',
          component: () => import('../pages/PagePlaybook.vue'),
          meta: { requiresAuth: true}
        }
      ]
    },
    {
      path: '/payment/credit-card',
      component: () => import('../layouts/LayoutSidenavigation.vue'),
      children: [
        {
          path: '',
          name: 'PagePaymentCreditCard',
          component: () => import('../pages/PagePaymentCreditCard.vue'),
          meta: { requiresAuth: true}
        }
      ]
    },
    {
      path: '/payment-success',
      component: () => import('../layouts/LayoutSidenavigation.vue'),
      children: [
        {
          path: '',
          name: 'PagePaymentSuccess',
          component: () => import('../pages/PagePaymentSuccess.vue'),
          meta: { requiresAuth: true}
        }
      ]
    },
    {
      path: '/payment/history',
      component: () => import('../layouts/LayoutSidenavigation.vue'),
      children: [
        {
          path: '',
          name: 'PagePaymentHistory',
          component: () => import('../pages/PagePaymentHistory.vue'),
          meta: { requiresAuth: true}
        }
      ]
    },
    {
      path: '/terms-of-service',
      component: () => import('../pages/PageTermsOfService.vue')
    },
    {
      path: '/user/profile',
      name: 'PageUserProfile',
      component: () => import('../pages/PageUserProfile.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/clan',
      name: 'PageClan',
      component: () => import('../pages/PageClan.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/cancel-payment-strip',
      redirect: '/payment/credit-card'
    },
    {
      path: '/success-payment-strip',
      redirect: '/payment-success'
    },
    {
      path: '/:catchAll(.*)',
      name: 'PageNotFound',
      component: () => import('../pages/PageNotFound.vue'),
    },
  ],
})

router.beforeEach((to, from) => {
  const { isAuthenticated } = useAuth(getAuth())
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      path: '/',
      // save the location we were at to come back later
      // query: { redirect: to.fullPath },
    }
  }
})


export default router
