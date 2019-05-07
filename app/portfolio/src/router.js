import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Login from './components/Login.vue'
import Myconfig from './components/Myconfig.vue'
import Greeting from './components/Greeting.vue'
import firebase from 'firebase'

Vue.use(Router)

let router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: 'login'
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Myconfig',
      name: 'Myconfig',
      component: Myconfig
    },
    {
      path: '/greeting',
      name: 'Greeting',
      component: Greeting
    }
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home,
    //   meta: { requiresAuth: true }
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})

// 未認証の場合はログイン画面にリダイレクトする
router.beforeEach((to, from, next) => {
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    if(requiresAuth) {
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                next()
            } else {
                next({
                    path: '/',
                    query: { redirect: to.fullPath }
                })
            }
        })
    } else {
        next()
    }
})

export default router