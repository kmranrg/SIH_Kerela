// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import CompareTable from "@/components/CompareTable"
import Footer from "@/components/Footer"
import FooterMobile from "@/components/FooterMobile"
import BottomNavigation from "@/components/BottomNavigation"

Vue.component('compare-table', CompareTable );
Vue.component('app-footer', Footer);
Vue.component('mobile-footer', FooterMobile);
Vue.component('bottom-navigation', BottomNavigation);

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
