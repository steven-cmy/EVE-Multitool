import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useTokenStore } from '@/stores/sso-token'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/sso/callback',
      name: 'sso-callback',
      redirect: to => {
        const tokenStore = useTokenStore()
        if (to.query.token&&to.query.state) {
          const state = (to.query.state as string).slice(0, tokenStore.stateLength)
          if (!tokenStore.checkState(state)) {
            console.error('Invalid state in SSO callback')
            return '/'
          }
          if (!tokenStore.validateToken(to.query.token as string)) {
            console.error('Invalid token in SSO callback')
            return '/'
          }

          // Store the token
          tokenStore.token = to.query.token as string
          localStorage.setItem('sso-token', tokenStore.token)

          // Clear the state
          sessionStorage.removeItem('sso-state')
        }

        return decodeURIComponent((to.query.state as string).slice(tokenStore.stateLength)) ?? '/'
      }
    }
  ],
})

export default router
