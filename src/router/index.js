import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const index = r => require.ensure([], () => r(require('../pages/index/index.vue')), 'pages')
const category = r => require.ensure([], () => r(require('../pages/category/category.vue')), 'pages')
const cart = r => require.ensure([], () => r(require('../pages/cart/cart.vue')), 'pages')
const user = r => require.ensure([], () => r(require('../pages/user/user.vue')), 'pages')

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
      // children: []
    },
    {
      path: '/category',
      name: 'category',
      component: category
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/user',
      name: 'user',
      component: user
    }
  ]
})
