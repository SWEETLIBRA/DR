import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/pages/Dashboard'
import About from '@/pages/About'
import NotFound from '@/pages/NotFound'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/dashboard/add/:payment/:category',
      name: 'addNewPaymentFood',
      component: Dashboard
    },
    {
      path: '/dashboard/add/:payment/:category',
      name: 'addNewPaymentTransport',
      component: Dashboard
    },
    {
      path: '/dashboard/add/:payment/:category',
      name: 'addNewPaymentEducation',
      component: Dashboard
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/notfound',
      name: 'notfound',
      component: NotFound
    }
  ]
})

export default router
