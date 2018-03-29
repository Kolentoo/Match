import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
// import home from '../pages/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
