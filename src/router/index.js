import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import LoginForm from '@/components/LoginForm'
import Community from '@/components/Community'
import SignUP from '@/components/SignUP'

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {path: '/', component : Main},
    {path: '/hello', component : HelloWorld},
    {path: '/login', name: 'login', component : LoginForm},
    {path: '/community', component : Community},
    {path: '/signUp', component : SignUP},
  ]
})
