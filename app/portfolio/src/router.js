import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Myconfig from './components/Myconfig.vue'
import Login from './components/Login.vue'
import firebase from 'firebase'

Vue.use(Router)

let router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/admin',
      name: 'login',
      component: Login
    },
    {
      path: '/Myconfig',
      name: 'Myconfig',
      component: Myconfig,
      meta: { requiresAuth: true }
    }
  ]
})

// 未認証の場合はルートにリダイレクト
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