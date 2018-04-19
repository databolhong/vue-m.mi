import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const index = r => require.ensure([], () => r(require('../pages/index/index.vue')), 'pages')

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
      // children: [
      //   {
      //     path: 'index'
      //   }
      // ]
    }
  ]
})
