// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import CompareTable from "@/components/CompareTable"
import Footer from "@/components/Footer"
import BottomNavigation from "@/components/BottomNavigation"
import DropdownButton from "@/components/DropdownButton"
import * as VueGoogleMaps from "vue2-google-maps"
import GoogleMaps from "./components/GoogleMaps";
import Dropdown from "./components/Dropdown";
import BreadCrumbs from "./components/BreadCrumbs";
import BottomSheet from "./components/BottomSheet";

Vue.component('compare-table', CompareTable );
Vue.component('app-footer', Footer);
Vue.component('bottom-navigation', BottomNavigation);
Vue.component('drop-down', DropdownButton);
Vue.component('google-maps', GoogleMaps);
Vue.component('dropbtn', Dropdown);
Vue.component('bread', BreadCrumbs);
Vue.component('sheet', BottomSheet);

Vue.use(Vuetify)
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCHk3PQ958NGsGA1sw6Ln__P1S4i_gjQnk",
    libraries: "places" // necessary for places input
  }
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
