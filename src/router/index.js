import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/pages/Hello'
import Home from '@/components/pages/Home'
import Product from '@/components/pages/Product'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', component: Hello},
    {path: '/home', component: Home},
    {path: '/product', component: Product}
  ]
})
