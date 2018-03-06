import Vue from 'vue'
import Router from 'vue-router'
import AppCompare from '@/components/AppCompare'
import AppHome from '@/components/AppHome'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/compare',
      name: 'AppCompare',
      component: AppCompare
    }
  ]
})
