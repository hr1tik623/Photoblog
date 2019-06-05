import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/shared/Alert.vue'
import dateDialog from './components/contests/edit/editdate.vue'
import detailsDialog from './components/contests/edit/editdetails.vue'
import timeDialog from './components/contests/edit/edittime.vue'
import likeDialog from './components/contests/likes/likedialog.vue'

Vue.config.productionTip = false
Vue.filter('date',DateFilter)
Vue.component('app-alert', AlertCmp)
Vue.component('app-edit-meetup-details-dialog', detailsDialog)
Vue.component('app-edit-meetup-date-dialog', dateDialog)
Vue.component('app-edit-meetup-time-dialog', timeDialog)
Vue.component('app-meetup-register-dialog',likeDialog)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyBMw1veLQHNq2H4hKicLeTAcLYv9Yr10Ow",
    authDomain: "photoblog-d60ad.firebaseapp.com",
    databaseURL: "https://photoblog-d60ad.firebaseio.com",
    projectId: "photoblog-d60ad",
    storageBucket: "photoblog-d60ad.appspot.com",
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})