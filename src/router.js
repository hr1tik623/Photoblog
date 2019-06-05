import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HelloWorld.vue'
import contest from '@/components/contests/contests.vue'
import createcontests from '@/components/contests/createcontest.vue'
import profile from '@/components/users/profile.vue'
import signup from '@/components/users/signup.vue'
import signin from '@/components/users/signin.vue'
import singlecontest from '@/components/contests/contest.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contests',
      name: 'contest',
      component: contest
    },
    {
      path: '/contests/new',
      name: 'createcontest',
      component: createcontests
    },
    {
      path: '/contests/:id',
      name: 'contest',
      props: true,
      component: singlecontest
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/signin',
      name: 'signin',
      component:signin
    },
    
  ]
})
