import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/pages/AppHome'
import HospitalProfile from '@/pages/HospitalProfile'
import Landing from '@/pages/Landing'
import Form from '@/pages/Form'
import Temp from '@/pages/Temp'
import pwo from '@/pages/pwo'
import ReportIssue from '@/pages/ReportIssue'
import LoginPanel from '@/pages/LoginPanel'

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
    },
    {
      path:'/ReportIssue',
      name: 'ReportIssue',
      component: ReportIssue
    },
    {
      path:'/LoginPanel',
      name: 'LoginPanel',
      component: LoginPanel
    },
    {
      path:'/pwo',
      name: 'pwo',
      component: pwo
    },
    {
      path: '/temp',
      name: 'Temp',
      component: Temp
    }
  ]
})
