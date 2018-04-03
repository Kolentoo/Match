import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import manage from '../pages/manage'
import upload from '../pages/upload'
import home from '../pages/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/manage',
      name: 'manage',
      component: manage
    },
    {
      path: '/upload',
      name: 'upload',
      component: upload
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})
