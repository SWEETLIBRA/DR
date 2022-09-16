import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackCunkName: "dashboard" */'../pages/Dashboard.vue')
    },
    {
      path: '/dashboard/add/:payment/:category',
      name: 'addNewPaymentFood',
      component: () => import(/* webpackCunkName: "dashboard" */'../pages/Dashboard.vue')
    },
    {
      path: '/dashboard/add/:payment/:category',
      name: 'addNewPaymentTransport',
      component: () => import(/* webpackCunkName: "dashboard" */'../pages/Dashboard.vue')
    },
    {
      path: '/dashboard/add/:payment/:category',
      name: 'addNewPaymentEducation',
      component: () => import(/* webpackCunkName: "dashboard" */'../pages/Dashboard.vue')
    },

    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackCunkName: "about" */'../pages/About.vue')
    },

    {
      path: '/notfound',
      name: 'notfound',
      component: () => import(/* webpackCunkName: "notfound" */'../pages/NotFound.vue')
    }
  ]
})

export default router
