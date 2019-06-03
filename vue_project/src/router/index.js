import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Loading',
      component: resolve => require(['@/view/loading'],resolve),
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['@/view/login'],resolve),
      childred:[
        {

        }
      ]
    }
  ]
})
