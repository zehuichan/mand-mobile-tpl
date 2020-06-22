import Vue from 'vue'
import Router from 'vue-router'

// basic components
import BasicLayout from '@/layouts/BasicLayout'
import BlankLayout from '@/layouts/BlankLayout'

// view components
// Home
const Home = () => import('@/views/home/home')

// Transactions
const Transactions = () => import('@/views/transactions/transactions')

// Discovery
const Discovery = () => import('@/views/discovery/discovery')

// Mall
const Mall = () => import('@/views/mall/mall')

// My
const My = () => import('@/views/my/my')

Vue.use(Router)

export const routes = [
  {path: '/', redirect: 'home'},
  {
    path: '/home',
    component: BasicLayout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {title: '首页'}
      }
    ]
  },
  {
    path: '/transactions',
    component: BasicLayout,
    children: [
      {
        path: '/transactions',
        name: 'transactions',
        component: Transactions,
        meta: {title: '理财'}
      }
    ]
  },
  {
    path: '/discovery',
    component: BasicLayout,
    children: [
      {
        path: '/discovery',
        name: 'discovery',
        component: Discovery,
        meta: {title: '发现'}
      }
    ]
  },
  {
    path: '/mall',
    component: BasicLayout,
    children: [
      {
        path: '/mall',
        name: 'mall',
        component: Mall,
        meta: {title: '商城'}
      }
    ]
  },
  {
    path: '/my',
    component: BasicLayout,
    children: [
      {
        path: '/my',
        name: 'my',
        component: My,
        meta: {title: '我的'}
      }
    ]
  },

  {path: '/403', component: () => import('@/views/errorPage/403')},
  {path: '/404', component: () => import('@/views/errorPage/404')},
  {path: '/500', component: () => import('@/views/errorPage/500')},
  {path: '*', redirect: '/404'}
]

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})
