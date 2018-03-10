import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/AppHome'
import HospitalProfile from '@/components/HospitalProfile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/hospital-profile',
      name: 'HospitalProfile',
      component: HospitalProfile
    },
  ]
})
