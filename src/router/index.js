import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/pages/Hello'
import Home from '@/components/pages/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'Hello', component: Hello},
    {path: '/home', component: Home}
  ]
})
