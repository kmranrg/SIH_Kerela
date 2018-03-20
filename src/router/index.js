import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/pages/AppHome'
import HospitalProfile from '@/pages/HospitalProfile'
import Landing from '@/pages/Landing'
import Form from '@/pages/Form'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hospitals',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/hospital-profile',
      name: 'HospitalProfile',
      component: HospitalProfile
    },
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path:'/form',
      name: 'Form',
      component: Form
    }
  ]
})
