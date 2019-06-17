import Vue from 'vue'
import Router from 'vue-router'

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
    },
    {
      path: '/index',
      name: 'Index',
      component: resolve => require(['@/view/Index'],resolve),
      children:[
        {
          path: '/first',
          name: 'firstPage',
          component: resolve => require(['@/view/index/firstPage'],resolve),

        },
        {
          path: '/second',
          name: 'secondPage',
          component: resolve => require(['@/view/index/secondPage'],resolve),
        },
        {
          path: '/third',
          name: 'thirdPage',
          component: resolve => require(['@/view/index/thirdPage'],resolve),
        },
      ]
    },
    {
      path: '/detail',
      name: 'bookDetails',
      component: resolve => require(['@/view/index/book/bookDetails'],resolve),
    },
  ]
})
